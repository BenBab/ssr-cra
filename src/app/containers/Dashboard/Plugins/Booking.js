import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";

import styled from 'styled-components'


require('react-big-calendar/lib/css/react-big-calendar.css')

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


class Booking extends Component {

  state = {
    setupIncomplete: false,
    events: []
  }

  componentDidMount(){
    const { bookingApiKey, bookingCalendarID } = this.props.pluginOptions
    const timeMin = (new Date(Date.parse("2019-01-22"))).toISOString()
    const timeMax = (new Date(Date.parse("2019-02-27"))).toISOString()

    if ( !bookingApiKey || !bookingCalendarID) {
      return this.setState({ setupIncomplete: true })
    }

    const url = `https://www.googleapis.com/calendar/v3/calendars/${bookingCalendarID}/events?key=${bookingApiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`
    
    axios
        .get(url)
        .then(response => {
          console.log("request data success", response);
          this.handleEvents(response.data)

        })
        .catch(error => {
          console.log(error);
          // dispatch(fetchIngredientsFailed());
        });

  }

  handleEvents = (data) => {
    let events = []
    const slotsPerSection = 2
    
    
    data.items.map( event => {
      console.log(event)

      const start = event.start.date || event.start.dateTime
      const end = event.end.date || event.end.dateTime

      
      events.push({
        start,
        end,
        title: event.summary,
        rgbaColor: 'rgba(225, 0, 0, 0.8)'
      })
    })

    this.setState({ events })
  }


  onEventClick = (e) => {
    console.log(e)
  }

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

    return (
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
  
    )
  }
}

const StyledBookingCalendar = styled.div`
    padding: 3% 10%;
`;

export default Booking;