import React from 'react';
// Images
import about from './about.gif';
import vision from './vision.gif';
import mission from './mission.gif';

function AboutUs() {
  return (
    <div>
      <div className='container'>
        <img src={ about } alt='Icon' />
        <h1>About OneQuantum Philippines</h1>
        <p>Welcome to OneQuantum Philippines, a driving force in the global quantum technology landscape. Our mission is to spearhead humanity's transition into the quantum era by fostering inclusivity, empowerment, and innovation.</p>
      </div>
      <div className='container'>
        <img src={ vision } alt='Icon' />
        <h2>Our Vision</h2>
        <p>At OneQuantum Philippines, our vision is clear: to be a global force for good in Quantum Tech. We believe in a future where quantum technology serves as a catalyst for positive change, empowering individuals and organizations to thrive in the quantum era.</p>
      </div>
      <div className='container'>
        <img src={ mission } alt='Icon' />
        <h2>Our Mission</h2>
        <p>Our mission is to realize our vision through strategic initiatives that empower and inspire. We provide a vibrant global community with local chapters, offering a platform for collaboration, networking, and knowledge-sharing. Our mentors provide guidance, support, and insights to help navigate the complexities of the quantum landscape.</p>
      </div>
    </div>
  );
};

export default AboutUs;
