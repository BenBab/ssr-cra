import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { withRouter } from "react-router-dom";

import Button from "../../UI/Buttons/Button";
import DropdownMenu from "../../UI/Menu/DropdownMenu";

class NavigationItems extends Component {
  state = {
    navigationItems: null,
    homeActive: false
  };

  componentDidUpdate(prevProps) {
    
    if (this.props.currentLocation !== prevProps.currentLocation || this.props.navigationItems !== null && (this.props.navigationItems !== prevProps.navigationItems)) {
      this.setSelectedNav()
    }
  }

  setSelectedNav = () => {

    const currentRoute = this.props.currentLocation.replace("/", "");
    const navigationItems = Object.keys(this.props.navigationItems).map(
      key => {
        const item = this.props.navigationItems[key];

        if (item.route === currentRoute) {
          item.selected = true;
        }

        else if (item.dropdownPages) {
          let trimmedRoute = currentRoute.replace('pages/', '');
          let selectedDropDown = Object.keys(item.dropdownPages).find(key => {
            return item.dropdownPages[key].route === trimmedRoute
          })

          item.selected = selectedDropDown !== undefined
        }
        else {
          item.selected = false;
        }
        
        return item;
      }
    );

    if (this.props.currentLocation === "/") {
      this.setState({ navigationItems, homeActive: true });
    } else {
      this.setState({ navigationItems, homeActive: false });
    }
  }

  handleNavSelection = event => {
    let selected = event.target.innerText.trim();
    if (selected.toUpperCase() === "HOME") {
      selected = "/";
    }

    this.checkIfMobile()

    const navigationItems = Object.keys(this.state.navigationItems).map(key => {
      const item = this.state.navigationItems[key];
      if (item.title.toUpperCase() === selected.toUpperCase()) {
        item.selected = true;
        if (!item.dropdownPages) {
          const route = "/" + item.route;
          this.props.history.push(route);
        }
      } else {
        item.selected = false;
      }
      return item;
    });

    if (selected === "/") {
      this.props.history.push("/");
      this.setState({ navigationItems, homeActive: true });
    } else {
      this.setState({ navigationItems, homeActive: false });
    }
  };

  checkIfMobile(){
    if (this.props.mobile){
      this.props.closeDrawer()
    }
  }

  render() {
    let navigationItems = null;
    const { template } = this.props;
    const navButtons = template ? template.navButtons : null;
    console.log("this is the state of the nav items", this.state);
    console.log("navigation items props", this.props);

    if (this.state.navigationItems !== null) {
      navigationItems = Object.keys(this.state.navigationItems).map(
        (key, index) => {
          const navItem = this.state.navigationItems[key];
          let navButton = null;

          navButton = !navItem.dropdownPages ? (
            <Button
              key={index}
              variant={navButtons}
              onClick={this.handleNavSelection}
              active={navItem.selected}
              nav={true}
              margin={this.props.margin}
            >
              {navItem.title}
            </Button>
          ) : (
            <DropdownMenu
              key={"navDropdown_" + index}
              id={"navDropdown_pos" + index}
              title={navItem.title}
              menuItems={navItem.dropdownPages}
              history={this.props.history}
              variant={navButtons}
              nav={true}
              margin={this.props.margin}
              placement={this.props.placement}
              mobile={this.props.mobile}
              closeDrawer={this.props.closeDrawer}
              active={navItem.selected}
              setSelectedNav={this.setSelectedNav}
            />
          );

          return (
            //  <Button key={index} onClick={this.handleNavSelection} >
            //      <NavigationItem selected={navItem.selected} dropdownMenu={navItem.dropdownPages}>{navItem.title}</NavigationItem>
            //  </Button>
            navButton
          );
        }
      );
    }

    return (
      <StyledNavItems>
        {navButtons && (
          <>
            <Button
              variant={navButtons}
              onClick={this.handleNavSelection}
              nav={true}
              margin={this.props.margin}
              active={this.state.homeActive}
            >
              Home
            </Button>
            {navigationItems}
          </>
        )}
      </StyledNavItems>
    );
  }
}

const StyledNavItems = styled.div`
  /* margin: 0;
    padding: 0;
    list-style: none; */
  display: block;
  /* flex-flow: column;
    align-items: center;
    height: 100%; */

  @media (min-width: 500px) {
    /* flex-flow: row; */
    display: flex;
  }
`;

const mapStateToProps = state => {
  return {
    navigationItems: state.mainState.navigationItems,
    template: state.mainState.template
  };
};

export default connect(mapStateToProps)(withRouter(NavigationItems));
