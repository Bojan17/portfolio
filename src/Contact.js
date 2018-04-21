import React from 'react';

 const Contact = () => {
  return (
    <section className="contact">
      <ul className="contact-list">
        <li className="contact-listItem">
          <a className="contact-link" href="https://github.com/Bojan17" target="_blank">
            <i className="fab fa-github" style={{'color':'#e2e2e2', 'width': '7rem', 'height': '7rem'}}></i>
          </a>
        </li>
        <li className="contact-listItem">
          <a className="contact-link" href="mailto:bojan.kovacevic.pv@gmail.com" target="_blank">
            <i className="fas fa-envelope" style={{'color':'#e2e2e2', 'width': '7rem', 'height': '7rem'}}></i>
          </a>
        </li>
        <li className="contact-listItem">
          <a className="contact-link" href="https://www.linkedin.com/in/bojankovacevic93" target="blank">
            <i className="fab fa-linkedin" style={{'color':'#e2e2e2','width': '7rem', 'height': '7rem'}}></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;
