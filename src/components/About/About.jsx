import React from 'react';
import headshot from '../../assets/headshot.png';

export default function About() {
  return (
    <section className="flex flex-col text-slate-300 my-4 border-t-4 border-slate-300">
      <h3 className="flex justify-center">About Me</h3>
      <div className="flex">
        <p className="flex mx-6">
          I'm a software engineer and an athlete. Athletics has been such a big
          part of my life since I was a kid and I love helping others get
          involved in sports. Sports have taught me some valuable skills that I
          use in my everyday life such as being strategic and having
          adaptability. My passion is to help make athletics more accessible to
          everyone and to use my skills as a software engineer to do that.
        </p>
        <img
          src={headshot}
          alt="Profile Picture"
          className="h-48 w-48 flex mx-8"
        />
      </div>
    </section>
  );
}
