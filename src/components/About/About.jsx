import React from 'react';
import headshot from '../../assets/headshot.png';

export default function About() {
  return (
    <div>
      <h3>About Me</h3>
      <p>Info</p>
      <img src={headshot} alt="Profile Picture" />
    </div>
  );
}
