import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import { fetchChannels } from '../actions/index';
import { Link } from 'react-router-dom';
import ChannelForm from '../containers/channel_form';


class ChannelList extends Component {
  componentWillMount() {
    this.fetchChannels();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  fetchChannels = () => {
    this.props.fetchChannels();
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel.id}
        className={channel === this.props.channelFromParams ? 'active' : null}
        role="presentation"
      >
        <Link to={`/channels/${channel.name}`}>
          #{channel.name}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="">
        <span>Redux Chat</span>
        <ChannelForm />
        <div className="channels-container">
          <ul>
            {this.props.channels.map(this.renderChannel)}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages, fetchChannels }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
