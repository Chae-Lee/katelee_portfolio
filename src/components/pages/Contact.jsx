import React from "react";
import { useState } from "react";
import "./Contact.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      `Hello ${formData.firstName} ${formData.lastName}. Your message has been sent to Kate.`
    );
  };

  return (
    <div>
      <p></p>
    </div>
  );
};
