import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";

/**
 * ContactForm component allows users to submit their name, email, and message
 * through a simple form with three input fields. The data is passed to a Button
 * component that handles sending the form values via email.
 *
 * @component
 * @example
 * return (
 *   <ContactForm />
 * )
 */
export default function ContactForm() {
  // Declare state variables for name, email, and message using useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to update the appropriate field value based on input
  const updateField = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div className="contact-form-container">
      {/* Form heading */}
      <h2>Може да се свържете с нас и чрез формата за контакти</h2>

      {/* Name input field */}
      <Field
        placeholder={"Вашето име"}
        class={"field"}
        label={"Name: "}
        onChange={updateField(setName)} // Updates name state
        value={name}
      />

      {/* Email input field */}
      <Field
        placeholder={"Вашия имейл"}
        class={"field"}
        label={"Email: "}
        onChange={updateField(setEmail)} // Updates email state
        value={email}
      />

      {/* Message input field */}
      <Field
        placeholder={"Запишете вашето съобщение"}
        class={"message"}
        label={"Message: "}
        onChange={updateField(setMessage)} // Updates message state
        textarea={true} // Render as a textarea instead of input
        value={message}
        required={"required"} // Makes the field required
      />

      {/* Button component handles submission */}
      <Button
        email="canoncop2@abv.bg"
        obfuscate={true} // Optionally obfuscates the email for spam protection
        formValues={{ name, email, message }} // Passes form values as props
      />
    </div>
  );
}
