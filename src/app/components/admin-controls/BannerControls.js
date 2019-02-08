import React, { Component } from 'react';

import Input from "../UI/Input";
import Flex from "../UI/Wrappers/Flex";
import Box from "../UI/Wrappers/Box";
import Minimizer from "../UI/Wrappers/Minimizer";


class BannerControls extends Component {

    render() {
        const { pos, data, handleCheckbox, handleChange, handleMediaModal, clearInput, handleColourPicker } = this.props
        let content = {}

        Object.keys(data)
        .filter(fc => fc.includes(pos+'Banner'))
        .map(c => {
            const key = c.replace(pos, '')
            return content = {...content, [key]: data[c] }
        });


        const {
          BannerHalfwidth,
          BannerImgSize,
          BannerHWbackImg,
          BannerHWBackColour,
          BannerTxtRightSide,
          BannerTxtLightTheme,
          BannerLogo,
          Bannerfade,
          BannerTitle,
          BannerSubtitle,
          BannerDescription,
          BannerBtnText,
          BannerLink,
          BannerTextBkgrnd,
          BannerTextBkgrndColor,
          BannerTextBkgrndAngled,
          BannerTextBkgrndRounded

        } = content

        return (
            <Minimizer>
              <Box>
                <Flex>
                  <Input
                    inputtype="checkbox"
                    sideLabel={`Use the ${pos} banner image inside the banner`}
                    name={pos+"BannerHalfwidth"}
                    checked={BannerHalfwidth}
                    handleChange={handleCheckbox}
                  />
                </Flex>
                {BannerHalfwidth && (
                  <>
                    <Input
                      inputtype="inputSelector"
                      label="Banner Background Image"
                      name={pos+"BannerHWbackImg"}
                      value={BannerHWbackImg}
                      onChange={handleChange}
                      onClick={handleMediaModal}
                      clearInput={clearInput}
                    />
                    <Flex mobile>
                      <Input
                        inputtype="input"
                        type="number"
                        label="Banner Image Size"
                        name={pos+"BannerImgSize"}
                        value={BannerImgSize}
                        onChange={handleChange}
                      />
                      <Input
                        inputtype="inputColourPicker"
                        label="Banner Background Colour"
                        name={pos+"BannerHWBackColour"}
                        value={BannerHWBackColour}
                        changeColour={handleColourPicker}
                        
                      />
                    </Flex>
                  </>
                )}

                  <Input
                    inputtype="checkbox"
                    sideLabel="Banner Text has a Background"
                    name={pos+"BannerTextBkgrnd"}
                    checked={BannerTextBkgrnd}
                    handleChange={handleCheckbox}
                  />

                  {BannerTextBkgrnd &&
                    <>
                    <Flex mobile>
                      <Input
                        inputtype="input"
                        type={'number'}
                        label="Text Background angled (-50 to 50)"
                        name={pos+"BannerTextBkgrndAngled"}
                        value={BannerTextBkgrndAngled}
                        onChange={handleChange}
                        min={'-50'}
                        max={'50'}
                      />
                      <Input
                        inputtype="input"
                        type={'number'}
                        label="Text Background round edges (0-50)"
                        name={pos+"BannerTextBkgrndRounded"}
                        value={BannerTextBkgrndRounded}
                        onChange={handleChange}
                        min={'0'}
                        max={'50'}
                      />
                    </Flex>
                    <Input
                      inputtype="inputColourPicker"
                      label="Banner Text Background Colour"
                      name={pos+"BannerTextBkgrndColor"}
                      value={BannerTextBkgrndColor}
                      changeColour={handleColourPicker}
                     
                    />
                    </>
                  }

                <Flex mobile>
                  <Input
                    inputtype="checkbox"
                    sideLabel="Banner Text Right Side"
                    name={pos+"BannerTxtRightSide"}
                    checked={BannerTxtRightSide}
                    handleChange={handleCheckbox}
                  />
                  <Input
                    inputtype="checkbox"
                    sideLabel="Banner Light Text Color"
                    name={pos+"BannerTxtLightTheme"}
                    checked={BannerTxtLightTheme}
                    handleChange={handleCheckbox}
                  />
                </Flex>

                <Flex mobile>
                  <Input
                    inputtype="checkbox"
                    sideLabel="Use Logo in banner"
                    name={pos+"BannerLogo"}
                    checked={BannerLogo}
                    handleChange={handleCheckbox}
                  />
                  <Input
                    inputtype="checkbox"
                    sideLabel="Banner content fade in effect"
                    name={pos+"Bannerfade"}
                    checked={Bannerfade}
                    handleChange={handleCheckbox}
                  />
                </Flex>
                <Input
                  inputtype="input"
                  label="Banner Title"
                  name={pos+"BannerTitle"}
                  value={BannerTitle}
                  onChange={handleChange}
                />
                <Input
                  inputtype="input"
                  label="Banner Subtitle"
                  name={pos+"BannerSubtitle"}
                  value={BannerSubtitle}
                  onChange={handleChange}
                />
                <Input
                  inputtype="input"
                  label="Banner Description"
                  name={pos+"BannerDescription"}
                  value={BannerDescription}
                  onChange={handleChange}
                />
                <Flex mobile>
                  <Input
                    inputtype="input"
                    label="Banner Button Text"
                    name={pos+"BannerBtnText"}
                    value={BannerBtnText}
                    onChange={handleChange}
                  />
                  <Input
                    inputtype="select"
                    label="Banner Link"
                    name={pos+"BannerLink"}
                    value={BannerLink}
                    items={this.props.availableRoutes}
                    onSelectChange={handleChange}
                  />
                </Flex>
              </Box>
            </Minimizer>

        );
    }
}

export default BannerControls;