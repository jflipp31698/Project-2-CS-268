import React, { Component } from 'react'; 
import {Container, Col, Row, Card} from 'react-bootstrap'; 
import { Carousel } from 'react-responsive-carousel'; 

class  BIZ extends Component {
    render () {
        return (
          <div className = "page">
          <div className = 'topHeader'>
            <div className="header">
              <h2>
                University of Wisconsin Eau Claire Sociology Department 
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
                    About UWEC's Sociology Department 
                  </h2>
                </div>
            <br></br>
            <div className="header">
              <h5>Majors, Minors and Certificates</h5>
            </div>
            <Card >
              <Card.Body>
                <Card.Title>Family Studies: </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Minor</Card.Subtitle>
                <Card.Text>
                The University of Wisconsin-Eau Claire's interdisciplinary family studies minor will give you a deeper understanding of the issues and problems families face in today's society. Coursework focuses on a variety of perspectives — including sociological, developmental, psychological, historical, religious, economic and anthropologic. The minor will also help you to learn about the dynamic relationships within families and the interaction between families and our society.                 
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Sociology:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Major and Minor</Card.Subtitle>
                <Card.Text>
                Make the world a better, brighter place with a degree in sociology from the University of Wisconsin-Eau Claire. Rooted in experiential learning, our growing program focuses on ways you can make a difference and positively impact society.A broad, rigorous curriculum includes a variety of electives, giving you the freedom to personalize your education and pursue multiple passions. Explore courses in social movements, social change, inequality, sexuality and gender, gerontology, race and ethnicity, family, the environment and more.                 
                </Card.Text>
              </Card.Body>
            </Card>
            <br></br>
            <Card >
              <Card.Body>
                <Card.Title>Sociology Diversity:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Certificate</Card.Subtitle>
                <Card.Text>
                Are you interested in, or passionate about, the inequalities dealt with within our society today? Our social diversity certificate specifically studies these inequalities, including those based on race, class, gender and sexualities. Throughout the course, you'll also look at the institutions which cause these inequalities and where systems of privilege and oppression are created and sustained.                
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
                  <p>Pamela J. Forman</p>
                  <br></br>
                  <div className='caroselImage'>
                  </div>
                  <p>Department Chair | Professor</p>
                  <p>Email: formanpj@uwec.edu</p>
                  <p></p>
                  <br></br>
                  <p>Room: Hibbard Humanities Hall 619</p>
                  <br></br>
                </div>
                <div>
                  <p>Melissa Bonstead-Bruns</p>
                  <br></br>
                  <p>Professor</p>
                  <p>Email: bonstemj@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 627</p>
                  <br></br>
                </div>
                <div>
                  <p>Margaret Cassidy</p>
                  <br></br>
                  <p>Associate Dean | Professor</p>
                  <p>Email: cassidml@uwec.edu</p>
                  <br></br>
                  <p>Schofield Hall 220B</p>
                  <br></br>
                </div>
                  <div>
                  <p>Jeff Erger</p>
                  <br></br>
                  <p>Professor</p>
                  <p>Eamil: ergerjs@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 618</p>
                  <br></br>
                </div>
                <div>
                  <p>Peter Hart-Brinson</p>
                  <br></br>
                  <p>Associate Professor</p>
                  <p>Email: hartbrin@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 620</p>
                  <br></br>
                </div>
                  <div>
                  <p>Jianjun Ji</p>
                  <br></br>
                  <p>Professor</p>
                  <p>Email: jij@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 617</p>
                  <br></br>
                </div>
                <div>
                  <p>Tarique Niazi</p>
                  <br></br>
                  <p>Professor</p>
                  <p>Email: niazit@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 622</p>
                  <br></br>
                </div>
                <div>
                  <p>Kathleen Nybroten</p>
                  <br></br>
                  <p>Professor | Program Coordinator</p>
                  <p>Email: nybrotka@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 625</p>
                  <br></br>
                </div>
                <div>
                  <p>Lori Jahnke</p>
                  <br></br>
                  <p>Academic Department Associate</p>
                  <p>Email: jahnkell@uwec.edu</p>
                  <br></br>
                  <p>Hibbard Humanities Hall 384</p>
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
              UWEC's Sociology department is located on the Sixth floor of Hibbard Humanities Hall. 
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

export default BIZ;