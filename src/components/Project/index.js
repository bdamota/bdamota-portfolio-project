import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


function Project() {
  const [projects] = useState([
    {
      image: 'weather.png',
      name: 'Weather Dashboard',
      description: 'A simple weather dashboard to find the weather in multiple cities.',
      tech: 'HTML5 | CSS3 | JavaScript | jQuery | Bootstrap | Moment.js | OpenWeatherAPI',
      github: 'https://github.com/bdamota/Weather-Dashboard',
      site: 'https://bdamota.github.io/Weather-Dashboard/'
    },
    {
      image: 'Notetaker.png',
      name: 'Note Taker',
      description: 'An app to keep track of all of your to-dos.',
      tech: 'HTML5 | CSS3 | JavaScript | Node | Express | Uniqid | Heroku',
      github: 'https://github.com/bdamota/Note-Taker',
      site: 'https://notestakerapp.herokuapp.com/'
    },
    {
      image: 'kickback.png',
      name: 'KickBack',
      description: 'A web application that uses third-party APIs to generate randomized movie and recipe suggestions based on the user’s input of movie genre and cuisine type. ',
      tech: 'HTML5, CSS3, Bootstrap, JavaScript, OMDB API, MovieDB API, Spoonacular API',
      github: 'https://github.com/Achigas/KickBack',
      site: 'https://achigas.github.io/KickBack/'
    },
    {
      image: 'mylingual.png',
      name: 'Mylingual',
      description: 'A web-based social network that connects people who are learning the same languages. ',
      tech: 'HTML5 / CSS3 / Bootstrap / JavaScript / Node / Express / MySQL / Handlebars / Sequelize / Bcrypt / Heroku',
      github: 'https://github.com/Achigas/MyLingual',
      site: 'https://fathomless-reef-91284.herokuapp.com/'
    },
    {
      image: 'passwordgen.png',
      name: 'Password Generator',
      description: 'An app that generates a random, secure password.',
      tech: 'HTML3 | CSS3 | JavaScript',
      github: 'https://github.com/bdamota/Password-Generator',
      site: 'https://bdamota.github.io/Password-Generator/'
    },
    {
      image: 'zookeeper.png',
      name: 'Zookeepr',
      description: 'An app to keep track of animals and zookeepers that was built with a custom server-side API using the Express.js framework.',
      tech: 'HTML5 | CSS | JavaScript | Node | Jest | Express | Heroku | Insomnia',
      github: 'https://github.com/bdamota/Zookeepr',
      site: 'https://zookeeperapp.herokuapp.com/'
    }
  ]);
  return (
    <div className="wrapper">
      <h1 id="portfolio">Portfolio</h1>
      {projects.map((project) => (
           <Card className="cards" style={{display: 'flex', flexDirection: 'row'}}>
           <Card.Img variant="top" style={{ width: "30%" }}  src={require(`../../assets/cover/${project.image}`)}/>
           <Card.Body className="projectInfo"><br></br>
             <Card.Title className="cardTitle">{project.name}</Card.Title>
             <Card.Text className="cardText">
               {project.description}<br></br> <br></br>
               Tech: {project.tech}
             </Card.Text>
             <Card.Link className="cardLinkA" href={project.github}>See Code</Card.Link>
            <Card.Link className="cardLinkB" href={project.site}>Live Site</Card.Link>
           </Card.Body>
         </Card>
      ))}
      </div>
  );
}

export default Project;