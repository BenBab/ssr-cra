import React from 'react';

import Input from "../UI/Input";
import Flex from "../UI/Wrappers/Flex";
import Grid from "../UI/Wrappers/Grid";
import Box from "../UI/Wrappers/Box";
import Minimizer from "../UI/Wrappers/Minimizer";

const TestimonialsContols = (props) => {

    const {data} = props
    let content = {}

    Object.keys(data)
        .filter(fc => fc.includes('testimonials'))
        .map(c => {
            return content = {...content, [c]: data[c] }
        });
    
    console.log('content', content)
    
    const {
        testimonialsOne,
        testimonialsTwo,
        testimonialsThree,
        testimonialsFour,
        testimonialsFive
    } = content;

    return (
        <Minimizer>
          <Box>
            <Input
                inputtype="input"
                label="Testimonial One"
                name="testimonialsOne"
                value={testimonialsOne}
                onChange={props.handleChange}
            />
            <Input
                inputtype="input"
                label="Testimonial Two"
                name="testimonialsTwo"
                value={testimonialsTwo}
                onChange={props.handleChange}
            />
            <Input
                inputtype="input"
                label="Testimonial Three"
                name="testimonialsThree"
                value={testimonialsThree}
                onChange={props.handleChange}
            />
            <Input
                inputtype="input"
                label="Testimonial Four"
                name="testimonialsFour"
                value={testimonialsFour}
                onChange={props.handleChange}
            />
            <Input
                inputtype="input"
                label="Testimonial Five"
                name="testimonialsFive"
                value={testimonialsFive}
                onChange={props.handleChange}
            />
            {/* <Input
                inputtype="select"
                label="Main Text Page Position"
                name="testimonialsPosition"
                value={testimonialsPosition}
                items={props.positionArray}
                onSelectChange={props.handleChange}
            />
            <Input
                inputtype="inputSelector"
                label="Add a Small Image"
                name="testimonialsImg"
                value={testimonialsImg}
                onChange={props.handleChange}
                onClick={props.handleMediaModal}
                clearInput={props.clearInput}
            />
            <Grid cols={"33% 33% 33%"} margin={"0 15px 0 0"} colsSmall={'100%'}>
                <Input
                inputtype="select"
                label="Image align position"
                name="testimonialsImgAlign"
                value={testimonialsImgAlign}
                items={floatArray}
                onSelectChange={props.handleChange}
                />
                <Input
                inputtype="input"
                type="number"
                label="Banner Image Width"
                name="testimonialsImgWidth"
                value={testimonialsImgWidth || 200}
                onChange={props.handleChange}
                />
                <Input
                inputtype="input"
                type="number"
                label="Banner Image Height"
                name="testimonialsImgHeight"
                value={testimonialsImgHeight || 135}
                onChange={props.handleChange}
                />
            </Grid>
            <Input
                inputtype="inputColourPicker"
                label="Banner Background Colour"
                name="testimonialsBackColour"
                value={testimonialsBackColour}
                changeColour={props.handleColourPicker}
                pageId={"home"}
            /> */}
            </Box>
        </Minimizer>
    );
};

export default TestimonialsContols;