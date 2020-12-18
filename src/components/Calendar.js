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
                <div className = "link">
                    <a href = "https://calendar.uwec.edu/MasterCalendar.aspx"> UWEC Official Calendar</a>
                </div>
            </div>
        )
    }

    
}

export default Calendar;