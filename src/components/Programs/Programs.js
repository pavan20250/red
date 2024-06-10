import React from 'react'
import './Programs.css'
import program_1 from '../../images/service1.jpg'
import program_3 from '../../images/service3.png'
import program_4 from '../../images/service4.png'
import program_5 from '../../images/service5.png'

const Programs = () => {
  return (
    <div className='container'>
      <div className='services'><h1>Services</h1>
      <div className='service-list'>
        <div className='service'>
          <img src={program_1} />
          <div class="service-text">
            <h3>Research and Analysis</h3>
            <p></p>
          </div>
        </div>
        <div className='service'>
          <img src={program_3} />
          <div class="service-text">
            <h3>Consulting Services</h3>
            <p></p>
          </div>
        </div>
        <div className='service'>
          <img src={program_4} />
          <div class="service-text">
            <h3>Innovation Hub</h3>
            <p></p>
          </div>
        </div>
        <div className='service'>
          <img src={program_5} />
          <div class="service-text">
            <h3>Training and Capacity Building</h3>
            <p></p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Programs
