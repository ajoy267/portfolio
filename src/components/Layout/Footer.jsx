import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export default function Footer() {
  return (
    <footer>
      <h3>Contact</h3>
      <div>
        <a href="https://github.com/ajoy267" target="_blank">
          <img src={github} alt="github logo" className="h-24 w-24" />
        </a>
        <a href="https://www.linkedin.com/in/andrewjoy12/" target="_blank">
          <img src={linkedin} alt="linkedin logo" className="h-24 w-24" />
        </a>
      </div>
    </footer>
  );
}
