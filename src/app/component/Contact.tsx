import React from 'react';
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="contact-heading" data-aos="flip-right">Reach Out</h2>
          <p className="contact-description" data-aos="flip-right">
            Drop me a line, give me a call, or send me a message, I am always open to networking and discussing new opportunities.
          </p>
          <div className="contact-item" data-aos="flip-right">
            <IoMdMail size={30} /> sehrishm322@gmail.com
          </div>
          <div className="contact-item" data-aos="flip-right">
            <BsFillTelephoneFill size={30} /> 0900-78601
          </div>
        </div>
        <div className="contact-form">
          <div className="form-field" data-aos="flip-right">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name" />
          </div>
          <div className="form-field" data-aos="flip-right">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-input" id="email" />
          </div>
          <div className="form-field" data-aos="flip-right">
            <label htmlFor="message">Message</label>
            <textarea className="form-textarea" id="msg" rows={8}></textarea>
          </div>
          <button className="form-button" data-aos="flip-right">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
