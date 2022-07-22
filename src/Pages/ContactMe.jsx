import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Contact.css";
import Leaf from "../Assets/Pictures/palmcolo.png";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1up6mh",
        "template_yn96jt7",
        form.current,
        "M35A3MY3wP7r1stgU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container-contacts">
      <div className="top-part">
        <img src={Leaf} alt="leaf" className="leaf-img" />
        <div className="title-block">
          <h2 className="title-bio">contact me</h2>
          <div className="border-bottom" />
        </div>
      </div>
      <div className="block-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Firstname"
            name="user_firstname"
            className="simple-form"
          />
          <input
            type="text"
            placeholder="Lastname"
            name="user_lastname"
            className="simple-form"
          />
          <input
            type="text"
            placeholder="Email"
            name="user_mail"
            className="simple-form"
          />
          <textarea
            placeholder="Write your message here..."
            name="user_message"
            className="content-form"
          />
          <button type="submit" value="send" className="button-form">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
