import React from 'react';
import Card from './Card';

const Portfolio = () => (
       <section className="portfolio" id="portfolio">
         <Card github='https://github.com/Bojan17/Lodges-Cabins' link='https://aklodges.herokuapp.com/' name='Ak Lodges' />
         <Card github='https://github.com/Bojan17/Campaign' link='https://kickstart-hcyqgpcyqj.now.sh/' name='Smart campaign' />
         <Card github="#" link='http://gentle-journey-64447.herokuapp.com/' name='Emaily' />
       </section>
)
export default Portfolio;
