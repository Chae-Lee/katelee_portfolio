import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      `Hello ${contactData.firstName} ${contactData.lastName}. Your message has been sent to Kate.`
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
        <label>Message</label>
        <textarea name="message" />
        <input
          className="form"
          type="submit"
          value="Send"
          placeholder="Type your message here"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
  // Different format form 
  // return (
  //   <div className="formContainer">
  //     <p className="formTitle">Contact Me</p>
  //     <form ref={form} onSubmit={sendEmail}>
  //       <input
  //         className="form"
  //         value={contactData.firstName}
  //         name="name"
  //         onChange={handleInputChange}
  //         type="text"
  //         placeholder="Enter your full name"
  //       ></input>
  //       <input
  //         className="form"
  //         value={contactData.lastName}
  //         name="lastName"
  //         onChange={handleInputChange}
  //         type="text"
  //         placeholder="Last Name"
  //       ></input>
  //       <input
  //         className="form"
  //         value={contactData.email}
  //         name="email"
  //         onChange={handleInputChange}
  //         type="text"
  //         placeholder="Your Email Address"
  //       ></input>
  //       <input
  //         className="form"
  //         value={contactData.message}
  //         name="message"
  //         onChange={handleInputChange}
  //         type="text"
  //         placeholder="Type your message here"
  //       ></input>
  //       <button className="button" type="button" onClick={handleFormSubmit}>
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  );
};

export default Contact;
