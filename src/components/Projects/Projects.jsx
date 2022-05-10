import React from 'react';
import github from '../../assets/github.png';
import pixl from '../../assets/pixl.png';
import sg from '../../assets/sg.png';
import vgr from '../../assets/vgr.png';
import yahfood from '../../assets/yahfood.png';

export default function Projects() {
  return (
    <section>
      <h3>Featured Projects</h3>
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
        <a href="https://github.com/ajoy267/squid-game-project" target="_blank">
          <img src={github} alt="github logo" className="h-24 w-24" />
        </a>
      </div>
    </section>
  );
}
