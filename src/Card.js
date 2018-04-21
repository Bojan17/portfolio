import React from 'react';

const Card = ({github, link, name}) => {
  return (
    <div className="card">
      <div className="github-wrapper">
        <i className="fab fa-github" style={{'width': '3rem', 'height': '3rem'}}></i>
        <a href={github} target="blank" style={{'fontFamily': 'Kanit', 'color': '#1b1b1b'}}>Github repository</a>
      </div>
      <h4 style={{'fontFamily': 'Kanit', 'fontWeight': '400', 'color': '#1b1b1b'}}>{name}</h4>
      <a href={link} target="blank" style={{'fontFamily': 'Kanit', 'color': '#1b1b1b'}}>Visit page</a>
    </div>
  );
}

export default Card;
