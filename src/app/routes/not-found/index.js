import React from 'react';
import Page from '../../components/page';

import styled from 'styled-components';

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="This is embarrassing."
    noCrawl
  > 
    <PageNotFound>
      <div>
        <p>Super embarrassing.</p>
      </div>
    </PageNotFound>
  </Page>
);

const PageNotFound = styled.div`
  min-height: 600px;
  padding-top:  10%;
  margin-bottom: -30px;

  div {
    text-align: center;
  }
`;