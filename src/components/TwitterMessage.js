import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      totalChars: props.maxChars
    };
  }
  
  handleChange = (event) => {
    const e = event.target
    this.setState(prevState => {
      return {
        message: e.value,
        totalChars: prevState.totalChars - 1
      }
    })  
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <p>Remaining characters: {this.state.totalChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
