import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components";

const Testimonials = (props) =>  {
    if (Object.keys(props.testimonials).length === 0) return <div/>

    let testimonialsArray = null
    
    testimonialsArray = Object.keys(props.testimonials)
      .filter(key => key.includes('_'))
      .map(key => {
        const t = props.testimonials[key]
        return (
            <StyledTestimonial key={key}>
              <blockquote className='testimonial-container'>
                <h1 className='vert_Line'>|</h1>
                <h1 className='quote'>“</h1>
                <p>{t}</p>
              </blockquote>
            </StyledTestimonial>
        )
      });

    return (
      <TestimonialWrapper>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={4000}>
          {testimonialsArray}
        </Carousel>
      </TestimonialWrapper>
    );
  }

const TestimonialWrapper = styled.div`
  .slide {
    background-image: radial-gradient(#212121, #000) !important;
    
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
