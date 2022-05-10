import React from 'react';
import github from '../../assets/github.png';
import pixl from '../../assets/pixl.png';
import sg from '../../assets/sg.png';
import vgr from '../../assets/vgr.png';
import yahfood from '../../assets/yahfood.png';

export default function Projects() {
  return (
    <section className="text-slate-300 my-4 border-t-4 border-slate-300">
      <h3 className="flex justify-center">Featured Projects</h3>
      <div className="flex flex-row flex-wrap justify-center">
        <div>
          <img src={pixl} alt="pixl project" className="h-24 w-24" />
          <a href="https://github.com/Pixil2/pixl2-frontend" target="_blank">
            <img src={github} alt="github logo" className="h-24 w-24" />
          </a>
        </div>
        <div>
          <img src={yahfood} alt="yahfood project" className="h-24 w-24" />
          <a href="https://github.com/Yah-food/Yahfood-final" target="_blank">
            <img src={github} alt="github logo" className="h-24 w-24" />
          </a>
        </div>
        <div>
          <img src={vgr} alt="vgr project" className="h-24 w-24" />
          <a href="https://github.com/video-game-roulette/vgr" target="_blank">
            <img src={github} alt="github logo" className="h-24 w-24" />
          </a>
        </div>
        <div>
          <img src={sg} alt="squid game project" className="h-24 w-24" />
          <a
            href="https://github.com/ajoy267/squid-game-project"
            target="_blank"
          >
            <img src={github} alt="github logo" className="h-24 w-24" />
          </a>
        </div>
      </div>
    </section>
  );
}
