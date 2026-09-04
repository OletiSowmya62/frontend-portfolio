import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact" data-aos="zoom-in-up">
      <div className="container">
        <div className="section-heading">
          <h2>Get In Touch</h2>
          <p>I&apos;m open to frontend opportunities, collaborations, and product-driven roles.</p>
        </div>

        <div className="contact-wrap">
          <div className="contact-info">
            <h4>Let&apos;s Connect</h4>

            <p>
              <FaEnvelope /> sowmyaoleti62@gmail.com
            </p>

            <p>
              <FaPhone /> +91 9182399717
            </p>

            <p>
              <FaMapMarkerAlt /> Hyderabad, India
            </p>

            <div className="social">
              <a href="https://www.linkedin.com/in/sowmyaoleti/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>

              <a href="https://github.com/OletiSowmya62" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;