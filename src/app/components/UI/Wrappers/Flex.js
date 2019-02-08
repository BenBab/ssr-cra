import React from "react";
import styled from "styled-components";

const Flex = props => {

  const sm_flexDir = props.mobile || props.tablet ? 'column' : 'row';
  const m_flexDir = props.tablet ? 'column' : 'row';

  return (
    <FlexBox
      justifyContent={props.justifyContent}
      margin={props.margin}
      align={props.align || "center"}
      sm_flexDir={sm_flexDir}
      m_flexDir={m_flexDir}
    >
      {props.children}
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justifyContent || "initial"};
  margin: ${props => props.margin || "auto"};

  @media(max-width: 768px){
    flex-direction: ${props => props.m_flexDir}
  }

  @media(max-width: 500px){
    flex-direction: ${props => props.sm_flexDir}
  }

`;

export default Flex;
