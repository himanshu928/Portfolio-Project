import React from 'react'
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
{/* 
    <!-- Left --> */}
    <div className="footer-left">
      <h3>Himanshu Sahu</h3>
      <p>Full Stack Developer | Building clean & responsive websites</p>
    </div>

    {/* <!-- Center --> */}
    <div className="footer-center">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    {/* <!-- Right --> */}
    <div className="footer-right">
      <h4>Connect</h4>
      <div className="social-links">
        <a href="https://github.com/himanshu928" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/himanshu-sahu-237b20390/" target="_blank">LinkedIn</a>
       
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Himanshu Sahu. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer
