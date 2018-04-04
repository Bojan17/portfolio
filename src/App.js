import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <ul className="header-list">
            <li className="heaeder-listItem"><a href="#home">Home</a></li>
            <li className="heaeder-listItem"><a href="#about">About</a></li>
            <li className="heaeder-listItem"><a href="#portfolio">Portfolio</a></li>
            <li className="heaeder-listItem"><a href="#contact">Contact</a></li>
          </ul>
        </header>

        <section className="home" id="home">
          <h2 className="name--1">Bojan</h2>
          <h2 className="name--2">Kovacevic</h2>
        </section>

        <section className="about" id="about">
          <figure className="about-figure">
            <figcaption className="about-figurecaption">About</figcaption>
            <img
            className="about-img"
            src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
            alt="An awesome picture" />
          </figure>
          <p className="about-par">Dear,

My name is Bojan Kovacevic, I'm 25 years old and I'm an ex student of University of Montenegro with major in Electrical Engineering. Two years ago I moved to Alaska and I had to quit my education. I never stopped loving to code and year ago I quit my second job and continued to work only part-time and went back to learning, this time Web development and all on my own. I started with basics making simple web applications and pages without lot of functionality, and moved quickly to new technologies such as React.js, Redux, Node.js, etc.</p>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="lodges"></div>
          <div className="ether"></div>
          <div className="emaily"></div>
        </section>

        <section className="contact">
          <ul className="contact-list">
            <li className="contact-listItem"><a className="project--1"><svg src="../gmail.svg" alt="Gmail"/></a></li>
            <li className="contact-listItem"><a className="project--1"><svg src="../github.svg" alt="Github" /></a></li>
            <li className="contact-listItem"><a className="project--1"><svg src="../linkedin.svg" alt="Linkedin"/></a></li>
          </ul>
        </section>

      </div>
    );
  }
}

export default App;
