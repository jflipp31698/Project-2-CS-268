import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

class Compsi extends Component {
    render () {
        return (
          <div className="ComputerScience">
          <header>
          <div className="header">
              <h1>Eau Claire Computer Science Department</h1>
              </div>
          </header>
          <br></br>
          <h2>
            Location 
          </h2>
          <p>
            UWEC's Computer science department based on the first floor of Phillips hall. The department offers several lab locations for is students to interact, collaborate and learn with start of art technology.
          </p>
          <br></br>
          <h2>
            About UWEC's Computer Science department. 
          </h2>
          <h5>Majors, Minors and Certificates</h5>
          <ul>
            <li>Computer Science Major and Minor</li>
            <p>Immerse yourself in the fascinating world of computational methods, systems and models with a bachelor's degree in computer science from the University of Wisconsin-Eau Claire. Our cutting-edge program will prepare you well for a challenging, high-paying and in-demand career.</p>
            <li>Multimedia Communication Minor</li>
            <p>Exploring courses in English, computer science, art, and communication and journalism, the rigorous minor prepares you to hit the ground running. In addition to better understanding the basic principles of visual design, you'll learn how to gather and edit audio and video and use web-based software and platforms to publish your work. Projects and coursework will also help you to analyze audiences, frame arguments and express yourself clearly both verbally and on paper.</p>
            <li>Software Engineering Major</li>
            <p>The University of Wisconsin-Eau Claire's Software Engineering bachelor's degree program was designed for those who love computers. If you enjoy developing or modifying systems software and hardware, working with computer operating systems and utilities or designing and testing software, this is an excellent career path for you.</p>
            <li>Computer Programmer Certificate</li>
            <p>By adding our computer programmer certificate to your academic career, you will acquire the skills and experience needed to understand specific software and programs.
              Courses for the certificate include: Programming for New Programmers or Programming for Experienced Programmers, Introduction to Programming in C+, Advanced Programming and Data Structures, Computer Systems
            </p>
          </ul>
          <p></p>
          <br></br>
          <h2>
            Meet the Staff!
          </h2>
          <div class = "carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
              <div>
               <h4>J. Erik Henderson</h4>
               <br></br>
               <p>Interm Department Chair | Professor</p>
               <p>Email: hendrije@uwec.edu</p>
               <p>
                 Education:
                  Ph.D. - 1994 - Michigan State University, Condensed Matter Physics
                  M.S. - 1990 - Michigan State University, Physics
                  B.S. - 1988 - University of Wisconsin-River Falls, Physics </p>
               <br></br>
               <p>Room: Phillips Science Hall 231</p>
               <br></br>
              </div>
              <div>
                <h4>Brian Bandurand</h4>
                <br></br>
                <p>Lecturer</p>
                <p>Email: Dandurbc@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 138</p>
               <br></br>
              </div>
              <div>
               <h4>Rushit Dave</h4>
               <br></br>
               <p>Assistant Professor</p>
               <p>Email: Daver@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 136</p>
               <br></br>
              </div>
              <div>
               <h4>Rahul Gomes</h4>
               <br></br>
               <p>Assistant Professor</p>
               <p>Eamil: gomesr@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 133</p>
               <br></br>
              </div>
              <div>
               <h4>Theresa Hanson</h4>
               <br></br>
               <p>Associate Lecturer</p>
               <p>Email: hansomtm@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 137</p>
               <br></br>
              </div>
              <div>
               <h4>Rakib Islam</h4>
               <br></br>
               <p>Assistant Professor</p>
               <p>Email: Islamm@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 141</p>
               <br></br>
              </div>
              <div>
               <h4>Jim Seliya</h4>
               <br></br>
               <p>Assistant Professor</p>
               <p>Email: seliyana@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 134</p>
               <br></br>
              </div>
              <div>
               <h4>Matthew J. Sias</h4>
               <br></br>
               <p>Associate System Programmer | Adjuct Lecturer</p>
               <p>Email: siasmj@uwec.edu</p>
               <br></br>
               <p>Schofield Hall 115D</p>
               <br></br>
              </div>
              <div>
               <h4>Jack Tan</h4>
               <br></br>
               <p>Professor</p>
               <p>Email: tanjs@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 135</p>
               <br></br>
              </div>
              <div>
               <h4>Michelle Cicha</h4>
               <br></br>
               <p>Academic Department Associate</p>
               <p>Email: jensenmi@uwec.edu</p>
               <br></br>
               <p>Phillips Science Hall 130</p>
               <br></br>
              </div>
            </Carousel>
          </div>
          </div>
        );
      }
}

export default Compsi;