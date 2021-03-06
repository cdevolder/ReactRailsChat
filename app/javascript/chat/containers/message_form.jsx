import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.channelFromParams, this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    if (this.props.channelFromParams === "Exemple Channel") {
      return (
        <form onSubmit={this.handleSubmit} className="channel-editor">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            className="form-control"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
            disabled
            placeholder="Please select another channel to test the app..."
          />
          <button type="submit">Send</button>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="channel-editor">
          <input
            ref={(input) => { this.messageBox = input; }}
            type="text"
            className="form-control"
            autoComplete="off"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(MessageForm);
