import React, { Component } from "react";
import Input from "../UI/Input";
import Flex from "../UI/Wrappers/Flex";
import Button from "../UI/Buttons/Button";
import Spinner from "../UI/Spinner";

export class NewPageForm extends Component {
  state = {
    title: "",
    checked: false,
    selectVal: null
  };

  componentDidMount() {
    if (this.props.navigationItems !== null) {
      // this.setState({selectVal: this.props.navigationItems[0].title})
      let title = "";
      for (var prop in this.props.navigationItems) {
        title = this.props.navigationItems[prop].title;
        break;
      }

      this.setState({ selectVal: title });
    }
  }

  handleCheckbox = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  onChange = event => {
    this.setState({ selectVal: event.target.value });
  };

  onInputChange = event => {
    const { value, name } = event.target;
    const scrubbedVal = value.replace(/[^\w\s]/gi, "");

    this.setState({ [name]: scrubbedVal });
  };

  render() {
    console.log("newpageForm props", this.props);
    return (
      <div>
        <form>
          <Input
            inputtype="input"
            label="Page Title"
            name="title"
            value={this.state.title}
            onChange={this.onInputChange}
          />
          {this.props.navigationItems !== null && (
            <div>
              <Input
                inputtype="checkbox"
                sideLabel="Is this a dropdown SubPage"
                checked={this.state.checked}
                handleChange={this.handleCheckbox}
              />
              <br />
              {this.state.checked && (
                <Input
                  inputtype="select"
                  value={this.state.selectVal}
                  label="Choose the parent page for this Subpage"
                  items={this.props.navigationItems}
                  onChange={this.onChange}
                />
              )}
            </div>
          )}
        </form>
        <Flex justifyContent="flex-end" margin="5px">
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button
            onClick={() => this.props.handleSubmit(this.state)}
            disabled={this.state.title === "" ? true : false}
          >
            Confirm
          </Button>
          {this.props.loading && <Spinner />}
        </Flex>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       //updateNewPageData: () => dispatch(actions.newPageData()),
//   }
// }

//export default connect(null, mapDispatchToProps)(NewPageForm)
export default NewPageForm;
