import React, { Component } from "react";
import './ChatFooter.css'

import ChatWindow from './ChatWindow'

class ChatFooter extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <ChatWindow/>
      </div>
    );
  };
}

export default ChatFooter;