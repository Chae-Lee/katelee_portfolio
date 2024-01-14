/*[ ] Home:
This should be a welcome landing page that contains:
[ ] Your Name
[ ] A Headshot of you
[ ] Your brand statement
[ ] Some indication that this is your portfolio site */

import React from "react";
import profilePicture from "../../assets/images/katelee_profilepic.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <img src={profilePicture} id="profilePhoto" alt="Profile Picture" />
      <div>
        <p id="name"> Kate C Lee </p>
        <p id="personalIntro">Frontend Web Developer</p>
      </div>
    </div>
  );
};

export default Home;
