import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSubmitted(true);
    })
    .catch((err) => {
      setLoading(false);
      setError('Failed to transmit message. Please try again or email directly.');
      console.error('EmailJS Error:', err);
    });
  };

  return (
    <div className="contact-page section-container">
      <header className="page-header">
        <span className="section-kicker">GET IN TOUCH</span>
        <h1>Initiate a Project</h1>
        <p>Have an engineering project or contract in mind? Let's discuss requirements.</p>
      </header>

      <div className="contact-form-container">
        {submitted ? (
          <div className="contact-success">
            <h3>Message Transmitted 🎉</h3>
            <p>Thank you for reaching out. The proposal has been delivered directly to my inbox.</p>
          </div>
        ) : (
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" name="user_name" id="user_name" required placeholder="Your Name" />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" name="user_email" id="user_email" required placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Overview</label>
              <textarea name="message" id="message" rows="5" required placeholder="Describe project goals, timeline, and scope..."></textarea>
            </div>

            {error && <p className="contact-error">{error}</p>}

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? 'Transmitting...' : 'Send Proposal →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;