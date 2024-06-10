import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../images/msg-icon.png'
import mail_icon from '../../images/mail-icon.png'
import phone_icon from '../../images/phone-icon.png'
import location_icon from '../../images/location-icon.png'

const Contact = () => {
    return(
        <div className='container'>
            <h1>Contact us</h1>
            <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message<img src={msg_icon} alt='' /></h3>
                <p>Feel free to reach out through contact form or find our contact information below
                    . Your feedback, questions, and suggestions are important to us as we strive to provide
                    exceptional service to our community.
                </p>
                <ul>
                    <li><img src={phone_icon} alt='' />+91987456321</li>
                    <li><img src={mail_icon} alt='' />contact@gmail.com</li>
                    <li><img src={location_icon} alt='' />Address</li>
                </ul>

            </div>
            <div className='contact-col'>
                <form>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your Mobile Number' required />
                    <label>Write your messages here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit</button>
                </form>
                <span></span>
            </div>
        </div>
        </div>
    )
}

export default Contact;
