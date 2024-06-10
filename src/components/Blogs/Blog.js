import React from 'react';
import './Blog.css';
import image_1 from '../../images/image1.png';
import image_2 from '../../images/image2.png';
import image_3 from '../../images/image3.png';

const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className='blog'>
        <div className="title-h1">Why Partner With Us?</div>
        <div className="column">
          <img src={image_1} alt="" />
          <h3>Strong Network</h3>
          <p>Access to academic and establishment connects</p>
        </div>
        <div className="column">
          <img src={image_2} alt="" />
          <h3>Consulting Expertise</h3>
          <p>Strong Consulting expertise within the team</p>
        </div>
        <div className="column">
          <img src={image_3} alt="" />
          <h3>Startup Access</h3>
          <p>Wide network of startup opportunities</p>
        </div>
        <div>
        <button className='btn why_btn'>Explore more</button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Blog;
