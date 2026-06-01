import "./Home.css"
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xkoeazod");
  if (state.succeeded) {
      return <div className="form-response"><p>Thanks for reaching out!</p></div>;
  }
  return (
    <div className="contact-form">
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="name-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email Address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /> 
      <textarea
        id="message"
        name="message"
        rows='6'
        placeholder="Write a message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> 
      <button type="submit" className="submit-button" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function Contact() {
  return (
    <main>
      <h1>Get in Touch!</h1>
      <div className="contactbackground">
      <div className="contact-info">
      If you are interested in connecting with us or learning more about WWW.CODE, 
        please fill out the form below and we will get back to you ASAP!
      </div>
      <ContactForm />
      </div>
    </main>
  )
}

export default Contact