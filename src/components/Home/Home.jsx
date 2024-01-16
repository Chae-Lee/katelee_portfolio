import React from "react";
import profilePicture from "../../../public/images/katelee_profilepic.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div id="homeContainer">
        <img src={profilePicture} id="profilePhoto" alt="Profile Picture" />
        <p id="name"> Kate C Lee </p>
        <p id="personalIntro">Frontend Web Developer</p>
      </div>
    </div>
  );
};

export default Home;
