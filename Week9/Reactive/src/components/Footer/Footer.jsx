import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <img src="/assets/logo.png" alt="Logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit mollitia autem iusto,
          deleniti asperiores voluptate quisquam officia sunt provident laboriosam molestiae nemo
          quod neque soluta dolorum dolore et nostrum aspernatur?
        </p>
      </div>
      <div className="footer-links row-gap-3">
        <div className="link-list row-gap-2">
          <h3>Information</h3>
          <a href="#home">About Us</a>
          <a href="#our-classes">Classes</a>
          <a href="#">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="link-list row-gap-2">
          <h3>Helpful Links</h3>
          <a href="#">Services</a>
          <a href="#">Supports</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
