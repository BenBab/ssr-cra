import React, { Component } from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import sanitizeHtml from 'sanitize-html';

export class Main_Banner extends Component {
  convertToHtml = (mainText, image) => {
    if (!mainText) return null;
    let dirty = mainText;

    let cleanHtml = sanitizeHtml(dirty, {
      allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'blockquote', 'p', 'a', 'ul', 'ol',
        'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'],
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        // We don't currently allow img itself by default, but this
        // would make sense if we did
        img: ['src']
      },
      // Lots of these won't come up by default because we don't allow them
      selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
      // URL schemes we permit
      allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
      allowedSchemesByTag: {}
    });

    // let textImage =
    if (image) {
      cleanHtml = cleanHtml.replace(
        "{image}",
        `<img src=${image} ALIGN="left" alt={${
        this.props.position
        }-maintext-image}>`
      );
    }
    // const txtwithBreaks = mainText.replace(/(\r\n|\n|\r)/gm, '<br/>')
    //const text = mainText.replace('{image}','<img src={} onLoad={props.onLoad} alt="Logo" />')

    return ReactHtmlParser(cleanHtml);
  };

  render() {
    if (!this.props.bannerData) return <div />;

    console.log("main text banner props", this.props);
    const {
      mainText,
      mainTextCenterTitle,
      position,
      mainTextRightSide,
      mainTextBackColour: backgroundColour,
      mainTextImg: img,
      mainTextImgAlign: imgAlign,
      mainTextImgWidth: imgWidth,
      mainTextImgHeight: imgHeight
    } = this.props.bannerData;
    const textAlignment = mainTextRightSide ? "right" : "left";
    const image = img;
    const imageWidth = imgWidth ? `${imgWidth}px` : null;
    const imageHeight = imgHeight ? `${imgHeight}px` : null;
    const text = this.convertToHtml(mainText, image);
    let backColour = "#FFFFFF"

    if (backgroundColour) {
      const { r, g, b, a } = backgroundColour
      backColour = `rgba(${r}, ${g}, ${b}, ${a})`
    }

    return (
      <StyledMainBanner
        centerTitle={mainTextCenterTitle}
        textAlignment={textAlignment}
        backgroundColour={backColour}
        imgAlign={imgAlign}
        imgWidth={imageWidth}
        imgHeight={imageHeight}
      >
        <div className={"mainText"}>{text}</div>
      </StyledMainBanner>
    );
  }
}

const StyledMainBanner = styled.div`
  padding: 8% 10%;
  background-color: ${props => props.backgroundColour};

  .mainText {
    text-align: ${props => props.textAlignment};

    > img {
      height: ${props => props.imgHeight || "135px"};
      width: ${props => props.imgWidth || "200px"};
      float: ${props => props.imgAlign || "left"};
      padding: 15px;
    }

    > h1,
    h2,
    h3 {
      text-align: ${props =>
    props.centerTitle ? "center" : props.textAlignment};
      margin: 0;
    }
  }
`;

export default Main_Banner;
