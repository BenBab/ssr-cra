import React, { Component } from "react";
import styled from "styled-components";

import axios from "axios";
import { withSnackbar } from 'notistack';
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Buttons/Button";
import Spinner from "../../../components/UI/Spinner";
import Flex from "../../../components/UI/Wrappers/Flex";
import Box from "../../../components/UI/Wrappers/Box";

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    successEmail: "",
    errorEmail: "",
    disableButton: false,
    spinner: false,
    validationErrors: false,
    requiredErrors: {}
  };

  // handleSubmit = this.handleSubmit.bind(this);

  componentDidUpdate(prevProps){
    if (this.props.booking && this.props.booking.date !== prevProps.booking.date){
      const { requiredErrors } = this.state
      this.setState({ requiredErrors: {...requiredErrors, date : false } })
    }
  }

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value, disableButton: false });
  };


  async handleSubmit() {
    const { name, email, phone, message } = this.state;
    const { pluginOptions, booking, enqueueSnackbar } = this.props;
    
    const postUrl = booking 
      ? "/api/requestbooking"
      : "/api/mailer"

    let objectProperties = {
      name,
      email,
      phone,
      message,
      emailTo: booking ? pluginOptions.bookingEmail : pluginOptions.contactUsEmail
    }

    if (booking) objectProperties = {
      ...objectProperties,
         date: booking.date,
         time: booking.time,
         am_Pm: booking.am_Pm,
         timeSlot: booking.timeSlot,
         start: booking.start,
         end: booking.end,
         dailySessionsRemaining: booking.dailySessionsRemaining

      }

    if ((!booking && !pluginOptions.contactUsEmail) || (booking && !pluginOptions.bookingEmail) )
      return alert("problem with website email configuration");

    this.setState({ spinner: true });

    try {
      let form = await axios.post(postUrl, objectProperties);

      if (form.status === 200) {
        this.setState({
          successEmail: "Your message was sent successfully",
          disableButton: true,
          spinner: false
        },() => enqueueSnackbar(this.state.successEmail), { variant : 'success' });
      } else {
        this.setState({
          errorEmail: "There was an issue sending your email try again later",
          disableButton: false,
          spinner: false
        },() => enqueueSnackbar(this.state.errorEmail), { variant : 'error' });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        errorEmail: "There was an issue sending your email",
        disableButton: false,
        spinner: false
      },() => enqueueSnackbar(this.state.errorEmail), { variant : 'error' });
    }
  }


  validateInputs = (event) => {
    event.preventDefault()
    const { name, email, phone} = this.state
    const {booking} = this.props

    let required = {name, email, phone}
    if (booking) required = { ...required, date : booking.date}
    let validationFails = {}

    Object.keys(required).map( key => {
      const item = required[key];

      if (item === ''){
        validationFails = { ...validationFails, [key]: true }
      }
    })

    if (Object.keys(validationFails).length !== 0 && validationFails.constructor === Object ){
      
      this.setState({
        requiredErrors: validationFails,
        validationErrors: 'Required fields are empty, please fill in the required highlighted fields'
      }, () => {
         this.props.enqueueSnackbar(this.state.validationErrors, { variant : 'error' })    
      })  
    }
    
    else { this.handleSubmit()  } 
  }


  render() {
    const { spinner, disableButton, requiredErrors } = this.state;
    const { booking, refProp, pluginOptions, handlechange } = this.props

    return (
      <ContactForm>
        <h1>{booking ? 'Booking Form' : 'Contact Us'}</h1>

        <form onSubmit={this.validateInputs}>
          {booking &&
            <Input
              inputtype="input"
              refProp={refProp}
              readOnly={true}
              label="Booking date"
              name="date"
              value={booking.date}
              placeholder={'Select and available date on the booking calendar'}
              validation={requiredErrors.date}
            />
          }
          {booking && !pluginOptions.bookingTimeSlotsAvailable &&
            <Flex >
              
                <Input
                  inputtype="input"
                  label="Start time request"
                  name="time"
                  type="time"
                  value={booking.time}
                  onChange={handlechange}
                />
                <Box margin={'6px 6px 6px 70px'} position={'absolute'} >{booking.am_Pm}</Box>    
                
            </Flex>

          }
          {booking && pluginOptions.bookingTimeSlotsAvailable &&
            <Input
              inputtype="select"
              label="Time request"
              name="timeSlot"
              onChange={handlechange}
            />
          }
          
          <Input
            inputtype="input"
            label="Name"
            name="name"
            onChange={this.handlechange}
            validation={requiredErrors.name}
            onFocus={(e) => this.setState({ requiredErrors: {...requiredErrors, [e.target.name] : false } })}
          />
          <Input
            inputtype="input"
            type="email"
            label="Email"
            name="email"
            onChange={this.handlechange}
            validation={requiredErrors.email}
            onFocus={(e) => this.setState({ requiredErrors: {...requiredErrors, [e.target.name] : false } })}
          />
          <Input
            inputtype="input"
            type="tel"
            label="Contact phone number"
            name="phone"
            onChange={this.handlechange}
            validation={requiredErrors.phone}
            onFocus={(e) => this.setState({ requiredErrors: {...requiredErrors, [e.target.name] : false } })}
          />
          <Input
            inputtype="textarea"
            label="Message"
            name="message"
            onChange={this.handlechange}
          />
          <Flex>
            <Button type={"submit"} disabled={disableButton}>
              Send
            </Button>
            {spinner && <Spinner />}
          </Flex>
        </form>
      </ContactForm>
    );
  }
}

const ContactForm = styled.div`
  padding: 40px 10%;
`;

export default withSnackbar(ContactUs);
