import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


function Project() {
  const [projects] = useState([
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    },
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    },
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    },
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    },
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    },
    {
      image: 'cover-image.jpg',
      name: 'whr',
      description: 'Data Visualization',
      tech: 'd3.js | leaflet.js | geojson | python | pandas',
      github: 'https://bdamota.github.io/Portfolio/',
      site: 'https://bdamota.github.io/Portfolio/'
    }
  ]);
  return (
    <div className="wrapper">
      <h1 id="portfolio">Portfolio</h1>
      {projects.map((project) => (
           <Card style={{display: 'flex', flexDirection: 'row'}}>
           <Card.Img variant="top" style={{ width: "30%" }}  src={require(`../../assets/cover/${project.image}`)}/>
           <Card.Body><br></br>
             <Card.Title>{project.name}</Card.Title>
             <Card.Text>
               {project.description}<br></br>
               {project.tech}
             </Card.Text>
             <Card.Link href={project.github}>See Code</Card.Link>
            <Card.Link href={project.site}>Live Site</Card.Link>
           </Card.Body>
         </Card>
      ))}
    </div>
  );
}

export default Project;