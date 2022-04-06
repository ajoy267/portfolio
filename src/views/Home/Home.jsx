import React from 'react';
import About from '../../components/About/About';
import Intro from '../../components/Intro/Intro';
import Stacks from '../../components/Stacks/Stacks';

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Stacks />
    </div>
  );
}
