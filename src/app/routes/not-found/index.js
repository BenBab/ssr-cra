import React from 'react';
import { NavLink } from "react-router-dom";
import Page from '../../components/page';

import styled from 'styled-components';

import dino from "../../assets/dino.jpg";
import Button from '../../components/UI/Buttons/Button'

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="This is embarrassing."
    noCrawl
  > 
    <PageNotFound style={{ textAlign: 'center' }}>
      <h1 >404 not found</h1>
      <h1>Well we weren't expecting that...</h1>
      
      <div style={{
        backgroundImage: `url(${dino})`,
        height: '600px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        position: 'relative'
      }}>
      
      <Button>
        <NavLink to={"/"}>
          Back To HomePage
        </NavLink>
      </Button>
        
      </div>
    </PageNotFound>
  </Page>
);

const PageNotFound = styled.div`
  min-height: 600px;
  padding-top:  5%;
  margin-bottom: -30px;

  a {
    text-decoration: none;
    color: inherit;
  }

`;