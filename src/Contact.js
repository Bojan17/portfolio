import React from 'react';

 const Contact = () => {
  return (
    <section className="contact">
      <ul className="contact-list">
        <li className="contact-listItem">
          <a className="project--1">
            <i className="fab fa-github" style={{'width': '7rem', 'height': '7rem'}}></i>
          </a>
        </li>
        <li className="contact-listItem"><a className="project--1"><i className="fas fa-envelope" style={{'width': '7rem', 'height': '7rem'}}></i></a></li>
        <li className="contact-listItem"><a className="project--1"><i className="fab fa-linkedin" style={{'width': '7rem', 'height': '7rem'}}></i></a></li>
      </ul>
    </section>
  )
}

export default Contact;
