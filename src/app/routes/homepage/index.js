import React from "react";
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

  if(!props.pageInfo) return <Spinner/>

  const currentPage = props.pageInfo[props.currentPage]

  const { route, title } = currentPage
  
  return (
    <Page id={route} title={title}>
      <Dashboard pageInfo={currentPage} />
    </Page>
  );
};



export default Homepage;
