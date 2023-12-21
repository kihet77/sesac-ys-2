import { Component } from "react";
import PropTypes from "prop-types";

class ClassComp extends Component {
  render() {
    return (
      <>
        <div>
          {this.props.text}
        </div>
        <button onClick={() => {
        console.log("onClick")
      }}>onClick</button>
      </>
    );
  }

  static defaultProps = {
    text: "text porps",
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}

ClassComp.defaultProps = {
  text: "text porps",
};

ClassComp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassComp