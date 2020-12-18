import { Component } from "react";
import React from 'react';
import '../css/home.css';

class report extends Component {
    render() {
        return (
            <div className="header">
                <h1>CS 268 Project 2 Jayden and Max </h1>
                <ul>
                    <li>We created a web page for incoming freshman </li>
                    <li>Our site has 10 seperate pages which all have there own meaningful purpose</li>
                    <li>We have a Navigation bar that stretched across the top of every page</li>
                    <li>We have a coherent and consistent style across all of the pages </li>
                    <li>All images haave alt attributes</li>
                    <li>Our pages are organized, JS CSS, IMG folders</li>
                    <li>All files are lowercase and only contain alphnanumerica characters</li>
                    <li>Different font faces</li>
                    <li>we have external links to uwec home page and calendar page</li>
                    <li>source code is readable and we use meaningfull names for classes and IDs</li>
                    <li>We have a carousel animation on department pages</li>
                    <li>We emailed you about the connection between react and the database, we were unable to find a solution due to out inexperience with react.</li>

                    <li>A critique from out client was that we should add a google maps api that will show them the locations of the UWEC buildings. </li>
                </ul>   
            </div>
        )
    }
}

export default report;