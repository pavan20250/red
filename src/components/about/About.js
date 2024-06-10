import React from 'react'
import "./About.css"
import about from '../../images/about.png'

const About = () => {
  return (
    <div className='container'>
      <div className='about'>
        <div className='about-left'>
          <img src={about} alt='' className='about-img' />
        </div>
        <div className='about-right'>
          <h2>Who We Are – Thinktank Connecting the Ecosystem</h2>
          <p>We are a leading thinktank dedicated to connecting the defense ecosystem through innovation, technology transfer, and capacity building. 
            Our goal is to support vulnerable communities, enhance disaster resilience, and promote India's military heritage under Project Udbhav. By collaborating with 
            local governments, NGOs, international organizations, and startups, we aim to create impactful solutions for a safer and more resilient future.
          </p>
        </div>
     </div>
      <div class="slider">
        <div class="slide-track">
            <div class="slide">
                <h2>01. Startup Connect</h2>
                <p>Strong startup connects</p>
            </div>
            <div class="slide">
                <h2>02. Govt Experience</h2>
                <p>Strong experience of working at both Center and State </p>
            </div>
            <div class="slide">
                <h2>03. Domain focus</h2>
                <p>Strong Understanding of deeptch</p>
            </div>
            <div class="slide">
                <h2>04. Academia Network</h2>
                <p>Working with Incubators across institutions</p>
            </div>
            <div class="slide">
                <h2>05. Research Expertise</h2>
                <p>Strong research capability</p>
            </div>
            <div class="slide">
                <h2>06. Partnerships</h2>
                <p>Wide network of Partnerships for execution support</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
