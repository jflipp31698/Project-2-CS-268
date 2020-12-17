import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'; 
import ScrollableAnchor from 'react-scrollable-anchor'; 
import { Carousel } from 'react-responsive-carousel'; 

class BIO extends Component {
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
                <h1>Eau Claire Biology Department</h1>
            </div>
          </header>
          <br></br>
          <h2>
            <div className="header"> 
              Location
            </div> 
          </h2>
          <p>
            UWEC's biology department is located on the third floor of Phillips Hall. 
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
            <li>Biochemistry and Molecular Biology Major:</li>
            <p>An excellent path for those interested in both chemistry and biology, the biochemistry and molecular biology program focuses on the study of life processes at the molecular level. You'll study how molecules control heredity, development, aging and mental activity, as well as how abnormalities in these molecules can lead to diseases like cancer.</p>
            <li>Biology Major and Minor:</li>
            <p>Study the science of life with a biology bachelor's degree from the University of Wisconsin-Eau Claire. As one of the largest majors on campus, you'll find yourself surrounded by energized, passionate people just like you: curious about the earth and all that live on it. </p>
            <li>Biology – Ecology and Environmental Biology Emphasis Major:</li>
            <p>Research and exploring the unknown is highly encouraged in this program. Opportunities to collaborate with faculty and partnerships with major organizations give you the power and freedom to discover the next big thing.</p>
            <li>Biology - Microbiology Emphasis Major:</li>
            <p>An excellent path for those who wish to enter the medical, pharmaceutical, dental, agriculture, food, veterinary or health care field, the microbiology program will help you find your niche and be successful in your chosen career.</p>
            <li>Environmental Science Minor: </li>
            <p>Rooted in experiential, outside-the-classroom learning, you'll explore fascinating topics like aquatic ecology, water resources and biostatistics. A capstone course allows you to take your studies to the field and explore new areas like the Rocky Mountains. Environmental science minors are also encouraged to study abroad, intern and participate in the National Student Exchange for access to even more environmental courses and experiences. </p>
            <li>Marine Science Minor: </li>
            <p>The University of Wisconsin-Eau Claire's marine science minor is designed for students who are interested in studying, maintaining and preserving marine life. Most of your coursework is completed over two summer sessions at the Gulf Coast Research Lab (GCRL) in Ocean Springs, Mississippi. Here, you'll work alongside experts in the field, gaining firsthand professional experience. This unique opportunity is an excellent way to explore career paths and make valuable connections. </p>
            <li>Teaching - Science, Biology Emphasis Major: </li>
            <p>Make a positive impact on our environment and the next generation with a bachelor’s degree in our newly developed teaching - science, biology emphasis from the University of Wisconsin-Eau Claire. Rooted in research and exploration, the teaching - science, biology emphasis program includes opportunities to test ideas, make discoveries and gain professional teaching experience. Pursuing this degree will certify you to teach any science course, especially biology, in grades 4-12.</p>
            <li>Pre-Dentistry: </li>
            <p>The University of Wisconsin-Eau Claire offers a rigorous curriculum and experiential learning opportunities that will prepare you well for a career in dentistry. Pre-dentistry is not a major at UW-Eau Claire, but rather a declaration of your intention to continue your education and enroll in dental school.</p>
            <li>Pre-Med: </li>
            <p>The University of Wisconsin-Eau Claire offers a rigorous curriculum and experiential learning opportunities that will prepare you well for a career in medicine. Pre-med is not a major at UW-Eau Claire, but rather a declaration of your intention to continue your education and enroll in medical school.</p>
            <li>Pre-Optometry: </li>
            <p>The University of Wisconsin-Eau Claire's pre-optometry curriculum provides a pathway to graduate school for students interested in a career in optometry. Pre-optometry is not a major at UW-Eau Claire, but rather a declaration of your intention to continue your education and become an optometrist. </p>
            <li>Pre-Pharmacy: </li>
            <p>Pharmacists are experts on drugs and drug therapy. They package and dispense prescription medications, advise on use of non-prescriptive drugs and calculate doses and prepare medicines for patients. Pharmacists with an interest in academic or research pharmacy teach in hospitals, universities or medical schools, or pursue a career with a pharmaceutical company.</p>
            <li>Pre-Physician Assistant: </li>
            <p>Physician assistants are health professionals who deliver a broad range of medical and surgical services. PAs are licensed to practice under the supervision of a physician (MD or DO) and state law determines the scope of their practice. In general, they take medical histories, examine and treat patients, order and interpret laboratory tests and X-rays, make diagnoses, prescribe medications, administer treatments, assist in surgery, and counsel and educate patients.</p>
            <li>Pre-Veterinary Madicine:  </li>
            <p>Careers in veterinary medicine deal with the prevention, diagnosis and treatment of disease, disorder and injury in animals. The scope of veterinary medicine is wide, covering all animal species, both domesticated and wild. A specific major is not required to get into veterinary school, but many UWEC pre-veterinary medicine students choose to major in biology, chemistry, biochemistry and molecular biology or microbiology. </p>
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
                <p>Paula Kleintjes Neff, Ph.D.</p>
                <br></br>
                <div className='caroselImage'>
                  {/* //<img src='/logo192.png'/> */}
                </div>
                <p>Department Chair | Professor</p>
                <p>Email: Kleintpke@uwec.edu</p>
                <p></p>
                <br></br>
                <p>Room: Phillips Science Hall 330</p>
                <br></br>
              </div>
              <div>
                <p>Julie Anderson, Ph.D.</p>
                <br></br>
                <p>Director | Associate Professor</p>
                <p>Email: anderj@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 349</p>
              <br></br>
              </div>
              <div>
              <p>Kristina Beuning, Ph.D.</p>
              <br></br>
              <p>Greenhourse and Animal Care Manager</p>
              <p>Email: beuninkr@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 344</p>
              <br></br>
              </div>
              <div>
              <p>Winnifred Bryant, Ph.D.</p>
              <br></br>
              <p>Professor</p>
              <p>Eamil: bryantwm@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 344</p>
              <br></br>
              </div>
              <div>
              <p>Bradley S. Carter, Ph.D.</p>
              <br></br>
              <p>Associate Professor</p>
              <p>Email: carterbs@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 339</p>
              <br></br>
              </div>
              <div>
              <p>Christina Chan-Weiher, M.S.</p>
              <br></br>
              <p>Labratory Manager</p>
              <p>Email: chanweih@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 350</p>
              <br></br>
              </div>
              <div>
              <p>Leah Davis</p>
              <br></br>
              <p>Acedemic Department Associate</p>
              <p>Email: davisla@uwec.edu</p>
              <br></br>
              <p>--</p>
              <br></br>
              </div>
              <div>
              <p>Crystal M. Del Valle, Ph.D.</p>
              <br></br>
              <p>Assistant Professor</p>
              <p>Email: delvalle@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 342</p>
              <br></br>
              </div>
              <div>
              <p>Robert Duerst, M.S.</p>
              <br></br>
              <p>Lecturer</p>
              <p>Email: duerst@uwec.edu</p>
              <br></br>
              <p>Phillips Science Hall 343</p>
              <br></br>
              </div>
              <div>
                <p>Mary Elger-Lonzarich, M.S.</p>
                <br></br>
                <p>Senior Lecturer</p>
                <p>Email: lonzarm@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 340</p>
                <br></br>
              </div>
              <div>
                <p>Derek Gingerich, Ph.D.</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Email: gingerdj@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 352</p>
                <br></br>
              </div>
              <div>
                <p>Mary Elger-Lonzarich, M.S.</p>
                <br></br>
                <p>Academic Department Associate</p>
                <p>Email: lonzarm@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 340</p>
                <br></br>
              </div>
              <div>
                <p>Daniel P. Herman, Ph.D.</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Email: hermandp@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 338</p>
                <br></br>
              </div>
              <div>
                <p>Tali D. Lee, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: leetd@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 346</p>
                <br></br>
              </div>
              <div>
                <p>David Lonzarich, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: lonzard@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 381</p>
                <br></br>
              </div>
              <div>
                <p>Jamie Lyman Gingerich, Ph.D.</p>
                <br></br>
                <p>Associate Professor | ORSP Faculty Fellow</p>
                <p>Email: lymangjs@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 351</p>
                <br></br>
              </div>
              <div>
                <p>Nora Mitchell, Ph.D.</p>
                <br></br>
                <p>Assistant Professor</p>
                <p>Email: mitchenc@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 355</p>
                <br></br>
              </div>
              <div>
                <p>Kelly Murray, M.S.</p>
                <br></br>
                <p>Senior Lecturer</p>
                <p>Email: murraykl@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 357</p>
                <br></br>
              </div>
              <div>
                <p>Sasha A. Showsh, Ph.D.</p>
                <br></br>
                <p>Associate Professor</p>
                <p>Email: showshsa@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 358</p>
                <br></br>
              </div>
              <div>
                <p>Evan Weiher, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: weiher@uwec.edu</p>
                <br></br>
                <p>--</p>
                <br></br>
              </div>
              <div>
                <p>Todd Wellnitz, Ph.D.</p>
                <br></br>
                <p>Professor</p>
                <p>Email: wellnita@uwec.edu</p>
                <br></br>
                <p>Phillips Science Hall 345</p>
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

export default BIO;