import React from 'react';

import Input from "../UI/Input";
import Flex from "../UI/Wrappers/Flex";
import Grid from "../UI/Wrappers/Grid";
import Box from "../UI/Wrappers/Box";
import Minimizer from "../UI/Wrappers/Minimizer";

const MainTextContols = (props) => {

    const {data} = props
    let content = {}

    Object.keys(data)
        .filter(fc => fc.includes('mainText'))
        .map(c => {
            return content = {...content, [c]: data[c] }
        });
    
    console.log('content', content)
    
    const {
      mainTextPosition,
      mainTextCenterTitle,
      mainTextRightSide,
      mainTextBackColour,
      mainTextImg,
      mainTextImgAlign,
      mainTextImgWidth,
      mainTextImgHeight
    } = content;

    const positionArray = [
        { value: "Top" },
        { value: "Middle" },
        { value: "Bottom" }
      ];
    
    const floatArray = [{ value: "left" }, { value: "right" }];

    return (
        <Minimizer>
          <Box>
            <Flex mobile>
                <Input
                inputtype="checkbox"
                sideLabel="Center Header text"
                name="mainTextCenterTitle"
                checked={mainTextCenterTitle}
                handleChange={props.handleCheckbox}
                />
                <Input
                inputtype="checkbox"
                sideLabel="Align Text Right Side"
                name="mainTextRightSide"
                checked={mainTextRightSide}
                handleChange={props.handleCheckbox}
                />
            </Flex>
            <Input
                inputtype="select"
                label="Main Text Page Position"
                name="mainTextPosition"
                value={mainTextPosition}
                items={positionArray}
                onSelectChange={props.handleChange}
            />
            <Input
                inputtype="inputSelector"
                label="Add a Small Image"
                name="mainTextImg"
                value={mainTextImg}
                onChange={props.handleChange}
                onClick={props.handleMediaModal}
                clearInput={props.clearInput}
            />
            <Grid cols={"33% 33% 33%"} margin={"0 15px 0 0"} colsSmall={'100%'}>
                <Input
                inputtype="select"
                label="Image align position"
                name="mainTextImgAlign"
                value={mainTextImgAlign}
                items={floatArray}
                onSelectChange={props.handleChange}
                />
                <Input
                inputtype="input"
                type="number"
                label="Banner Image Width"
                name="mainTextImgWidth"
                value={mainTextImgWidth || 200}
                onChange={props.handleChange}
                />
                <Input
                inputtype="input"
                type="number"
                label="Banner Image Height"
                name="mainTextImgHeight"
                value={mainTextImgHeight || 135}
                onChange={props.handleChange}
                />
            </Grid>
            <Input
                inputtype="inputColourPicker"
                label="Banner Background Colour"
                name="mainTextBackColour"
                value={mainTextBackColour}
                changeColour={props.handleColourPicker}
                pageId={"home"}
            />
            </Box>
        </Minimizer>
    );
};

export default MainTextContols;