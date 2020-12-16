import { Component } from "react";
import React from 'react';
import '../css/Home.css';
import pic from '../img/main-image.jpg';

class Home extends Component {
    render() {
        return (
            <div className="header">
                    <div className="covid-message">
                        <p>Important updates regarding COVID-19</p>
                    </div>
                    <div className="welcome">
                        <p>Welcome to Freshman Connect at UW-Eau Claire!</p>
                    </div>
                    <div className="main-image">
                        <img src={pic} alt="Logo"/>
                    </div>
            </div>
        )
    }
}

export default Home;