import React, { Component } from 'react'
import '../css/chatList.css';
import ChatItem from './chatItem';
import PropTypes from 'prop-types';

export class ChatList extends Component {
    render() {
        return this.props.chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} delChat={this.props.delChat}/>
        ));
        
    }
}

//PropTypes
ChatList.propTypes = {
    chats: PropTypes.array.isRequired
}

export default ChatList
