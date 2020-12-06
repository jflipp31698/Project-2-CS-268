import { Component } from "react";
import React from 'react';
import ChatList from './ChatList';
import AddChat from './AddChat';
import {v4 as uuid} from 'uuid';

class Chat extends Component {
    state = {
        chats: [

        ]
      }

  delChat = (id) => {
    this.setState({chats: [...this.state.chats.filter(chat => chat.id !== id)]});
  }

  addChat = (sender, message) => {
    const newChat = {
      id: uuid(),
      sender: sender,
      message: message
    }
    this.setState({chats: [...this.state.chats, newChat]})
  }

    render() {
        return (
            <div className="container">
              <AddChat addChat={this.addChat} />
              <ChatList chats={this.state.chats} delChat={this.delChat} />
            </div>
        )

    }
}

export default Chat;