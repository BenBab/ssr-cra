import React from "react";
import { withRouter, Redirect } from "react-router";

import Page from "../../components/page";
import Dashboard from "../../containers/Dashboard/Dashboard";

import Spinner from '../../components/UI/Spinner'

// const Homepage = props => {
//   console.warn("homepage.props", props);
//   return (
//     <Page id="homepage">
//       <Dashboard pageInfo={props.pageInfo} />
//     </Page>
//   );
// };

const Homepage = props => {
  console.warn("homepage.props", props);
  // if (!props.pageInfo) return <div>loading ...</div>;

  // const currentPage = Object.keys(props.pageInfo).find(key => {
  //   const page  = props.pageInfo[key];
  //   if (key === props.currentPage){
  //     return page;
  //   }
  // })

  const str = props.currentPage === '/' ? 'Home' : props.currentPage
  const cleanStr = str.replace(/\/pages\/|\//, '').replace(/[^\w\s]/gi, ' ')

  const title = cleanStr
    .split(' ')
    .map(i => {
      let cap = i.charAt(0).toUpperCase()
      return cap+i.substring(1)
    })
    .join(' ');


  if(!props.pageInfo) return (
    <Page id={props.currentPage} title={title}>
      <Spinner large={true}/>
    </Page>
  )

  const pageInfo = props.pageInfo[props.currentPage]
  
  if (pageInfo === undefined){
    return <Redirect to={ {pathname : '/not-found'} } />
  }

  
  return (
    <Page id={props.currentPage} title={title}>
      <Dashboard pageInfo={pageInfo} />
    </Page>
  );
};


export default withRouter(Homepage);
