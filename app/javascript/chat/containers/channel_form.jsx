import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createChannel } from '../actions/index';

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createChannel(this.state.value);
    this.setState({ value: '' }); // Reset message input
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-form">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Add new channel"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createChannel }, dispatch);
}

export default connect(null, mapDispatchToProps)(ChannelForm);
