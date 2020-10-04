import React from 'react';
import Card from 'react-bootstrap/Card';

function Resume() {
  return (
    <section className="my-5">
    <h1 id="resume">Technical Skills</h1>
    <div className="aboutInfo">
    <p>» HTML5 » CSS3 » JavaScript » jQuery » Node » Express » MySQL » MongoDB » React » Git / GitHub » Heroku
    </p>
    </div>
    <Card.Link className="cardLinkB" href="https://drive.google.com/file/d/1u-mtYBgp-i7rDkLLy1DDLt1H9i4QAyDk/view?usp=sharing" target="blank">Download Resume</Card.Link>
  </section>
  );
}

export default Resume;