import React from "react";
import Input from "../../../../components/UI/Input";
import Minimizer from "../../../../components/UI/Wrappers/Minimizer";
import Flex from "../../../../components/UI/Wrappers/Flex";

import MultiSelect from "../../../../components/UI/MultiSelect";

const TestimonialsPlugin = props => {
  if (!props.plugin) return <div />;

  const { testimonialsActive, testimonialsPages, testimonialsEmail } = props.plugin;
  console.log("Testimonals settings props", props);

  return (
    <div>
      <Flex>
        <Input
          inputtype="checkbox"
          sideLabel="Testimonals Plugin"
          parentObj={props.parentObj}
          name="testimonialsActive"
          checked={testimonialsActive}
          handleChange={props.handleCheckbox}
        />
        {testimonialsActive && (
          <MultiSelect
            label="Select the pages where this plugin is available"
            items={props.availableRoutes}
            name="testimonialsPages"
            value={testimonialsPages}
            handleChange={props.handleChange}
            margin={"0 10px 20px 15px"}
          />
        )}
      </Flex>

      {/* {testimonialsActive && (
        <Minimizer padding={"20px"}>
          <div>
            <Input
              inputtype="input"
              label="Enter Business email where contact requests are received"
              parentObj={props.parentObj}
              name="testimonialsEmail"
              value={testimonialsEmail}
              onChange={props.handleChange}
            />
          </div>
        </Minimizer>
      )} */}
    </div>
  );
};

export default TestimonialsPlugin;
