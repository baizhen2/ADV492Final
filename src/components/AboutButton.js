import React from 'react';
import '../css/AboutButton.css';

const AboutButton = ({onClick}) => {

  return (
    <button className='about-button' onClick={onClick}>About</button>
  );
};

export default AboutButton;