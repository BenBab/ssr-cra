import React from "react";
import Input from "../../../../components/UI/Input";
import Minimizer from "../../../../components/UI/Wrappers/Minimizer";
import Flex from "../../../../components/UI/Wrappers/Flex";

import MultiSelect from "../../../../components/UI/MultiSelect";

const BookingPlugin = props => {
    if (!props.plugin) return <div />;

    const { 
        bookingActive,
        bookingPages, 
        bookingEmail, 
        bookingForm, 
        bookingCalendarID, 
        bookingApiKey, 
        bookingTimeSlotsAvailable, 
        bookingTimeSlots, 
        bookingGetCalandarAdvance, 
        bookingSessions, 
        bookingSubjectStrict,
        bookingSubjectSelections
      } = props.plugin;

    console.log("booking settings props", props);

    return (
        <div>
            <Flex>
                <Input
                    inputtype="checkbox"
                    sideLabel="Booking Plugin"
                    parentObj={props.parentObj}
                    name="bookingActive"
                    checked={bookingActive}
                    handleChange={props.handleCheckbox}
                />
                {bookingActive && (
                    <MultiSelect
                        label="Select the pages where this plugin is available"
                        items={props.availableRoutes}
                        name="bookingPages"
                        value={bookingPages}
                        handleChange={props.handleChange}
                        margin={"0 10px 20px 15px"}
                    />
                )}
            </Flex>

            {bookingActive && (
                <Minimizer emptyHeight={"200px"} padding={"20px"}>
                    <div>
                        <Input
                            inputtype="input"
                            label="Enter Business email where bookings are received"
                            parentObj={props.parentObj}
                            name="bookingEmail"
                            value={bookingEmail}
                            onChange={props.handleChange}
                        />
                        <Input
                            inputtype="input"
                            label="Google Calendar Id"
                            parentObj={props.parentObj}
                            name="bookingCalendarID"
                            value={bookingCalendarID}
                            onChange={props.handleChange}
                            helpKey={'bookingCalendarID_Help'}
                        />
                        <Input
                            inputtype="input"
                            label="Google Calendar Api Key"
                            parentObj={props.parentObj}
                            name="bookingApiKey"
                            value={bookingApiKey}
                            onChange={props.handleChange}
                            helpKey={'bookingCalendarAPI_Help'}
                        />
                        <br/>
                        <h2>Booking Calandar options</h2>
                        <Input
                            inputtype="checkbox"
                            sideLabel="Timeslots available (leave unticked if booking times do not repeat)"
                            parentObj={props.parentObj}
                            name="bookingTimeSlotsAvailable"
                            checked={bookingTimeSlotsAvailable}
                            handleChange={props.handleCheckbox}
                        />
                        { bookingTimeSlotsAvailable &&
                        <Input
                            inputtype="input"
                            label="Enter the timeslots when events can be booked on a daily bases"
                            parentObj={props.parentObj}
                            name="bookingTimeSlots"
                            value={bookingTimeSlots}
                            placeholder={'eg 24 hour format..  09:30-10:00, 10:00-10:30, 14:30-15:00'}
                            onChange={props.handleChange}
                        />
                        }
                        <Input
                            inputtype="select"
                            label="Select how far in the future customers can book" 
                            value={bookingGetCalandarAdvance}
                            name="bookingGetCalandarAdvance"
                            items={[
                                {value : "1 month"},
                                {value : "2 months"},
                                {value : "3 months"},
                                {value : "6 months"},
                                {value : "9 months"},
                                {value : "12 months"},                           
                            ]}
                            onChange={props.handleChange}
                        />
                        <Input
                            inputtype="input"
                            type="number"
                            label={bookingTimeSlotsAvailable ? 'Booking sessions available per timeslot' : 'Booking sessions available per day'}
                            parentObj={props.parentObj}
                            name="bookingSessions"
                            value={bookingSessions}
                            placeholder={bookingTimeSlotsAvailable ? 'eg. Entering "6" will allow 6 bookings per timeslot' : 'eg. Entering "6" will allow 6 bookings per day'}
                            onChange={props.handleChange}
                        />
                        <h2>Booking Email Options</h2>
                        <Input
                            inputtype="checkbox"
                            sideLabel="Give email subject options"
                            parentObj={props.parentObj}
                            name="bookingSubjectStrict"
                            checked={bookingSubjectStrict}
                            handleChange={props.handleCheckbox}
                        />
                        {bookingSubjectStrict &&
                            <Input
                                inputtype="input"
                                label="Enter subject selections seperated by a comma"
                                parentObj={props.parentObj}
                                name="bookingSubjectSelections"
                                value={bookingSubjectSelections}
                                onChange={props.handleChange}
                            />
                        }
                    </div>
                </Minimizer>
            )}
        </div>
    );
};

export default BookingPlugin;
