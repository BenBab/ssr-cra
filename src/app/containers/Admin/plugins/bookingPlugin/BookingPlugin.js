import React from "react";
import Input from "../../../../components/UI/Input";
import Minimizer from "../../../../components/UI/Wrappers/Minimizer";
import Flex from "../../../../components/UI/Wrappers/Flex";

import MultiSelect from "../../../../components/UI/MultiSelect";

const BookingPlugin = props => {
    if (!props.plugin) return <div />;

    const { bookingActive, bookingPages, bookingEmail, bookingForm, bookingCalendarID, bookingApiKey } = props.plugin;
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
                            inputtype="checkbox"
                            sideLabel="Include Contact form with booking calendar"
                            parentObj={props.parentObj}
                            name="bookingForm"
                            checked={bookingForm}
                            handleChange={props.handleCheckbox}
                        />
                        <Input
                            inputtype="input"
                            label="Gmail Calendar Id"
                            parentObj={props.parentObj}
                            name="bookingCalendarID"
                            value={bookingCalendarID}
                            onChange={props.handleChange}
                        />
                        <Input
                            inputtype="input"
                            label="Gmail Api Key"
                            parentObj={props.parentObj}
                            name="bookingApiKey"
                            value={bookingApiKey}
                            onChange={props.handleChange}
                        />
                    </div>
                </Minimizer>
            )}
        </div>
    );
};

export default BookingPlugin;
