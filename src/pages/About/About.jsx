import React from 'react';
import "./About.css"
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="adlis-logo" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About ADLIS</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quod! Quo voluptatum
              asperiores natus eaque dolorum iure fugiat cumque impedit excepturi
              architecto laboriosam repudiandae aliquid magni et voluptas?
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, quod! Quo voluptatum
              asperiores natus eaque dolorum iure fugiat cumque impedit excepturi
              architecto laboriosam repudiandae aliquid magni et voluptas?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
