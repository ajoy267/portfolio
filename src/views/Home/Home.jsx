import React from 'react';
import About from '../../components/About/About';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Layout/Footer';
import Stacks from '../../components/Stacks/Stacks';

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Stacks />
      <Footer />
    </div>
  );
}
