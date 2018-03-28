import React, { Component } from 'react';
import * as moment from 'moment';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <li className="message">
        {this.props.message.message}
        <span className="timestamp">{moment(this.props.message.timestamp).fromNow()}</span>
      </li>
    );
  }
}

export default Message;
