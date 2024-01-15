import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  // const [contactData, setContactData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   message: "",
  // });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    alert(
      `Hi, thank you for your message! Your message has been sent to Kate.`
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "portfolioEmail", form.current, "7fvY5r6FdXsRN29I4")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="formContainer">
        <p className="formTitle">Contact Me</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="form"
            name="name"
            type="text"
            placeholder="Enter your full name"
            onChange={handleInputChange}
          ></input>
          <input
            className="form"
            type="email"
            name="email"
            placeholder="Your Email Address"
            onChange={handleInputChange}
          />
          <textarea
            className="form"
            name="message"
            placeholder="Type your message here"
            onChange={handleInputChange}
          />
          <input
            className="formButton"
            type="submit"
            value="Send"
            onClick={handleFormSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
