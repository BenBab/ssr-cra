import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../store/actions/index";

import styled from 'styled-components';

import Spinner from "../../components/UI/Spinner";
import Button from '../../components/UI/Buttons/Button';
import Input from '../../components/UI/Input';

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isAuthenticated && this.props.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  onFormChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, this.props.admin);
  };

  render() {
    console.log("auth page props", this.props);

    let errorMessage = null;

    if (this.props.error) {
      // const errorCode={
      //   EMAIL_NOT_FOUND: 'There is no user record corresponding to this email address',
      //   INVALID_PASSWORD: 'The password entered was invalid - please try again',
      //   USER_DISABLED: 'The user account has been disabled by an administrator.',
      //   INVALID_EMAIL: 'The email address entered is invalid'
      // }
      errorMessage = (
        // <p>{ errorCode[this.props.error.message] }</p>
        <p>{this.props.error}</p>
      );
    }

    return (
      <StyledAuthPage>
        <div>Administrator Login</div>
        <form onSubmit={this.submitHandler}>
          <Input
            inputtype={'input'}
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.onFormChange}
          />
          <Input
            inputtype={'input'}
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onFormChange}
          />
          <Button type={'submit'}>Submit</Button>
          {errorMessage}
        </form>
        {this.props.loading && <Spinner />}
      </StyledAuthPage>
    );
  }
}

const StyledAuthPage = styled.div`
  padding: 10%;
`;

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    admin: state.mainState.admin,
    isAuthenticated: state.auth.userId !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, admin) =>
      dispatch(actions.auth(email, password, admin))
  };
};

export default withRouter(
connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
);
