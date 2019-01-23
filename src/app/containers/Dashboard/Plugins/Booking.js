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

    if ( !bookingApiKey || !bookingCalendarID) {
      return this.setState({ setupIncomplete: true })
    }

    const url = `https://www.googleapis.com/calendar/v3/calendars/${bookingCalendarID}/events?key=${bookingApiKey}`
    
    axios
        .get(url)
        .then(response => {
          console.log("request data success", response);

          let events = []

          response.data.items.map( event => {
            events.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            })
          })

          this.setState({ events })

        })
        .catch(error => {
          console.log(error);
          // dispatch(fetchIngredientsFailed());
        });

  }


  render(){

    return (
      <StyledBookingCalendar>
        <BigCalendar
          style={{height: '420px'}}
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </StyledBookingCalendar>
  
    )
  }
}

const StyledBookingCalendar = styled.div`
    padding: 3% 10%;
`;

export default Booking