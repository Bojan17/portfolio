import React from 'react';

const Card = ({github, link}) => {
  return (
    <div className="card">
      <i className="fab fa-github" style={{'width': '3rem', 'height': '3rem'}}></i>
      <a href='{github}'>Github repository</a>
      <a href='{link}'>Visit page</a>
    </div>
  );
}

export default Card;
