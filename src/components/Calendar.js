import { Component } from "react";
import React from 'react';
import C from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/Calendar.css';

class Calendar extends Component {
    render() {
        return (
            <div className="calendar">
                <C className="c"/>
            </div>
        )
    }

    
}

export default Calendar;