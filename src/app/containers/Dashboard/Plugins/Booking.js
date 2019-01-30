import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";

import styled from 'styled-components'

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
    timeSlot: "",
    start: "",
    end: "",
    dailySessionsRemaining: ""

  }

  bookings = []
  
  componentDidMount(){
    const { bookingApiKey, bookingCalendarID } = this.props.pluginOptions
    const timeMin = (new Date(Date.parse("2019-01-23"))).toISOString()
    const timeMax = (new Date(Date.parse("2019-02-15"))).toISOString()

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
    const { bookingTimeSlotsAvailable, bookingTimeSlots, bookingSessions } = this.props.pluginOptions
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
      const reduceAvailability = event.summary.includes('slots=') || event.summary.includes('subtract_slots=') ? Number(event.summary.split('slots=').pop()) : 1
      const increaseSlots = event.summary.includes('add_slots=') ? Number(event.summary.split('add_slots=').pop()) : 0
      const isMain = event.summary.toUpperCase().includes('BOOKING AVAILABLE')
      const isBookedOut = event.summary.toUpperCase().includes('BOOKED OUT')
      
      if (!bookingTimeSlotsAvailable){
        booking = bookings.find( (e, index) => {
           bookingIndex = index 
           return e.start === start 
        })
        
        if ( !booking ){

          let sessionCount = Number(bookingSessions) - reduceAvailability + increaseSlots
          if (isMain) sessionCount++
          if (isBookedOut) sessionCount = 0
             
          const eventBubble = this.setEventBubble(sessionCount, Number(bookingSessions))

          bookings.push({
            start,
            end,
            title: eventBubble[0],
            sessionCount,
            rgbaColor: eventBubble[1]
          })

          console.log('bookings', bookings)

        }else {

          let currentSessionCount = bookings[bookingIndex].sessionCount - reduceAvailability + increaseSlots
          if (isMain) currentSessionCount++
          if (isBookedOut) currentSessionCount = 0

          const eventBubble = this.setEventBubble(currentSessionCount, Number(bookingSessions))
          
          bookings[bookingIndex] = {
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
    if (e.title === "Fully Booked")return

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
    this.setState({ [event.target.name]: event.target.value, disableButton: false });
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
    const { date, time, timeSlot, start, end, dailySessionsRemaining } = this.state
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
      <ContactForm booking={{ date, time, timeSlot, start, end, dailySessionsRemaining }} handlechange={this.handlechange} refProp={this.myRef} pluginOptions={pluginOptions} />
      {/* <div ref={this.myRef} ></div> */}
      </>
  
    )
  }

  
  
}


const StyledBookingCalendar = styled.div`
    padding: 3% 10%;
`;

export default Booking;