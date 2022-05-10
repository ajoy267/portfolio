import React from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

export default function Footer() {
  return (
    <footer className="text-slate-300 my-4 border-t-4 border-slate-300">
      <h3>Contact Me</h3>
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
