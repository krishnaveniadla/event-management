import React from 'react'
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

const About = () => {
  return (
    <div>
      This is a about page
    </div>
  )
}
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                We are passionate about creating unforgettable experiences through 
                exceptional event planning and management. With years of expertise 
                in the industry, we specialize in transforming your vision into 
                reality.
              </p>
              
              <div className="about__highlights">
                <div className="highlight__item">
                  <h3>Our Mission</h3>
                  <p>
                    To deliver extraordinary events that exceed expectations and 
                    create lasting memories for our clients and their guests.
                  </p>
                </div>
                
                <div className="highlight__item">
                  <h3>Our Vision</h3>
                  <p>
                    To be the leading event management company known for innovation,
                    creativity, and exceptional service delivery.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg="6">
            <div className="about__image">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                alt="About Us"
              />
            </div>
          </Col>
        </Row>

export default About
        <Row className="mt-5">
          <Col lg="12">
            <div className="about__stats">
              <div className="stat__item">
                <h3>1000+</h3>
                <p>Events Organized</p>
              </div>
              <div className="stat__item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat__item">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat__item">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About
