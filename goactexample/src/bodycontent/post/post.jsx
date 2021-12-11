import React, { Component } from "react";
import './Post.css'

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.User,
      content: this.props.Content
    }
  }

	render() {
    return (
      <div className="Post">
        <div className="PostImage">Image</div>
        <div className="PostDetails">
          <div className="PostCreator">{this.state.user}</div>
          <div className="PostDate">Date Posted: 01/01/2000 at 12:00AM</div>
        </div>
        <div className="PostDesc">
          {this.state.content}
        </div>
      </div>
      );
  };
}

export default Post;