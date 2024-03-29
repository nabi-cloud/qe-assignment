import React from 'react';
// Images
import services from './services.gif';
import education from './education.gif';
import mentor from './mentor.gif';
import org from './org.gif';
// Animation
import useIntersectionObserver from '../../animation/intersectionObserver';
import '../../animation/intersectionObserver.css';

function Services() {
  useIntersectionObserver('.hidden');

  return (
    <div className='parentContainer'>
      <div className='container hidden'>
        <img src={ services } alt='Icon' />
        <h1>Our Services</h1>
        <p>Welcome to OneQuantum Philippines Services page. We are committed to providing comprehensive services tailored to meet the diverse needs of our community. Explore our offerings below:</p>
      </div>
      <div className='container hidden'>
          <img src={ education } alt='Icon' />
          <h2>Quantum Education and Workshops</h2>
          <p>Empower yourself with knowledge through our Quantum Education and Workshops program. Our expert-led workshops cover a wide range of topics, from Quantum Computing fundamentals to advanced quantum technologies. Whether you're a student, educator, or industry professional, our workshops provide valuable insights and practical skills to navigate the quantum landscape.</p>
      </div>
      <div className='container hidden'>
          <img src={ mentor } alt='Icon' />
          <h2>Professional Mentoring and Career Development</h2>
          <p>Unlock your full potential with our Professional Mentoring and Career Development program. Our experienced mentors offer personalized guidance and support to help you excel in the field of quantum technology. Whether you're seeking career advice, exploring new opportunities, or looking to enhance your skills, our mentoring program is tailored to meet your unique needs.</p>
      </div>
      <div className='container hidden'>
          <img src={ org } alt='Icon' />
          <h2>Industry Partnerships and Collaborations</h2>
          <p>Forge strategic partnerships and collaborations with OneQuantum Philippines. Our Industry Partnerships and Collaborations program connects you with leading organizations, research institutions, and industry players in the quantum ecosystem. Collaborate on groundbreaking projects, explore new opportunities, and drive innovation across industries with OneQuantum Philippines as your trusted partner.</p>
      </div>
    </div>
  );
};

export default Services;
