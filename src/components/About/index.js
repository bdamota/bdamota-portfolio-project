import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
    <h1 id="about">About Me</h1>
    <div className="aboutInfo">
    <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="profile" />
    <p>I have a passion for people and telling diverse stories that reflect both our unique and shared experiences. I've spent the last ten years working with clients to create authentic and compelling content that resonates with general market and multicultural audiences.<br>
    </br><br></br>I'm currently enrolled in an intensive Full Stack Coding Bootcamp at UCLA Extension, a UX Design program through Udacity, and a Digital Product Management program through UVA Darden School of Business. My goal is to acquire the skills needed to manage the development and production process of polished, fully responsive and interactive digital products that drive user engagement.<br>
    </br><br></br>When I'm not working or trying to learn something new, I most recently can be found in my garden, cooking, or walking my dog around the neighborhood. Anxiously awaiting when I can travel abroad and go to concerts again!
    </p>
    </div>
  </section>
  );
}

export default About;