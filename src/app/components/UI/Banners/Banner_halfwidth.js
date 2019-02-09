import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

import Logo from "../../../components/Logo/Logo";
import Button from "../../UI/Buttons/Button";
import Grid from "../../UI/Wrappers/Grid";
class BannerHalfWidth extends Component {
  state = {
    loading: true,
    showLogo: false,
    showBannerContent: false,
    isVisible: false,
  };

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.bannerData &&
      this.props.bannerData.Bannerfade !== prevProps.bannerData.Bannerfade
    ) {
      this.setState({ isVisible: false }, () => this.adminShowFadeEffect());
    }
  }

  adminShowFadeEffect = () => {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 300);
  };

  handleLogoLoaded = () => {
    // this.setState({ loading: false });
  };

  render() {
    const {
      Banner: img,
      Banner3D,
      position,
      BannerHWbackImg: hwBannerBackGroundImg,
      BannerHWBackColour,
      BannerImgSize,
      BannerImgRoundHW,
      BannerImg3dHW,
      BannerTxtRightSide: textRightSide,
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
      BannerLogo
    } = this.props.bannerData;

    const banner_image_url = img;
    const backgroundImg = hwBannerBackGroundImg;
    //'https://i.imgur.com/jCi5m2s.png'
    const { history, template } = this.props;
    const logo = template.siteLogo;

    //Background colour
    let backGroundColour = "#FFFFFF";
    if (BannerHWBackColour) {
      const { r, g, b, a } = BannerHWBackColour;
      backGroundColour = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    // TEXT Background colour
    let textBackgroundColor = "rgba(255,255,255,1)";
    if (BannerTextBkgrndColor) {
      const { r, g, b, a } = BannerTextBkgrndColor;
      textBackgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    const isTextBackground = BannerTextBkgrnd
      ? textBackgroundColor
      : "transparent";

    //Angle and rounded edges
    let AngleBack = 0;
    if (BannerTextBkgrndAngled) {
      AngleBack =
        Number(BannerTextBkgrndAngled) >= 0
          ? "-" + BannerTextBkgrndAngled
          : BannerTextBkgrndAngled.replace("-", "");
    }
    const skewFwd = BannerTextBkgrndAngled
      ? `skewX(${BannerTextBkgrndAngled}deg)`
      : `skewX(0deg)`;
    const skewBack = BannerTextBkgrndAngled
      ? `skewX(${AngleBack}deg)`
      : `skewX(0deg)`;
    const roundedEdges = BannerTextBkgrndRounded
      ? `${BannerTextBkgrndRounded}%`
      : "0";

    //set fading values
    const yLocation = fadeContent ? 50 : 0;
    const opacity = fadeContent ? 0 : 1;

    //image manipulation
    const imgWidth = BannerImgSize
      ? 390 + Number(BannerImgSize) + "px"
      : "390px";
    
    const imgRounded = BannerImgRoundHW
      ? BannerImgRoundHW + '%'
      : '0';

    let bannerContent = (
      <div>
        <SkewOuter skewFwd={skewFwd}>
          <ContentWrapper
            isTextBackground={isTextBackground}
            roundedEdges={roundedEdges}
            pose={this.state.isVisible ? "enter" : "exit"}
            yLocation={yLocation}
            opacity={opacity}
          >
            <SkewInner skewBack={skewBack}>
              {BannerLogo && (
                <div fadeContent={fadeContent}>
                  <Logo
                    siteLogo={logo}
                    onLoad={this.handleLogoLoaded}
                    width="50%"
                  />
                </div>
              )}
              <BannerContent {...this.props}>
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
              </BannerContent>
            </SkewInner>
          </ContentWrapper>
        </SkewOuter>
      </div>
    );

    console.log("half_bannerProps", this.props);
    return (
      <BannerWrapper
        style={{ backgroundImage: `url(${backgroundImg})` }}
        background={backGroundColour}
        transparentHeader={this.props.template.transparentHeader}
        position={this.props.position}
        Banner3D={Banner3D}
      >
        <Grid
          colGap="10px"
          margin={"0 5% 0 0"}
          marginMed={"0"}
          cols={"1fr 40% 40% 1fr"}
          height={"100%"}
          colsLarge={"0% 50% 50% 0%"}
          colsMed={"100%"}
          width={'100%'}
        >
          <div />
          {!textRightSide && 
            bannerContent
          }
          <StyledImage imgWidth={imgWidth} imgRounded={imgRounded} BannerImg3dHW={BannerImg3dHW}>
            <img src={banner_image_url} alt={`${position}-banner`} />
          </StyledImage>
          {textRightSide && 
            bannerContent
          }
          <div />
        </Grid>
      </BannerWrapper>
    );
  }
}

const ContentWrapper = styled(
  posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 1000,
      transition: {
        y: { type: "spring", stiffness: 100 },
        default: { duration: 500 }
      }
    },
    exit: {
      y: ({ yLocation }) => yLocation,
      opacity: ({ opacity }) => opacity,
      transition: { duration: 150 }
    }
  })
)`
  

  ${props => `
    background-color: ${props.isTextBackground};
    border-radius: ${props.roundedEdges};
  `}
`;

const SkewOuter = styled.div`
  transform: ${props => props.skewFwd};
`;

const SkewInner = styled.div`
  ${props => `
    transform: ${props.skewBack};
  `} 
  
`;

const BannerContent = styled.div`
  color: ${props =>
    props.bannerData.BannerTxtLightTheme
      ? props.theme.bannerTextLight
      : props.theme.bannerTextDark};

  padding: 30px;
  position: relative;
`;

const StyledImage = styled.div`
  text-align: center;

  > img {
    width: ${props => props.imgWidth};
    border-radius: ${props => props.imgRounded};
    box-shadow: ${props => props.BannerImg3dHW ? '5px 5px 10px black' : 'none'};
    /* max-width:100%; */

    @media (max-width: 1024px) {
      max-width: 80%;
    }

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;

const BannerWrapper = styled.div`
  background-color: ${props => props.background};
  box-shadow: ${props => props.Banner3D ? '5px 5px 15px #424242' : 'none'};
  height: ${props =>
    props.transparentHeader && props.position === "top" ? "475px" : "400px"};

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    height: 610px;
    text-align: center;
  }
`;

export default BannerHalfWidth;
