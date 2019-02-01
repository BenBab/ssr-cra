import React from "react";
import styled from "styled-components";

const Box = props => {
  const boxOpacity = props.opacity || false;

  return (
    <StyledBox margin={props.margin} opacity={boxOpacity ? "0.5" : "1"} position={props.position}>
      {props.children}
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin: ${props => props.margin || "20px"};
  opacity: ${props => props.opacity};
  position:${props => props.position || 'initial'}
`;

export default Box;
