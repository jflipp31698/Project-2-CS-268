import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ChatItem extends Component {
    render() {
        const {id} = this.props.chat;
        return (
            
            <div className="container">
                <div className="chat">
                    <h4>{ this.props.chat.sender }</h4>
                    <p>{ this.props.chat.message }<button onClick={this.props.delChat.bind(this, id)} style={btnStyle}>x</button></p>
                </div>
            </div>

        )
    }
}

//PropTypes
ChatItem.propTypes = {
    chat: PropTypes.object.isRequired
}

const btnStyle = {
    background: "red",
    border: "none",
    padding: "3px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    marginRight: "15px"
}

export default ChatItem
