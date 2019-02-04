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

  toggleMenu = () => {
    const menu = (document.getElementById("hidden-menu"));
    if (menu !== null) {
      menu.classList.add("hidden");
    }
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel.id}
        className={channel.name === this.props.channelFromParams ? 'active' : null}
        role="presentation"
        onClick={() => {this.toggleMenu()}}
      >
        <Link to={`/channels/${channel.name}`}>
          > {channel.name}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="right-list">
        <div className="hidden-xs hidden-sm">
          <ChannelForm />
          <div className="channels-container">
            <ul>
              {this.props.channels.map(this.renderChannel)}
            </ul>
          </div>
        </div>
        <div className="hidden-md hidden-lg channels-container hidden" id="hidden-menu">
          <ul>
            <li><ChannelForm /></li>
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
