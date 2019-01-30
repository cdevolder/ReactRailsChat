import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages, appendMessage } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() { // For the first channel
    this.subscribeActionCable(this.props);
  }

  componentWillReceiveProps(nextProps) { // For after switching channels
    if (this.props.channelFromParams != nextProps.channelFromParams) {
      this.subscribeActionCable(nextProps);
    }
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  subscribeActionCable = (props) => {
    App[`channel_${props.channelFromParams}`] = App.cable.subscriptions.create(
      { channel: 'ChannelsChannel', name: props.channelFromParams },
      {
        received: (message) => {
          if (message.channel === props.channelFromParams) {
            props.appendMessage(message);
          }
        }
      }
    );
  }

  render () {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span># {this.props.channelFromParams}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages, appendMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
