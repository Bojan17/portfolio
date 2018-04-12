import React from 'react';

 const Home = () => (
  <div className="home-wrapper">

    <section className="home" id="home">
      <div className="name name--1">
        <span>B</span>
        <span>O</span>
        <span>J</span>
        <span>A</span>
        <span>N</span>
      </div>
      <div className="name name--2">
        <span>K</span>
        <span>O</span>
        <span>V</span>
        <span>A</span>
        <span>C</span>
        <span>E</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
      </div>
      <h3 style={{'fontSize': '2rem', 'fontFamily': 'Kanit', 'fontWeight': '300', 'color': '#bab3ad'}}>( I enjoy coding, and learning! My favorites are: React.js and Python )</h3>
    </section>
    <div className="skills">
      <h4 className="skillsItems">JavaScript</h4>
      <h4 className="skillsItems">jQuery</h4>
      <h4 className="skillsItems">React.js</h4>
      <h4 className="skillsItems">Redux</h4>
      <h4 className="skillsItems">Node.js</h4>
      <h4 className="skillsItems">Python</h4>
      <h4 className="skillsItems">MongoDB</h4>
      <h4 className="skillsItems">GraphQL</h4>
      <h4 className="skillsItems">PWA</h4>
      <h4 className="skillsItems">WordPress</h4>
      <h4 className="skillsItems">Amazon Web Services</h4>
    </div>
  </div>
);

export default Home;
