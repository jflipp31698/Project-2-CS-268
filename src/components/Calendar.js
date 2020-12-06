import { Component } from "react";
import React from 'react';
import C from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendar extends Component {
    render() {
        return (
            <div style={{backgroundColor: "#3b4d96", padding: "200px 0px 200px 0px"}} >
                <C />
            </div>
        )
    }
}

export default Calendar;