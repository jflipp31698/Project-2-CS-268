import React, { Component } from 'react'
import '../css/addChat.css';
export class AddChat extends Component {
    state = {
        sender: "",
        message: ""
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addChat(this.state.sender, this.state.message)
        this.setState({title: '', message: ''});
    }

    render() {
        return (
            <div className="container">
                <h2>Chat With Fellow Freshman</h2>
                <form onSubmit={this.onSubmit} style={{display: "flex"}}>
                <input 
                type="text" 
                name="sender"
                style={{flex: "10", padding: "5"}}
                placeholder="Enter your name..."
                value={this.state.sender}
                onChange={this.onChange}
                />
                <input 
                type="text" 
                name="message"
                style={{flex: "10", padding: "5", margin: "0px 20px"}}
                placeholder="Enter your Message..."
                value={this.state.message}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit" 
                className="btn"
                style={{flex: "1", backgroundColor: "green"}}
                />
            </form>
            </div>
        )
    }
}

export default AddChat
