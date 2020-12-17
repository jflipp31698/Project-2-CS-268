import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'; 
import ScrollableAnchor from 'react-scrollable-anchor'; 
import { Carousel } from 'react-responsive-carousel'; 

class Math extends Component {
  render () {
      return (
        <Container>
        <Row>
        <Col sm={1}>
          </Col>
          <Col sm = {10}>
          <div className = 'mainContent'>
          <header>
            <div className="header">
                <h1>Eau Claire Mathematics Department</h1>
            </div>
          </header>
          <br></br>
          <h2>
            <div className="header"> 
              Location
            </div> 
          </h2>
          <p>
            UWEC's biology department is located Hibbard Humanities Hall. 
          </p>
          <br></br>
          <h2>
            <ScrollableAnchor id={'aboutDepartment'}>
              <div className="header">
                About UWEC's biology department 
              </div>
            </ScrollableAnchor>
          </h2>
          <br></br>
          <div className="header">
            <h5>Majors, Minors and Certificates</h5>
          </div>
          <ul>
            <li>Actuarial Sciende Major and Minor:</li>
            <p>Much more than number crunchers, actuarial science graduates help businesses grow, provide value to customers and play a critical role in strategic decision making. In addition to having a deep understanding of mathematics, statistics and business, actuaries also measure, calculate and manage financial risk. Because of their critical contributions, actuaries are essential employees in the fields of health care, insurance, banking, finance, government, e-commerce, employee benefits and many more.</p>
            <li>Mathematics Major and Minor:</li>
            <p>Exploring topics and areas of study related to calculus, real analysis, linear algebra and abstract algebra, you'll learn how to write mathematical proofs, read and synthesize mathematical literature, and model and solve problems. Coursework throughout the major will focus on the application of a broad range of mathematical perspectives — including numerical, graphical, algebraic, analytical and verbal — and how they can effectively connect and communicate ideas.</p>
            <li>Mathematics - Research Emphasis Major:</li>
            <p>Uncover answers to fascinating mathematical questions with the University of Wisconsin-Eau Claire's mathematics - research emphasis bachelor's degree. One of only a few programs like it — and the only program like it in the UW System — the mathematics - research emphasis major is an excellent choice for those who enjoy math, are naturally curious and are passionate about contributing to the field of research. </p>
            <li>Mathematics - Statistics and Applied Mathematics Major :</li>
            <p>The University of Wisconsin-Eau Claire's mathematics - statistics and applied mathematics emphasis bachelor's degree is an excellent choice for students interested in scientific or engineering applications of mathematics; careers in business, industry, statistics or data science; or graduate work in areas like engineering, operations research, optimization or statistics. </p>
            <li>Teaching - Mathematics Major Minor: </li>
            <p>Combine your passions for math and education with a teaching - mathematics bachelor's degree from the University of Wisconsin-Eau Claire. Rooted in experiential learning, our competitive program is known for producing top-notch math teachers at the elementary, middle and high school levels. Completion of the program licenses you to teach all math courses to students in grades 4-12.</p>
            <li>Data Science Graduate Program</li>
            <p>The University of Wisconsin-Eau Claire's master of science in data science is a fully online degree program intended for students with a bachelor’s degree in math, statistics, analytics, computer science or marketing; or three to five years of professional experience as a business intelligence analyst, data analyst, financial analyst, information technology analyst, database administrator, computer programmer, statistician or other related position. </p>
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
                <p>Alex Smith, Ph.D.</p>
                <br></br>
                <div className='caroselImage'>
                  {/* //<img src='/logo192.png'/> */}
                </div>
                <p>Department Chair | Professor</p>
                <p>Email: smithaj@uwec.edu</p>
                <p></p>
                <br></br>
                <p>Hibbard Humanities Hall 525</p>
                <br></br>
              </div>
              <div>
                <p>Chris Ahrendt, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: ahrendcr@uwec.edu</p>
              <br></br>
              <p>Hibbard Humanities Hall 525</p>
              <br></br>
              </div>
              <div>
                <p>Mohammad Aziz, Ph.D.</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Email: azizm@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 516</p>
                <br></br>
                </div>
              <div>
              <p>Allison Beemer, Ph.D. (she/her/hers)</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Eamil: beemera@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 521</p>
                <br></br>
              </div>
              <div>
                <p>Christopher Davis, Ph.D.</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Email: daviscw@uwec.edu</p>
                <br></br>
                <p>Hibbard Humnaities Hall 553</p>
                <br></br>
              </div>
              <div>
                <p>Herschel Day, B.S., F.S.A., M.A.A.A.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: dayhe@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 519</p>
                <br></br>
                </div>
              <div>
                <p>Christopher Hlas, Ph.D. (he/him/his)</p>
                <br></br>
                <p>Professor</p>
                <p>Email: hlascs@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 530</p>
                <br></br>
                </div>
              <div>
                <p>Marie-Claire Koissi-Kouassi, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: koissiml@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 514</p>
                <br></br>
              </div>
              <div>
                <p>Jessica Kraker, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: krakerjj@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanitites Hall 517</p>
                <br></br>
              </div>
              <div>
                <p>Vicki Whitledge, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: whitlevm@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 513</p>
                <br></br>
              </div>
              <div>
                <p>Tom Wineinger, Ph.D. </p>
                <br></br>
                <p>Professor Emeritus</p>
                <p>Email: wineintw@uwec.edu</p>
                <br></br>
                <p>Hibbard Humanities Hall 423</p>
                <br></br>
              </div>
            </Carousel>
          </div>
          </div>
          </Col>
          <Col sm={1}>
          </Col>
      </Row>
      
      </Container>
      );
    }
}

export default Math;