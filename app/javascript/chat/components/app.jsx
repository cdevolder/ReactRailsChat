import React from 'react';
import ChannelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = (props) => {
  return (
    <div className="messaging-wrapper">
      <MessageList channelFromParams={props.match.params.channel} />
      <ChannelList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
