import React from "react";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import Input from "../../../../components/UI/Input";
import TabMenu from "../TabsMenu";
import Button from "../../../../components/UI/Buttons/Button";
import Flex from "../../../../components/UI/Wrappers/Flex";
import Spinner from "../../../../components/UI/Spinner";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Dashboard from "../../../Dashboard/Dashboard";

import BannerControls from '../../../../components/admin-controls/BannerControls'
import MainTextControls from '../../../../components/admin-controls/MainTextControls'
import TestimonialsControls from '../../../../components/admin-controls/TestimonialsControls';

const TabItems = props => {
  console.log("tabItems props", props);
  if (props.itemProps.dropdownPages) {
    return (
      <TabMenu
        navigationItems={props.itemProps.dropdownPages}
        parentId={props.pageId}
        parent={props.children}
        onChange={props.onChange}
        handlePageDelete={props.handlePageDelete}
        openMediaModal={props.openMediaModal}
        updatePageSubmit={props.updatePageSubmit}
        isUpdating={props.isUpdating}
        cancelUpdate={props.cancelUpdate}
        stateBackup={props.stateBackup}
        availableRoutes={props.availableRoutes}
        template={props.template}
        plugins={props.plugins}
      />
    );
  }

  const handleChange = event => {
    event.preventDefault();
    props.onChange(event.target, props.pageId, props.parentId);
  };

  const handleCheckbox = check => event => {
    console.log(check, event.target.checked);
    const newevent = {
      name: event.target.name,
      value: event.target.checked
    };
    props.onChange(newevent, props.pageId, props.parentId);
  };

  const handleMediaModal = event => {
    event.preventDefault();
    props.openMediaModal(event.target, props.pageId, props.parentId);
  };

  const handleColourPicker = event => {
    props.onChange(event.target, props.pageId, props.parentId);
  };

  const handlesubmit = event => {
    event.preventDefault();
    props.updatePageSubmit(
      props.itemProps.content,
      props.pageId,
      props.parentId
    );
  };

  const clearInput = inputName => {
    const event = { name: inputName, value: "" };
    props.onChange(event, props.pageId, props.parentId);
  };

  const deletePage = () => {
    props.handlePageDelete(props.pageId, props.parentId);
  };

  const {
    topBanner,
    topBannerHalfwidth,
    midBanner,
    midBannerHalfwidth,
    bottomBanner,
    bottomBannerHalfwidth,
    mainText,
    testimonialsPosition,
  } = props.itemProps.content;

  const positionArray = [
    { value: "Top" },
    { value: "Middle" },
    { value: "Bottom" }
  ];

  return (
    <Paper elevation={20}>
      <StyledTabItems>
        <div>
          {props.children}
          <Input
            inputtype="inputSelector"
            label={`${
              topBannerHalfwidth
                ? "Top Banner Image (Inside Banner)"
                : "Top Banner Image"
            }`}
            name="topBanner"
            value={topBanner}
            onChange={handleChange}
            onClick={handleMediaModal}
            clearInput={clearInput}
          />
          {topBanner && 
            <BannerControls 
              pos={'top'} 
              data={props.itemProps.content} 
              handleCheckbox={handleCheckbox}
              handleChange={handleChange}
              handleMediaModal={handleMediaModal}
              clearInput={clearInput}
              handleColourPicker={handleColourPicker}
              availableRoutes={props.availableRoutes}
              />
          }

          <Input
            inputtype="inputSelector"
            label={`${
              midBannerHalfwidth
                ? "Middle Banner Image (Inside Banner)"
                : "Middle Banner Image"
            }`}
            name="midBanner"
            value={midBanner}
            onChange={handleChange}
            onClick={handleMediaModal}
            clearInput={clearInput}
          />
          {midBanner && (
            <BannerControls 
              pos={'mid'} 
              data={props.itemProps.content} 
              handleCheckbox={handleCheckbox}
              handleChange={handleChange}
              handleMediaModal={handleMediaModal}
              clearInput={clearInput}
              handleColourPicker={handleColourPicker}
              availableRoutes={props.availableRoutes}
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
            onChange={handleChange}
            onClick={handleMediaModal}
            clearInput={clearInput}
          />
          {bottomBanner && (
            <BannerControls 
              pos={'bottom'} 
              data={props.itemProps.content} 
              handleCheckbox={handleCheckbox}
              handleChange={handleChange}
              handleMediaModal={handleMediaModal}
              clearInput={clearInput}
              handleColourPicker={handleColourPicker}
              availableRoutes={props.availableRoutes}
            />
          )}

          <Input
            inputtype="textarea"
            label="Main Body Text"
            name="mainText"
            value={mainText}
            onChange={handleChange}
            helpKey={'mainText_help'}
          />
          <MainTextControls 
            data={props.itemProps.content} 
            handleCheckbox={handleCheckbox}
            handleChange={handleChange}
            handleMediaModal={handleMediaModal}
            clearInput={clearInput}
            handleColourPicker={handleColourPicker}
            availableRoutes={props.availableRoutes}
            positionArray={positionArray}
          />

          <Input
            inputtype="select"
            label="Testimonials Plugin Position"
            name="testimonialsPosition"
            value={testimonialsPosition}
            onChange={handleChange}
            items={positionArray}
          />
          <TestimonialsControls 
            data={props.itemProps.content} 
            pageID={props.pageId}
            handleCheckbox={handleCheckbox}
            handleChange={handleChange}
            handleMediaModal={handleMediaModal}
            clearInput={clearInput}
            handleColourPicker={handleColourPicker}
            availableRoutes={props.availableRoutes}
          />
        </div>
        <Preview>
          <Dashboard
            pageInfo={props.itemProps}
            {...props}
            template={props.template}
            plugins={props.plugins}
            overlayBlocker={true}
            name={props.pageId}
          />
        </Preview>
      </StyledTabItems>
      <Flex justifyContent={"space-between"}>
        <div>
          <Flex justifyContent="flex-start">
            <Button margin="2px 5px 15px 20px" onClick={handlesubmit}>
              Update
            </Button>
            {props.isUpdating && <Spinner />}
            {props.stateBackup && (
              <Button margin="2px 20px 15px 20px" onClick={props.cancelUpdate}>
                Undo Changes
              </Button>
            )}
          </Flex>
        </div>
        <DeletePageIcon>
          <IconButton onClick={deletePage}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </DeletePageIcon>
      </Flex>
    </Paper>
  );
};

const StyledTabItems = styled.div`
  padding: 3vh;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 8px;

  @media (max-width: 500px) {
    grid-template-columns: 100%;
  }

`;

const Preview = styled.div`
  display: block;
  zoom: 30%;
  padding-top: 56px;
  box-shadow: 2px 2px 2px;

`;

const DeletePageIcon = styled.div`
  padding: 5px;
`;

export default TabItems;
