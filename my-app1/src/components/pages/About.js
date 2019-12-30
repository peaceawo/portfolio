import React from "react";

export const About = () => {
  return (
    <div className="main">
      <div className="card">
        <img
          src="../img/profile.jpeg"
          className="card-img-top"
          alt="profile pic"
        />
        <div className="card-body">
          <p className="card-text">
            Full stack web developer with experience in Mathematics and
            Education. Recently acquired a certificate from University of Denver
            Full-Stack coding program. Develop full stack applications with
            newly developed skills in React, Javascript, CSS, HTML, jQuery.
            Learned to use databases as MySQL and MongoDB, server side
            developments as Node.js, Express, MERN Stack, and deployment on
            Heroku and Git. As a collaborative problem solver, I worked with a
            team to develop a MERN app that allows the user to post their travel
            experiences and donate BitCoin to different charities around the
            world. My passion for continuous improvement combined with my
            resilience and the need to improve user experience in technology
            makes me excited to join an ambitious team in the future.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
