import React from 'react';
// Images
import contact from './contact.gif';

function Contact() {
  return (
    <div className='container'>
        <img src={ contact } alt='Icon' />
        <h1>Contact Us</h1>
        <p>We value your feedback, inquiries, and partnership opportunities. Please feel free to reach out to us using the form below!</p>
    </div>
  );
};

export default Contact;
