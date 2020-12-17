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
                    <div className="container">
                    <div className="welcome">
                        <p>Welcome to Freshman Connect at UW-Eau Claire!</p>
                        <hr></hr>
                    </div>
                    <div className="about">
                        <h2>Your Journey To College Success Starts Here</h2>
                        <p>Moving from high school to college can be a big transition for students, and this year's incoming freshmen are facing new challenges as the coronavirus pandemic pushes many colleges to fully online or hybrid classes. For those stressing over this new life chapter and today's uncertainties, there are ways to prepare before starting those first classes. From researching academic support to developing strong interpersonal skills, the following tips can help incoming freshmen get organized and build a foundation for college success.</p>
                        <hr/>

                        <h2>Get Social</h2>
                        <p>College pushes students to develop strong communication skills. From group projects to communicating with professors, an ability to convey ideas clearly and work collaboratively will serve students well. That includes dealing with social issues; many students will find themselves working closely with people from different backgrounds and life experiences, so they should consider taking advantage of diversity and inclusion classes or books. In addition, leadership and problem-solving skills will be important qualities when it comes time to apply for jobs and internships during school and after graduation. With that in mind, students should consider enrolling in courses that teach soft skills once school begins.</p>
                        <hr/>

                        <h2>Orientation</h2>
                        <p>Orientation typically begins in the weeks and sometimes months before classes start, but this year, it may be postponed or held entirely online. Still, it's a great way for students to get acclimated and ask plenty of questions. Realize that everyone is trying to make friends and adjust to a new environment, so don't be shy. After orientation, many schools offer unique first-year experiences that help students further connect with their classmates and college community.</p>
                        <hr/>
                    </div>
                    <div className="main-image">
                        <img src={pic} alt="Logo"/>
                    </div>
                    </div>
                    
            </div>
        )
    }
}

export default Home;