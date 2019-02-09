import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

class Testimonials extends Component {
  render() {
    // {this.props.bannerData.testimonialsOne}
    // {this.props.bannerData.testimonialsTwo}

    // autoPlay infiniteLoop
    return (
      <TestimonialWrapper>
        <Carousel  showThumbs={false} showStatus={false}>
          <StyledTestimonial>
              <blockquote className='testimonial-container'>
                <h1 className='vert_Line'>|</h1>
                <h1 className='quote'>“</h1>
                <p>{this.props.bannerData.testimonialsOne}</p>
              </blockquote>
          </StyledTestimonial>
          <StyledTestimonial>
            <blockquote className='testimonial-container'>
              <h1 className='vert_Line'>|</h1>
              <h1 className='quote'>“</h1>
              <p>{this.props.bannerData.testimonialsTwo}</p>
            </blockquote>
          </StyledTestimonial>
        </Carousel>
      </TestimonialWrapper>
    );
  }
}

const TestimonialWrapper = styled.div`
  .slide {
    background-color: #212121 !important;
    
    .testimonial-container{
      display: inline-flex;
      align-items: center;
      height: 100px;

      .vert_Line {
        font-size: 85px;
        font-family: fantasy;
       
      }
      .quote {
        font-size: 85px;
      }

      p {
        margin-left: 25px;
        font-family: cursive;
        font-size: 20px;
      }
    }
  }
`;

const StyledTestimonial = styled.div`
  color: white;
  height: 160px;
  
`;

export default Testimonials;
