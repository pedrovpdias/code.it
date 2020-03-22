import React from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Services from './Services';
import SocialMedias from './SocialMedias';
import Techs from './Techs';
import Contacts from './Contacts';

function App() {
  return (
    <div id="app">
      <Home />
      <About />
      <Services />
      <SocialMedias />
      <Techs />
      <Contacts />
      <footer id="footer">
        Copyright © 2020
      </footer>      
    </div>
  );
}

export default App;
