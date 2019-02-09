import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import styled from "styled-components";

import BannerFullwidth from "../../components/UI/Banners/Banner_fullWidth";
import BannerHalfwidth from "../../components/UI/Banners/Banner_halfwidth";
import MainBanner from "../../components/UI/Banners/Main_Banner";

import ContactUs from "./Plugins/ContactUs";
import Booking from './Plugins/Booking';
import Testimonials from './Plugins/Testimonials'

import Spinner from '../../components/UI/Spinner'

class Dashboard extends Component {

  state={
    previewHeight: 0
  }

  componentDidMount(){
    const {overlayBlocker, name} = this.props
    if(overlayBlocker) {
      this.updateBlockerDimensions();
      document.getElementById(name).addEventListener('resize', this.updateBlockerDimensions);
    }
  }

  componentWillUnmount(){
    const {overlayBlocker, name} = this.props
    if (overlayBlocker){
      document.getElementById(name).removeEventListener('resize', this.updateBlockerDimensions);
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.pageInfo !== prevProps.pageInfo){
      this.updateBlockerDimensions()
    }
  }
  
  updateBlockerDimensions = () => {
    const el = document.getElementById(this.props.name).clientHeight
    if (el !== this.state.previewHeight){
      this.setState({ previewHeight: el+'px'})
    }
  }
  

  createContentObject(pos, name, data){
    let content = {}
    
    Object.keys(data)
        .filter(fc => fc.includes(name))
        .map(c => {
          const key = c.replace(pos, '')
          return content = {...content, [key]: data[c] }
      });
    
    return content;
  }


  render() {
    console.log("dashboard props", this.props);
    const { pageInfo, plugins, overlayBlocker, name } = this.props;
       
    if (!pageInfo) {
      return <Spinner large={true}/>;
    }
    if (!pageInfo.content) {
      return <div>No page content available</div>;
    }

    const topBannerObj = this.createContentObject('top', 'topBanner', this.props.pageInfo.content)
    const midBannerObj = this.createContentObject('mid', 'midBanner', this.props.pageInfo.content)
    const bottomBannerObj = this.createContentObject('bottom', 'bottomBanner', this.props.pageInfo.content)
    const mainTextBannerObj = this.createContentObject(null, 'mainText', this.props.pageInfo.content)
    const testimonialsObj = this.createContentObject(null, 'testimonials', this.props.pageInfo.content)
    
    const {
      topBanner,
      topBannerHalfwidth,
      midBanner,
      midBannerHalfwidth,
      bottomBanner,
      bottomBannerHalfwidth,
      mainTextPosition,
      testimonialsPosition,
    } = this.props.pageInfo.content;

    const mainPosition =
      mainTextPosition === undefined ? "Top" : mainTextPosition;
    
    const testimonialsPos =
      testimonialsPosition === undefined ? "Top" : testimonialsPosition;

    //PLUGINS
    let contactUs = null;
    let booking = null;
    let testimonials = null;

    if (plugins && plugins.contactUs && plugins.contactUs.contactUsPages) {
      contactUs = plugins.contactUs.contactUsPages.find(p => {
        if (p === "All Pages") return true;
        const page = p === "home" ? "/" : p;

        return pageInfo.route === page;
      });
    }

    if (plugins && plugins.booking && plugins.booking.bookingPages) {
      booking = plugins.booking.bookingPages.find(p => {
        if (p === "All Pages") return true;
        const page = p === "home" ? "/" : p;

        return pageInfo.route === page;
      });
    }

    if (plugins && plugins.testimonials && plugins.testimonials.testimonialsPages) {
      testimonials = plugins.testimonials.testimonialsPages.find(p => {
        if (p === "All Pages") return true;
        const page = p === "home" ? "/" : p;

        return pageInfo.route === page;
      });
    }

    return (
      <>
        {overlayBlocker && <OverlayBlocker previewHeight={this.state.previewHeight} />}
        <StyledDashboard
          transparentHeader={this.props.template.transparentHeader}
          topBanner={topBanner ? true : false}
          id={name}
        >
          {topBanner && (
            <>
              {topBannerHalfwidth ? (
                <BannerHalfwidth
                  bannerData={topBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="top"
                />
              ) : (
                <BannerFullwidth
                  bannerData={topBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="top"
                />
              )}
            </>
          )}

          {mainPosition === "Top" && (
            <MainBanner bannerData={mainTextBannerObj} />
          )}

          {booking && <Booking pluginOptions={plugins.booking} />}
          
          {contactUs && <ContactUs pluginOptions={plugins.contactUs} />}

          {testimonials && testimonialsPos === 'Top' &&
            <Testimonials bannerData={testimonialsObj}/>
          }

          {midBanner && (
            <>
              {midBannerHalfwidth === true ? (
                <BannerHalfwidth
                  bannerData={midBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="mid"
                />
              ) : (
                <BannerFullwidth
                  bannerData={midBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="mid"
                />
              )}
            </>
          )}

          {mainPosition === "Middle" && (
            <MainBanner bannerData={mainTextBannerObj} />
          )}

          {testimonials && testimonialsPos === 'Middle' &&
            <Testimonials bannerData={testimonialsObj}/>
          } 

          {bottomBanner && (
            <>
              {bottomBannerHalfwidth === true ? (
                <BannerHalfwidth
                  bannerData={bottomBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="bottom"
                />
              ) : (
                <BannerFullwidth
                  bannerData={bottomBannerObj}
                  history={this.props.history}
                  template={this.props.template}
                  position="bottom"
                />
              )}
            </>
          )}

          {mainPosition === "Bottom" && (
            <MainBanner bannerData={mainTextBannerObj} />
          )}

          {testimonials && testimonialsPos === 'Bottom' &&
            <Testimonials bannerData={testimonialsObj}/>
          } 

        </StyledDashboard>
      </>
    );
  }
}

const StyledDashboard = styled.div`
  margin-top: ${props => (props.transparentHeader ? "-75px" : 0)};
  padding-top: ${props => (!props.topBanner ? "150px" : 0)};
`;

const OverlayBlocker = styled.div`
  position: absolute;
  width: 30%;
  height: ${props => props.previewHeight};
  z-index: 10;
  background-color: transparent;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const mapStateToProps = state => ({
  template: state.mainState.template,
  plugins: state.mainState.plugins
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Dashboard)
);

// export default Dashboard;
