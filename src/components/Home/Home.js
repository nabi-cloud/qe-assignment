import React from 'react';
import './Home.css';
// Images
import logo from './logo.jpg';
import explore from './explore.gif';
import join from './join.gif';

function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <img src={ logo } alt='Logo' className='logo' />
            <h1>Welcome to OneQuantum Philippines</h1>
            <p>Welcome to OneQuantum Philippines, your gateway to the forefront of quantum technology in the Philippines. We are committed to forging partnerships and fostering engagement in the dynamic world of quantum computing.</p>
            <a href='#about' target='_blank' className='button'>Learn More</a>
        </div>
        <div className='container'>
            <img src={ explore } alt='Icon' />
            <h2>Exploring Deep Tech Frontiers</h2>
            <p>At OneQuantum PH, we recognize the importance of exploring emerging technologies beyond quantum computing. We conduct thorough analyses of learning platforms and organizations offering services in deep tech domains, including Quantum Computing, Data & AI, and more.</p>
            <a href='#services' target='_blank' className='button'>Explore Our Programs</a>
        </div>
        <div className='container'>
            <img src={ join } alt='Icon' />
            <h2>Join Our Quantum Journey</h2>
            <p>Join us as we embark on a transformative journey into the world of quantum technology. Explore our engaging events, connect with like-minded individuals, and uncover the limitless possibilities of quantum computing.</p>
            <a href='#contact' target='_blank' className='button'>Connect With Us</a>
        </div>
    </div>
  );
};

export default Home;
