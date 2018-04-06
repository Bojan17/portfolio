import React from 'react';
import Card from './Card';



const Portfolio = () => {
  const github ="https://github.com/Bojan17/Bojan17.github.io/blob/master/sass/components/_button.scss";
  const link="https://github.com/Bojan17/Bojan17.github.io/blob/master/sass/components/_button.scss";

  return (
    <section className="portfolio" id="portfolio">
      <Card github={github} link={link} />
      <Card github={github} link={link} />
      <Card github={github} link={link} />
    </section>
  );
}

export default Portfolio;
