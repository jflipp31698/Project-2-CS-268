import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import {Container, Col, Row, Card} from 'react-bootstrap'; 
import '../css/depts.css';

class Compsi extends Component {
    render () {
        return (
          <div className = "page">
            <div className = 'topHeader'>
                  <div className="header">
                    <h2>
                      University of Wisconsin Eau Claire Computer Science Department 
                    </h2>
                  </div>
            </div>
          <Container>
          <Row>
            <Col sm={1}>
            </Col>
            <Col sm = {10}>
            <br></br>
            <div className = 'mainContent'>
                <div className = "header">
                    <h2>
                      About UWEC's Computer Science Department 
                    </h2>
              </div>    
              <br></br>
              <div className="header">
                <h5>Majors, Minors and Certificates</h5>
              </div>
            <Card >
              <Card.Body>
                <Card.Title>Computer Science:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major and Minor</Card.Subtitle>
                <Card.Text>
                Immerse yourself in the fascinating world of computational methods, systems and models with a bachelor's degree in computer science from the University of Wisconsin-Eau Claire. Our cutting-edge program will prepare you well for a challenging, high-paying and in-demand career.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Multimedia Communication:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Minor</Card.Subtitle>
                <Card.Text>
                Exploring courses in English, computer science, art, and communication and journalism, the rigorous minor prepares you to hit the ground running. In addition to better understanding the basic principles of visual design, you'll learn how to gather and edit audio and video and use web-based software and platforms to publish your work. Projects and coursework will also help you to analyze audiences, frame arguments and express yourself clearly both verbally and on paper.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Software Engineering Major:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major</Card.Subtitle>
                <Card.Text>
                The University of Wisconsin-Eau Claire's Software Engineering bachelor's degree program was designed for those who love computers. If you enjoy developing or modifying systems software and hardware, working with computer operating systems and utilities or designing and testing software, this is an excellent career path for you.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Computer Programmers:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Certificate</Card.Subtitle>
                <Card.Text>
                By adding our computer programmer certificate to your academic career, you will acquire the skills and experience needed to understand specific software and programs.
                Courses for the certificate include: Programming for New Programmers or Programming for Experienced Programmers, Introduction to Programming in C+, Advanced Programming and Data Structures, Computer Systems
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <h2>
            <div class = "header">
            Contact the staff if interested!
            </div>
            </h2>
            <div class = "carousel-wrapper">
              <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                  <p>J. Erik Henderson</p>
                  <br></br>
                  <div className='caroselImage'>
                  </div>
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
                  <p>Brian Bandurand</p>
                  <br></br>
                  <p>Lecturer</p>
                  <p>Email: Dandurbc@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 138</p>
                <br></br>
                </div>
                <div>
                <p>Rushit Dave</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Email: Daver@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 136</p>
                <br></br>
                </div>
                <div>
                <p>Rahul Gomes</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Eamil: gomesr@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 133</p>
                <br></br>
                </div>
                <div>
                <p>Theresa Hanson</p>
                <br></br>
                <p>Associate Lecturer</p>
                <p>Email: hansomtm@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 137</p>
                <br></br>
                </div>
                <div>
                <p>Rakib Islam</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Email: Islamm@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 141</p>
                <br></br>
                </div>
                <div>
                <p>Jim Seliya</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Email: seliyana@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 134</p>
                <br></br>
                </div>
                <div>
                <p>Matthew J. Sias</p>
                <br></br>
                <p>Associate System Programmer | Adjuct Lecturer</p>
                <p>Email: siasmj@uwec.edu</p>
                <br></br>
                <p>Schofield Hall 115D</p>
                <br></br>
                </div>
                <div>
                <p>Jack Tan</p>
                <br></br>
                <p>Professor</p>
                <p>Email: tanjs@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 135</p>
                <br></br>
                </div>
                <div>
                <p>Michelle Cicha</p>
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
            <h2>
              <div className="header"> 
                Location
              </div> 
            </h2>
            <p>
              UWEC's Computer science department based on the first floor of Phillips hall. The department offers several lab locations for is students to interact, collaborate and learn with start of art technology.
            </p>
            <br></br>
            </Col>
            <Col sm={1}>
            </Col>
        </Row>
        </Container>
        </div>
        );
      }
}

export default Compsi;