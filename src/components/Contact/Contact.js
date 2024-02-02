import React, { useState } from 'react';
import './Contact.css';
// Images
import contact from './contact.gif';

function Contact() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  // State setter when Name input has been filled out
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // State setter when Email input has been filled out
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // State setter when Message input has been filled out
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Actions to do when submitting the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any action with the form
    console.log([name, email, message]);
    // Reset fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contactContainer'>
        <img src={ contact } alt='Icon' />
        <h1>Contact Us</h1>
        <p>We value your feedback, inquiries, and partnership opportunities. Please feel free to reach out to us using the form below!</p>
        <form onSubmit={handleSubmit} id="contactForm" >
            <div className='formContainer'>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder='Full Name'
                value={ name }
                onChange={ handleNameChange }
                required
            />
            </div>
            <div className='formContainer'>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='What is your best email?'
                value={ email }
                onChange={ handleEmailChange }
                required
            />
            </div>
            <div className='formContainer'>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                placeholder='Write your message here'
                value={ message }
                onChange={ handleMessageChange }
                style={{ resize: 'none', height: '200px' }}
                required
            ></textarea>
            </div>
            <div>
            <button className='formButton' type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
};

export default Contact;
