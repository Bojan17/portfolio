import React from 'react';

 const About = () => (
  <div>
    <section className="about" id="about">
      <figure className="about-figure">
        <figcaption className="about-figurecaption">About</figcaption>
        <img
        className="about-img"
        src={require('./bojan.jpg')}
        alt="An awesome picture" />
      </figure>
      <p className="about-par">
        I'm self taught developer, or at least I believe I'm one.
        I enjoy learning and building apps. My primary focus was on JS and
        along with it I learned Node.js, React.js, ReactNative etc.
        I'm also getting better every day with Python, SQL, and MySQL.
        End goal is to become so knowledgeable one day that I can teach software engineering.
        Wish me luck on my journey!!
      </p>
    </section>
  </div>
);

export default About;
