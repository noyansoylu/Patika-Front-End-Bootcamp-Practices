import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-header">
          <h3>CONTACT US</h3>
          <span></span>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a place of classical at
            <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex column-gap-5 contact-info">
              <div>
                <h3>Mobile Number</h3>
                <p>+135 773 321 4442</p>
              </div>
              <div>
                <h3>Email Address</h3>
                <p>demo@demo.com</p>
              </div>
            </div>
            <div className="form-section">
              <h2>Make An Appointment</h2>
              <form action="#">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea name="text" placeholder="Your Message" rows="5"></textarea>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.246734179817!2d-70.55902985444244!3d41.45541635476562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1735752716744!5m2!1str!2str"
              className="google-map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
