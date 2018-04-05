import React from 'react';

 const About = () => (
  <div>
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
  </div>
);

export default About;
