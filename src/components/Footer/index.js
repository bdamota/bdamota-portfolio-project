import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <footer id="footer">
      <div className="flex-row">
        <div className="github">
          <Card.Link className="cardLinkB" href="https://github.com/bdamota" target="blank">GitHub</Card.Link>
        </div>
        <div className="linkedin">
          <Card.Link className="cardLinkB" href="https://www.linkedin.com/in/brianadamota/" target="blank">LinkedIn</Card.Link>
        </div>
        <div className="instagram">
          <Card.Link className="cardLinkB" href="https://www.instagram.com/youngbreez/" target="blank">Instagram</Card.Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;