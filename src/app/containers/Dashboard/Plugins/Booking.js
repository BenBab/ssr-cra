import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";

import styled from 'styled-components'
import { withSnackbar } from 'notistack';

import ContactForm from './ContactUs'

require('react-big-calendar/lib/css/react-big-calendar.css')

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


class Booking extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    setupIncomplete: false,
    events: [],
    date: "",
    time: "",
    am_Pm: "",
    timeSlot: "",
    start: "",
    end: "",
    dailySessionsRemaining: ""

  }

  bookings = []
  
  componentDidMount(){
    const { bookingApiKey, bookingCalendarID, bookingGetCalandarAdvance } = this.props.pluginOptions

    const monthsToGet = bookingGetCalandarAdvance ? Number(bookingGetCalandarAdvance.split(' ')[0]) : 1;
    
    const d = new Date();
    d.setHours(0,0,0,0);
    const timeMin = d.toISOString()
    const timeMax = moment(d).add(monthsToGet, 'M').toISOString();
    // const timeMin = (new Date(Date.parse("2019-02-09"))).toISOString()
    // const timeMax = (new Date(Date.parse("2019-02-12"))).toISOString()

    if ( !bookingApiKey || !bookingCalendarID) {
      return this.setState({ setupIncomplete: true })
    }

    const url = `https://www.googleapis.com/calendar/v3/calendars/${bookingCalendarID}/events?key=${bookingApiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`
    
    axios
        .get(url)
        .then(response => {
          console.log("request data success", response);
          this.handleEvents(response.data,)

        })
        .catch(error => {
          console.log(error);
          // dispatch(fetchIngredientsFailed());
        });

  }

  handleEvents = (data) => {
    const { bookingTimeSlotsAvailable, bookingTimeSlots,  bookingSessions } = this.props.pluginOptions
    let bookings = []
    const slotsPerSection = 2
    
    
    data.items.map( event => {
      console.log(event)

      const start = event.start.date || moment(event.start.dateTime).format('YYYY-MM-DD');
      const startTime = event.start.dateTime ? moment(event.start.dateTime).format('HH:mm:ss') : 'allDay';
      const end = event.end.date || moment(event.end.dateTime).format('YYYY-MM-DD');
      const endtime = event.end.dateTime ? moment(event.end.dateTime).format('HH:mm:ss') : 'allDay';

      let booking = {}
      let bookingIndex = 0
      const isMain = event.summary.toUpperCase().includes('BOOKING AVAILABLE')
      const isBookedOut = event.summary.toUpperCase().includes('BOOKED OUT')
      let reduceAvailability = 0
      let increaseSlots = 0
      let availableBookings = bookingSessions
      
      if (isMain) {
        availableBookings = event.summary.toUpperCase().includes('SLOTS=')
          ? Number(event.summary.toUpperCase().split('SLOTS=').pop()) 
          : availableBookings
          
      }else {

        reduceAvailability = event.summary.toUpperCase().includes('REDUCE_SLOTS=')
          ? Number(event.summary.toUpperCase().split('REDUCE_SLOTS=').pop())
          : 1;

        increaseSlots = event.summary.toUpperCase().includes('ADD_SLOTS=')
          ? Number(event.summary.split('ADD_SLOTS=').pop())
          : 0
      }
 
      if (!bookingTimeSlotsAvailable){
        booking = bookings.find( (e, index) => {
           bookingIndex = index 
           return e.start === start 
        })
        
        if ( !booking ){

          let sessionCount = Number(availableBookings) - reduceAvailability + increaseSlots
          if (isBookedOut) sessionCount = 0
             
          const eventBubble = this.setEventBubble(sessionCount, Number(availableBookings))

          bookings.push({
            start,
            end,
            title: eventBubble[0],
            initialSessions: Number(availableBookings),
            sessionCount,
            rgbaColor: eventBubble[1]
          })

          console.log('bookings', bookings)

        }else {

          let currentSessionCount = bookings[bookingIndex].sessionCount - reduceAvailability + increaseSlots
          if (isBookedOut) currentSessionCount = 0
          if (isMain){
            currentSessionCount = availableBookings - currentSessionCount

            bookings[bookingIndex] = {
              initialSessions: Number(availableBookings),
            }
          }

          const eventBubble = this.setEventBubble(currentSessionCount, Number(availableBookings))
          
          bookings[bookingIndex] = {
            ...bookings[bookingIndex],
              start,
              end,
              title: eventBubble[0],
              sessionCount: currentSessionCount,
              rgbaColor: eventBubble[1]
          }
          console.log('bookings', bookings)                
        }  
      }

      else{
        console.log('timeslots are available')
      }

    })

    this.setState({ events: bookings })
  }

  setEventBubble = (count, bookingSessions) => {

    if (count === bookingSessions) return [ 'Available',  'rgba(72, 133, 237, 1)' ] 
    else 
    if (count <= 0) return [ 'Fully Booked',  'rgba(0, 0, 0, 0.3)' ] 
    else
    if (count === 1 ) return [ 'One Remaining',  'rgba(219, 50, 54, 1)' ] 
    else
    if ( count <= (bookingSessions/2) ) return [ 'Filling Fast',  'rgba(244, 194, 13, 1)' ] 
    else 
    return [ 'Available',  'rgba(72, 133, 237, 1)' ] 

  }


  onEventClick = (e) => {
    console.log(e)
    //TO DO: add toast for booked out 
    if (e.title === "Fully Booked") return this.props.enqueueSnackbar('Oh no! Sorry cannot select this date, it has already been booked out', { variant : 'info' })

    this.myRef.current.scrollIntoView({behavior: 'smooth'})
    const value = moment(e.start).format('dddd DD-MM-YYYY')
    
    this.setState({ 
      date: value,
      start : e.start,
      end: e.end,
      dailySessionsRemaining: e.sessionCount
    })

  }

  handlechange = event => {
    let am_Pm = this.state.am_Pm
    const {value, name} = event.target
    if ( name === 'time'){
      if (value === '') am_Pm = ''
      else{
        let splitVal = value.split(':')
        Number(splitVal[0]) >= 0 && Number(splitVal[0]) <= 11 
          ? am_Pm = 'AM'
          : am_Pm = 'PM'
      }
    }

    this.setState({ [event.target.name]: event.target.value, disableButton: false, am_Pm });
  };


  onHeaderSelect = (s) => {
    console.log(s)
  }


  eventStyleGetter(event, start, end, isSelected){
    //console.log(event);
    var backgroundColor = event.rgbaColor;
    var style = {
        textAlign: 'center',
        height: '25px',
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}


  render(){
    const { date, time, am_Pm, timeSlot, start, end, dailySessionsRemaining } = this.state
    const { pluginOptions } = this.props
    
    return (
      <>
      <StyledBookingCalendar>
        <BigCalendar
          selectable
          onDrillDown={event => this.onHeaderSelect(event)}
          onSelectEvent={event => this.onEventClick(event)}
          style={{height: '420px'}}
          localizer={localizer}
          events={this.state.events}
          views={{ month: true }}
          eventPropGetter={this.eventStyleGetter}
        />
      </StyledBookingCalendar>
      <ContactForm 
        booking={{ date, time, am_Pm, timeSlot, start, end, dailySessionsRemaining }} 
        handlechange={this.handlechange} 
        refProp={this.myRef} 
        pluginOptions={pluginOptions} />
      {/* <div ref={this.myRef} ></div> */}
      </>
  
    )
  }

  
  
}


const StyledBookingCalendar = styled.div`
    padding: 3% 10%;
`;

export default withSnackbar(Booking);