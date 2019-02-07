import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

const spinner = props => (
  <StyledSpinner large={props.large}>
    <CircularProgress />
  </StyledSpinner>
);

const StyledSpinner = styled.div`
  > div {
    padding: ${props => props.large ? '400px 50%' : 'auto' };
    height: ${props => props.large ? '100px !important' : '20px !important' };  
    width: ${props => props.large ? '100px !important' : '20px !important' };  
    margin: "theme.spacing.unit * 2";
    color: ${props => props.theme.primaryBackGroundColour};
  }
`;

export default spinner;
