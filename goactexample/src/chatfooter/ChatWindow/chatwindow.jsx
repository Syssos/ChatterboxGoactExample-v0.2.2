import React, { Component } from "react";
import './ChatWindow.css'

class ChatWindow extends Component {
    
    constructor(props) {
      super(props)

      this.state = {isToggleOn: false};
      this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

      console.log(this.state.isToggleOn)
    }

    render() {
      if (this.state.isToggleOn === true) {
        return (
          <div className="ChatWindowExtended">
            <div className="ChatControls">
              <div className="ChatTitle">Live Chat</div>
              <div className="ChatMinimize"  onClick={this.handleClick}>&#8615;</div>
            </div>

            <div className="ChatboxContent">
              {/* Chatterbox here */}
              {/*<Chatterbox />*/}
            </div>
          </div>
        );
      } else if (this.state.isToggleOn === false) {
        return (
          <div className="ChatWindow" onClick={this.handleClick}>
            Chat
          </div>
        );
      }      
    };
}

export default ChatWindow;