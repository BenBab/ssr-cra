import React, { Component } from "react";
import styled from "styled-components";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Buttons/Button";
import Flex from "../../../components/UI/Wrappers/Flex";
import Grid from "../../../components/UI/Wrappers/Grid";
import Box from "../../../components/UI/Wrappers/Box";
import Spinner from "../../../components/UI/Spinner";
import Minimizer from "../../../components/UI/Wrappers/Minimizer";

import Dashboard from "../../Dashboard/Dashboard";

import BannerControls from '../../../components/admin-controls/BannerControls';
import MainTextControls from '../../../components/admin-controls/MainTextControls';

class Homepage extends Component {
  state = {
    previewOpen: false
  };

  handleChange = event => {
    event.preventDefault();
    this.props.changeHomepageState(event.target, "home", null);
  };

  handlesubmit = event => {
    event.preventDefault();
    const siteName = process.env.REACT_APP_SITENAME;

    const url = `/${siteName}/site/home/content`;
    this.props.homepageChangeSubmit(url, this.props.homePage.content);
  };

  handleCheckbox = check => event => {
    console.log(check, event.target.checked);
    const newevent = {
      name: event.target.name,
      value: event.target.checked
    };
    this.props.changeHomepageState(newevent, "home", null);
  };

  handleMediaModal = event => {
    event.preventDefault();
    this.props.openMediaModal(event.target, "home", null);
  };

  handleColourPicker = event => {
    this.props.changeHomepageState(event.target, "home", null);
  };

  clearInput = inputName => {
    const event = { name: inputName, value: "" };
    this.props.changeHomepageState(event, "home", null);
  };

  render() {
    if (!this.props.homePage) return <div />;

    const {
      topBanner,
      topBannerHalfwidth,
      midBanner,
      midBannerHalfwidth,
      bottomBanner,
      bottomBannerHalfwidth,
      mainText,
    } = this.props.homePage.content;
    console.log("Homepage Props", this.props);

    return (
      <div className="fullwidth">
        <StyledHomePage>
          <div>
            <Input
              inputtype="inputSelector"
              label={`${
                topBannerHalfwidth
                  ? "Top Banner Image (Inside Banner)"
                  : "Top Banner Image"
              }`}
              name="topBanner"
              value={topBanner}
              onChange={this.handleChange}
              onClick={this.handleMediaModal}
              clearInput={this.clearInput}
            />
            {topBanner && (
              <BannerControls 
                pos={'top'} 
                data={this.props.homePage.content} 
                handleCheckbox={this.handleCheckbox}
                handleChange={this.handleChange}
                handleMediaModal={this.handleMediaModal}
                clearInput={this.clearInput}
                handleColourPicker={this.handleColourPicker}
                availableRoutes={this.props.availableRoutes}
              />
            )}

            <Input
              inputtype="inputSelector"
              label={`${
                midBannerHalfwidth
                  ? "Middle Banner Image (Inside Banner)"
                  : "Middle Banner Image"
              }`}
              name="midBanner"
              value={midBanner}
              onChange={this.handleChange}
              onClick={this.handleMediaModal}
              clearInput={this.clearInput}
            />
            {midBanner && (
              <BannerControls 
                pos={'mid'} 
                data={this.props.homePage.content} 
                handleCheckbox={this.handleCheckbox}
                handleChange={this.handleChange}
                handleMediaModal={this.handleMediaModal}
                clearInput={this.clearInput}
                handleColourPicker={this.handleColourPicker}
                availableRoutes={this.props.availableRoutes}
              />
            )}

            <Input
              inputtype="inputSelector"
              label={`${
                bottomBannerHalfwidth
                  ? "Bottom Banner Image (Inside Banner)"
                  : "Bottom Banner Image"
              }`}
              name="bottomBanner"
              value={bottomBanner}
              onChange={this.handleChange}
              onClick={this.handleMediaModal}
              clearInput={this.clearInput}
            />
            {bottomBanner && (
              <BannerControls 
                pos={'bottom'} 
                data={this.props.homePage.content} 
                handleCheckbox={this.handleCheckbox}
                handleChange={this.handleChange}
                handleMediaModal={this.handleMediaModal}
                clearInput={this.clearInput}
                handleColourPicker={this.handleColourPicker}
                availableRoutes={this.props.availableRoutes}
              />
            )}

            <Input
              inputtype="textarea"
              label="Main Body Text"
              name="mainText"
              value={mainText}
              onChange={this.handleChange}
            />
            <MainTextControls 
                data={this.props.homePage.content} 
                pageID={'home'}
                handleCheckbox={this.handleCheckbox}
                handleChange={this.handleChange}
                handleMediaModal={this.handleMediaModal}
                clearInput={this.clearInput}
                handleColourPicker={this.handleColourPicker}
                availableRoutes={this.props.availableRoutes}
            />

          </div>
          <Preview>
            <Dashboard
              pageInfo={this.props.homePage}
              {...this.props}
              template={this.props.template}
              overlayBlocker={true}
              name={'Home'}
            />
          </Preview>
        </StyledHomePage>
        <Flex justifyContent="flex-start" mobile>
          <Button 
            margin="2px 5px 15px 20px" 
            onClick={this.handlesubmit} 
            mobileMargin={'15px'}
          >
            Update
          </Button>
          {this.props.isUpdating && <Spinner />}
          {this.props.stateBackup && (
            <Button
              margin="2px 20px 15px 20px"
              onClick={this.props.cancelUpdate}
              mobileMargin={'0'}
            >
              Undo Changes
            </Button>
          )}
        </Flex>
      </div>
    );
  }
}

const Preview = styled.div`
  display: block;
  zoom: 30%;
  padding-top: 56px;
  box-shadow: 2px 2px 2px;
`;

const StyledHomePage = styled.div`
  padding: 3vh;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 65% 35%;

  @media (max-width: 500px) {
    grid-template-columns: 100%;
    padding: 0;
  }

`;

export default Homepage;
