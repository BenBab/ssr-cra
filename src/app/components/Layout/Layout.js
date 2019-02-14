import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Logo from '../Logo/Logo'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import Flex from '../UI/Wrappers/Flex'

class Layout extends Component {
  state = {
    showSideDrawer: false,
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const footerlogo = this.props.template
        ? this.props.template.siteLogo
        : null
    
    

    return (
      <SiteWrapper>
        <SiteContent>
          <Toolbar
            drawerToggleClicked={this.sideDrawerToggleHandler}
            template={this.props.template}
            isTop={this.state.isTop}
            currentLocation={this.props.history.location.pathname}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
            template={this.props.template}
            currentLocation={this.props.history.location.pathname}
          />
          <main>{this.props.children}</main>
          <footer>
            <Flex justifyContent={'space-around'}>
              <Logo siteLogo={footerlogo} width={'50%'}/>
              <NavigationItems currentLocation={this.props.history.location.pathname}/>
            </Flex>
          </footer>
        </SiteContent>
      </SiteWrapper>
    );
  }
}

const SiteWrapper = styled.div`
  /* display: grid;
    grid-template-columns: 1fr 100% 1fr; */

  background-color: ${props => props.theme.websiteWrapperColour};
`;

const SiteContent = styled.div`
  max-width: 1500px;
  margin: 0 auto 0 auto;
  /* min-height: 1500px; */

  main {
    background-color: ${props => props.theme.websiteMainColour};
  }

  footer {
    padding: 8%;
    background-color: ${props => props.theme.websiteFooterColour};

  }

  @media (min-width: 1500px) {
    padding-bottom: 70px;
  }

  /* div:nth-child(0){
        padding-left: 100px;
        padding-right: 100px;
    } */
`;

export default withRouter(Layout);
