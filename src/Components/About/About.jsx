import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="About" className="about-img" />
        <img
          src={play_icon}
          alt="Play"
          className="play-icon"
          onClick={()=>{setPlayState(true)}}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark in a transformative educational journey with our university's
          comprehensive educational programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and values
          needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personal growth,
          our programs prepare aspiring educators to make a meaningful impact in
          classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the tools you
          need to achieve your goals and unlock your full potential in shaping
          the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
