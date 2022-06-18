import './App.css';
import ProfilePictue from './assets/ProfilePicture.png';
import logo from './assets/logotype-WHITE.png';

import eroforestiero from './assets/projects/ero-forestiero.webp';

import { LinkedinBoxFill, GithubFill, Envelope } from 'akar-icons';

import { useState, useEffect } from 'react';

import WebProject from './components/WebProject/WebProject';
import OtherProject from './components/OtherProject/OtherProject';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (!document.getElementById('web-project').hasChildNodes()) { document.getElementById('web-project').innerHTML = '<p style="padding: 10px">No projects yet</p>' }
    if (!document.getElementById('other-project').hasChildNodes()) { document.getElementById('other-project').innerHTML = '<p style="padding: 10px">No projects yet</p>' }
  }, []);

  return (
    <>
      <header id='home'>
        <span className={`hidden-menu ${isMenuVisible ? '' : 'hidden'}`} id='email-action'>
          <h2>Choose an action:</h2>
          <button onClick={() => navigator.clipboard.writeText('andrea.artuso.business@gmail.com')}>Copy email address</button>
          <a href='mailto:andrea.artuso.business@gmail.com'>Send me an email</a>

          <button onClick={() => setIsMenuVisible(!isMenuVisible)} className='close-button'>Close menu</button>
        </span>

        <div id='profile'>
          <img src={ProfilePictue} alt='Profile' className='profile-picture' />

          <div className='social-container'>
            <a href='https://www.linkedin.com/in/andrea-artuso/' target='_blank' rel='noopener noreferrer' className='social-icon'> <LinkedinBoxFill strokeWidth={2} size={19} /> </a>
            <a href='https://github.com/andrea-artuso' target='_blank' rel='noopener noreferrer' className='social-icon'> <GithubFill strokeWidth={2} size={19} /> </a>
            <button onClick={() => setIsMenuVisible(!isMenuVisible)} className='social-icon'> <Envelope strokeWidth={2} size={19} /> </button>
          </div>

        </div>

        <div id='info'>
          <h1>Andrea Artuso</h1>
          <div className='bio'>
            <p>💻 <span>Frontend web developer</span></p>
            <p>🇮🇹 <span>Based in Piedmont, Italy</span></p>
          </div>

          <p className='description'>
          I am Andrea and I'm a junior frontend web developer based in Italy.
          I started my journey in IT when I was in the middle school and I started to learn web development with HTML and CSS.
          After a couple of year, I started to learn JavaScript, ReactJS and C/C++ languages.
          After finishing High School I want to enroll Computer Science class at the University.
          I describe myself as a creative thinker and a problem solver, I challenge myself with side projects and I love to work in team.
          </p>

        </div>

        <div id='resume'>
          <p className='title'><strong>Resume</strong></p>
          <p>
            <strong>Schools:</strong>
            <ul className='resume-list'>
              <li>ITT G. Fauser (Novara) | 2019-2024</li>
              <li>Middle School (Varallo) | 2016-2019</li>
            </ul>
            <br />
            <strong>Work experience:</strong>
            <ul className='resume-list'>
              <li>Stagist at Hal Service | summer 2022</li>
            </ul>
          </p>

        {/*<a href='' download={true}>Download my CV</a>*/}
        </div>
      </header>

      <main>
        <h1>Projects</h1>

        <section id='website-projects'>
          <h2>Websites</h2>

          <div className='grid' id='web-project'>
            <WebProject imgUrl={eroforestiero} title='Ero Forestiero' year={2021} description='Ero Forestiero è un’associazione senza scopo di lucro, apartitica e apolitica che svolge attività formative a favore dell’integrazione sociale delle persone di origine non italiana presenti sul territorio di Vigevano, ponendo particolare attenzione alla tutela della loro identità culturale e religiosa.' links={['https://www.eroforestiero.org/', 'https://github.com/Coding-Bunker/Ero-Forestiero']} />
          </div>

        </section>

        <section id='other-projects'>
          <h2>Other projects</h2>

          <div className='grid' id='other-project'> 
          </div>
        </section>

      </main>

      <footer>
        <div><img src={logo} alt='logo' /></div>

        <p>© Andrea Artuso - 2022</p>

        <div><a href='/#'>Scroll to top</a></div>
      </footer>
    </>
  );
}

export default App;
