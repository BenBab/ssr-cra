import React from "react";
import Button from "@material-ui/core/Button";
import styled, { withTheme } from "styled-components";

const button = props => {
  const { disabled = false, mobileMargin } = props;
  let background = props.active 
    ? props.theme.buttonHoverBackground 
    : props.theme.primaryBackGroundColour;

  let txtColor = props.active 
  ? props.theme.buttonhovertext 
  : props.theme.primaryTxtColour;
  let borderColor = props.theme.primaryBackGroundColour;

  console.log('button props', props)

  if (props.variant === "outlined") {
    background = props.active ? props.theme.buttonHoverBackground : "transparent";
    txtColor = props.active ? props.theme.buttonhovertext : "rgba(0, 0, 0, 0.9)";
    borderColor = "rgba(0, 0, 0, 0.8)";

    if (props.nav && props.theme.navLightTheme) {
      txtColor = "rgba(255, 255, 255, 0.9)";
      borderColor = "rgba(255, 255, 255, 0.8)";
    }
  }

  return (
    <StyledButton
      margin={props.margin}
      variant={props.variant || "contained"}
      background={background}
      txtColor={txtColor}
      borderColor={borderColor}
      mobileMargin={mobileMargin}
    >
      <label htmlFor="contained-button-file">
        <Button
          type={props.type || "button"}
          variant={props.variant || "contained"}
          onClick={props.onClick}
          disabled={disabled}
        >
          {props.children}
        </Button>
      </label>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  margin: ${props => props.margin || "5px"};

  > label button {
    background-color: ${props => props.background};
    color: ${props => props.txtColor};
    border-color: ${props => props.borderColor};

    &:hover {
      background-color: ${props => props.theme.buttonHoverBackground};
      color: ${props => props.theme.buttonhovertext};
    }
  }

  @media(max-width: 500px){
    margin: ${props => props.mobileMargin}
  }
`;

export default withTheme(button);
