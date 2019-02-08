import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import posed from 'react-pose';
import Logo from "../../../components/Logo/Logo";
import Button from "../../UI/Buttons/Button";

class BannerFullWidth extends Component {
  state = {
    loading: true,
    showLogo: true,
    showBannerContent: true,
    isVisible: false
  };

  componentDidMount() {
    this.setState({isVisible: true})
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.bannerData &&
      this.props.bannerData.BannerLogo !== prevProps.bannerData.BannerLogo
    ) {
      this.setState({ showLogo: this.props.bannerData.BannerLogo });
    }
  }

  handleLogoLoaded = () => {
    // this.setState({ loading: false });
  };

  render() {
    const {
      Banner: img,
      Bannerfade: fadeContent,
      BannerTitle: title,
      BannerSubtitle: subTitle,
      BannerDescription: description,
      BannerBtnText: btnText,
      BannerLink: btnLink,
      BannerTextBkgrnd,
      BannerTextBkgrndRounded,
      BannerTextBkgrndAngled,
      
      BannerTextBkgrndColor,
    } = this.props.bannerData;

    const banner_image_url = img;
    //'https://i.imgur.com/jCi5m2s.png'
    const { history, template } = this.props;
    const logo = template.siteLogo;

    let textBackgroundColor = 'rgba(255,255,255,1)';
    
    if (BannerTextBkgrndColor){
      const { r, g, b, a} = BannerTextBkgrndColor
      textBackgroundColor= `rgba(${r}, ${g}, ${b}, ${a})`
    }

    const isTextBackground = BannerTextBkgrnd ? textBackgroundColor : 'transparent';
    // const Anglefwd = Number(BannerTextBkgrndAngled) >= 0 ? BannerTextBkgrndAngled : ;
    let AngleBack = 0;
    if (BannerTextBkgrndAngled){
      AngleBack = (Number(BannerTextBkgrndAngled) >= 0) ? '-'+BannerTextBkgrndAngled : BannerTextBkgrndAngled.replace('-','');
    }
    const skewFwd = BannerTextBkgrndAngled ? `skewX(${BannerTextBkgrndAngled}deg)` : `skewX(0deg)`;   
    const skewBack = BannerTextBkgrndAngled ? `skewX(${AngleBack}deg)` : `skewX(0deg)`; 
    const roundedEdges = BannerTextBkgrndRounded ? `${BannerTextBkgrndRounded}%` : '0';

    console.log("full_bannerProps", this.props);
    return (
      <StyledBanner
        style={{ backgroundImage: `url(${banner_image_url})` }}
        {...this.props}
        
      >
        <div>
          <SkewOuter skewFwd={skewFwd} >
          <ContentWrapper
            isTextBackground={isTextBackground}
            roundedEdges={roundedEdges}
            pose={this.state.isVisible ? 'enter' : 'exit'}
          >
            <SkewInner skewBack={skewBack} >
              {this.state.showLogo && (
                <BannerLogo >
                  <Logo
                    siteLogo={logo}
                    onLoad={this.handleLogoLoaded}
                    width="50%"
                  />
                </BannerLogo>
              )}
              {this.state.showBannerContent && (
                <div className="banner-content">
                  <h1>{title}</h1>
                  <h3>{subTitle}</h3>
                  <p>{description}</p>
                  {btnText && (
                    <Button
                      onClick={() => {
                        history.push(btnLink);
                      }}
                    >
                      {btnText}
                    </Button>
                  )}
                </div>
              )}
            </SkewInner>
          </ContentWrapper>
          </SkewOuter>
        </div>
      </StyledBanner>
    );
  }
}

const BannerLogo = styled.div`
 
`;

const ContentWrapper = styled(posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 1000,
    transition: {
      y: { type: 'spring', stiffness: 100 },
      default: { duration: 500 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
}))`
  padding: 20px;
  width: 50%;
  
  ${props => `
    background-color: ${props.isTextBackground};
    border-radius: ${props.roundedEdges};
  `}

  @media (max-width: 768px) {
      width: 68%;
  }

  @media (max-width: 500px) {
      width: 85%;
  }
`;

const SkewOuter = styled.div`
  transform: ${props => props.skewFwd};
`;

const SkewInner = styled.div`
  ${props => `
    transform: ${props.skewBack};
  `}
  padding: 0 30px;
`

const StyledBanner = styled.div`
  height: 460px;
  margin-top: ${props =>
    props.template.transparentHeader && props.position === "top" ? "-56px" : 0};

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  > div {
    padding: 80px 10vw 0 10vw;
    text-align: ${props => (props.bannerData.BannerTxtRightSide ? "right" : "left")};
    color: ${props =>
      props.bannerData.BannerTxtLightTheme
        ? props.theme.bannerTextLight
        : props.theme.bannerTextDark};


    .banner-content {
      margin: 0 20px;
    }
  }
`;

export default BannerFullWidth;
