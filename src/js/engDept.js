import React, { Component } from 'react';
import {Container, Col, Row, Card} from 'react-bootstrap'; 
import { Carousel } from 'react-responsive-carousel'; 

class Eng extends Component {
  render () {
      return (
        <div className= "page">
          <div className = 'topHeader'>
            <div className="header">
              <h2>
                University of Wisconsin Eau Claire English Department 
              </h2>
            </div>
          </div>
        <Container>
        <Row>
        <Col sm={1}>
          </Col>
          <Col sm = {10}>
          <div className = 'mainContent'>
          <br></br>
              <div className="header">
                <h2>
                  About UWEC's English Department 
                </h2>
              </div>
          <br></br>
          <div className="header">
            <h5>Majors, Minors and Certificates</h5>
          </div>
          <Card >
              <Card.Body>
                <Card.Title>Engish - Creative Witing Emphasis:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major and Minor</Card.Subtitle>
                <Card.Text>
                The growing major is an excellent choice for those who love to read and write, and are passionate about expressing themselves through language. Classes include creative and prose writing workshops, as well as those that focus on specific types of writing, such as playwriting, novel writing and creation of short stories and poetry. Through unique projects and class discussions, you'll foster creativity, insight and empathy — skills that are highly sought after by writers. A variety of electives and course topics throughout the major allow you to study the areas that interest you and best align with your career goals.  
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>English - Critical Studies in Literature, Culture, and Film Emphasis:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major and Minor</Card.Subtitle>
                <Card.Text>
                Learn to critique literature, society and culture from multiple angles — including from a historic, generic, cultural, ethnic, theoretical and national perspective — with a bachelor's degree in English - critical studies in literatures, cultures, and film from the University of Wisconsin-Eau Claire.  
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>English - Linguistics Emphasis:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major</Card.Subtitle>
                <Card.Text>
                Rooted in fascinating, active discussion, the Engish - linguistics major will allow you to explore questions and make discoveries. What makes a language a language? How do words work in your brain — and society? Why are there multiple words for the same thing? And how has the English language changed over time, and how might it change in the future? The field of linguistics attempts to answer these questions and so many more. 
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>English - Rhetorics of Science, Technology, and Culture Emphasis:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major and Minor</Card.Subtitle>
                <Card.Text>
                Learn how to interpret, synthesize and produce research-based texts for different audiences and purposes with a bachelor's degree in English - rhetorics of science, technology, and culture (RSTC) from the University of Wisconsin-Eau Claire. The unique major is an excellent choice for students who are interested in producing professional scientific and technical texts, passionate about published information being ethical, and enjoy creating documents that help people and organizations accomplish their goals.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Multimedia Communication: </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Minor</Card.Subtitle>
                <Card.Text>
                Exploring courses in English, computer science, art, and communication and journalism, the rigorous minor prepares you to hit the ground running. In addition to better understanding the basic principles of visual design, you'll learn how to gather and edit audio and video and use web-based software and platforms to publish your work. Projects and coursework will also help you to analyze audiences, frame arguments and express yourself clearly both verbally and on paper.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Teaching - English and Language Art: </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major</Card.Subtitle>
                <Card.Text>
                The University of Wisconsin-Eau Claire's teaching - English and language arts bachelor's degree prepares you to become a certified English and language arts teacher in grades 4-12. Taught by passionate, supportive faculty members, coursework will help you to learn best practices and effective instructional techniques when teaching writing, speaking, reading and literature.
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>English Certificate Programs: </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Certificate</Card.Subtitle>
                <Card.Text>
                The English department has a plethera of certificat options including, English - Creative Writing Certificate, English - Critical Studies in Literatures, Cultures, and Film Certificate, English - Rhetorics of Science, Technology, and Culture Certificate 
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
                <p>Jan Stirm, Ph.D.</p>
                <br></br>
                <div className='caroselImage'>
                </div>
                <p>Department Chair | Professor</p>
                <p>Email: jstirm@uwec.edu</p>
                <p></p>
                <br></br>
                <p>Centennial Hall 4113</p>
                <br></br>
              </div>
              <div>
                <p>José Felipe Alvergue, Ph.D., M.F.A.</p>
                <br></br>
                <p>Associate Professor | Director of Undergraduate Studies</p>
                <p>Email: alvergjf@uwec.edu</p>
              <br></br>
              <p>Centennial Hall 4111</p>
              <br></br>
              </div>
              <div>
                <p>Stephanie Farrar, Ph.D.</p>
                <br></br>
                <p>Associate Professor | Interim Director of Graduate Studies</p>
                <p>Email: farrarsm@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4219</p>
                <br></br>
                </div>
              <div>
              <p>Erica Benson, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Eamil: bensonej@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4306</p>
                <br></br>
              </div>
              <div>
                <p>Dorothy Chan, Ph.D.</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Email: chandk@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4303</p>
                <br></br>
              </div>
              <div>
                <p>Ruth Cronje, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: cronjerj@uwec.edu</p>
                <br></br>
                <p>Centenial Hall 4603</p>
                <br></br>
                </div>
              <div>
                <p>David Jones, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: jonesm@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4402</p>
                <br></br>
                </div>
              <div>
                <p>Theresa Kemp, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: tkemp@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4117</p>
                <br></br>
              </div>
              <div>
                <p>Bob Nowlan, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: ranowlan@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4319</p>
                <br></br>
              </div>
              <div>
                <p>Andrew Suralski, M.A.</p>
                <br></br>
                <p>Lecturer | Assistant Director of the Center for Writing Excellence</p>
                <p>Email: suralsaw@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4703</p>
                <br></br>
              </div>
              <div>
                <p>Stephanie Turner, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: turnerss@uwec.edu</p>
                <br></br>
                <p>Centennial Hall 4114</p>
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
            UWEC's English department is located Centennial Hall 
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

export default Eng;