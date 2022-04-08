import React from 'react';
import css from '../../assets/css.png';
import heroku from '../../assets/heroku.png';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import netlify from '../../assets/netlify.png';
import node from '../../assets/node.png';
import postgres from '../../assets/postgres.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind.png';
import vscode from '../../assets/vscode.png';

export default function Stacks() {
  return (
    <section className="text-slate-300 my-4 border-t-4 border-slate-300">
      <h4 className="flex justify-center">Tech Stack</h4>
      <div className="flex flex-row flex-wrap space-x-16 space-y-6">
        <img src={html} alt="html logo" className="h-24 w-24" />
        <img src={css} alt="Css logo" className="h-24 w-24" />
        <img src={javascript} alt="javascript logo" className="h-24 w-24" />
        <img src={react} alt="react logo" className="h-24 w-24" />
        <img src={tailwind} alt="tailwind logo" className="h-24 w-24" />
        <img src={node} alt="node logo" className="h-24 w-24" />
        <img src={tailwind} alt="tailwind logo" className="h-24 w-24" />
        <img src={vscode} alt="vscode logo" className="h-24 w-24" />
        <img src={netlify} alt="netlify logo" className="h-24 w-24" />
        <img src={postgres} alt="postgres logo" className="h-24 w-24" />
        <img src={heroku} alt="heroku logo" className="h-24 w-24" />
      </div>
    </section>
  );
}
