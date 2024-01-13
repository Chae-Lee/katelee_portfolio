/*[ ] Home:
This should be a welcome landing page that contains:
[ ] Your Name
[ ] A Headshot of you
[ ] Your brand statement
[ ] Some indication that this is your portfolio site */

import React from "react";
import profilePicture from "../assets/images/katelee_profilepic.jpg";

const Home = () => {
  return (
    <div>
      <img src={profilePicture} />
      <p>
        This is the Home Page where my profile picture and intro will display
      </p>
    </div>
  );
};

export default Home;
