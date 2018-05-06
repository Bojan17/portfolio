import React from 'react';
import Card from './Card';

const Portfolio = () => (
    <div>
       <section className="portfolio" id="portfolio">
         <Card github='https://github.com/Bojan17/Lodges-Cabins' link='https://aklodges.herokuapp.com/' name='Ak Lodges' tech='Node.js, Express.js, MongoDB, JS' />
         <Card github='https://github.com/Bojan17/Campaign' link='https://kickstart-hcyqgpcyqj.now.sh/' name='Smart campaign' tech='Solidity, ReactJS, Next.js'/>
         <Card github="#" link='http://gentle-journey-64447.herokuapp.com/' name='Emaily' tech='ReactJS, Node.js, Sendgrid, Stripe'/>
         <Card github="https://github.com/Bojan17/Bojan17.github.io" link='https://bojan17.github.io/' name='Natours' tech='HTML, CSS3'/>
         <div className="card">
           <div className="github-wrapper">

             <a href="http://aws.amazon.com/verification" target="blank" style={{'fontFamily': 'Kanit', 'color': '#1b1b1b'}}>AWS Solution Architect </a>
           </div>
           <h4 style={{'fontFamily': 'Kanit', 'fontWeight': '400', 'color': '#1b1b1b'}}>9N6DBRGKJMF1QXCG</h4>
         </div>
       </section>
    </div>
)
export default Portfolio;
