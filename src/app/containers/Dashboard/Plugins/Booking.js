import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import styled from 'styled-components'

require('react-big-calendar/lib/css/react-big-calendar.css')

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


const Booking = props => (
  <StyledBookingCalendar>
    <BigCalendar
      style={{height: '420px'}}
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
    />
  </StyledBookingCalendar>
)

const StyledBookingCalendar = styled.div`
    padding: 3% 10%;
`;

export default Booking