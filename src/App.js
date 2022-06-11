import './App.css';
import ProfilePictue from './assets/ProfilePicture.png';
import logo from './assets/logotype-WHITE.png';

import eroforestiero from './assets/projects/ero-forestiero.webp';

import { LinkedinBoxFill, GithubFill, Envelope } from 'akar-icons';

import { useState } from 'react';

import WebProject from './components/WebProject/WebProject';
import OtherProject from './components/OtherProject/OtherProject';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <header id='home'>
        <span className={`hidden-menu ${isMenuVisible ? '' : 'hidden'}`} id='email-action'>
          <h2>Choose an action:</h2>
          <button onClick={() => navigator.clipboard.writeText('andrea.artuso.business@gmail.com')}>Copy email address</button>
          <a href='mailto:andrea.artuso.business@gmail.com'>Send me and email</a>

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

        </div>

        <div id='resume'>
          <p className='title'><strong>Resume</strong></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Lorem ipsum dolor sit amet.</p>

        <a href='' download={true}>Download my CV</a>
        </div>
      </header>

      <main>
        <h1>Projects</h1>

        <section id='website-projects'>
          <h2>Websites</h2>

          <div className='grid'>
            <WebProject imgUrl={eroforestiero} title='Ero Forestiero' year={2021} description='Ero Forestiero è un’associazione senza scopo di lucro, apartitica e apolitica che svolge attività formative a favore dell’integrazione sociale delle persone di origine non italiana presenti sul territorio di Vigevano, ponendo particolare attenzione alla tutela della loro identità culturale e religiosa.' links={['https://www.eroforestiero.org/', 'https://github.com/Coding-Bunker/Ero-Forestiero']} />
          </div>

        </section>

        <section id='other-projects'>
          <h2>Other projects</h2>

          <div className='grid'>
            <OtherProject imgUrl={eroforestiero} title='Project 1' year={2020} role='Frontend developer' url='https://www.google.it' />
          </div>
        </section>

      </main>

      <footer>
        <div><img src={logo} alt='logo' /></div>

        <p>© Andrea Artuso - 2022</p>

        <div><a href='#home'>Scroll to top</a></div>
      </footer>
    </>
  );
}

export default App;
