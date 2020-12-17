import React, { Component } from 'react'; 
import {Container, Col, Row} from 'react-bootstrap'; 
import ScrollableAnchor from 'react-scrollable-anchor'; 
import { Carousel } from 'react-responsive-carousel'; 

class  BIZ extends Component {
    render () {
        return (
          <Container>
          <Row>
            <Col sm={2}>
            </Col>
            <Col sm = {10}>
            <div className = 'mainContent'>
            <header>
              <div className="header">
                  <h1>Eau Claire Sociology Department</h1>
              </div>
            </header>
            <br></br>
            <h2>
              <div className="header"> 
                Location
              </div> 
            </h2>
            <p>
              UWEC's Sociology department is located on the Sixth floor of Hibbard Humanities Hall. 
            </p>
            <br></br>
            <h2>
              <ScrollableAnchor id={'aboutDepartment'}>
                <div className="header">
                  About UWEC's Sociology department 
                </div>
              </ScrollableAnchor>
            </h2>
            <br></br>
            <div className="header">
              <h5>Majors, Minors and Certificates</h5>
            </div>
            <ul>
              <li>Family Studies Minor:</li>
              <p>The University of Wisconsin-Eau Claire's interdisciplinary family studies minor will give you a deeper understanding of the issues and problems families face in today's society. Coursework focuses on a variety of perspectives — including sociological, developmental, psychological, historical, religious, economic and anthropologic. The minor will also help you to learn about the dynamic relationships within families and the interaction between families and our society. </p>
              <li>Sociology Major and Minor :</li>
              <p>Make the world a better, brighter place with a degree in sociology from the University of Wisconsin-Eau Claire. Rooted in experiential learning, our growing program focuses on ways you can make a difference and positively impact society.A broad, rigorous curriculum includes a variety of electives, giving you the freedom to personalize your education and pursue multiple passions. Explore courses in social movements, social change, inequality, sexuality and gender, gerontology, race and ethnicity, family, the environment and more.</p>
              <li>Sociology Diversity Certificate:</li>
              <p>Are you interested in, or passionate about, the inequalities dealt with within our society today? Our social diversity certificate specifically studies these inequalities, including those based on race, class, gender and sexualities. Throughout the course, you'll also look at the institutions which cause these inequalities and where systems of privilege and oppression are created and sustained.</p>
            </ul>
            <p></p>
            <br></br>
            <h2>
            <ScrollableAnchor id={'Staff'}>
            <div class = "header">
              Meet the Staff!
            </div>
            </ScrollableAnchor>
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
            </Col>
            <Col sm={2}>
            </Col>
        </Row>
        </Container>
        );
      }
}

export default BIZ;