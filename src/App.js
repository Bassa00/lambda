import React, { Component } from 'react';
import MainMenu from './components/Menu';
import Banner from './components/Banner';
import AboutUs from './components/Aboutus';
import Slides from './components/Slides';
import WhatWeDo from './components/Whatwedo';
import OurWork from './components/Ourwork';
import Footer from './components/Footer';
import {Divider} from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div>
      
        <MainMenu />
        <Banner/> <br/>
        <AboutUs/>
        <Slides/>
        <WhatWeDo />
        <OurWork />
        <Divider hidden />
        <Footer/>
        
      </div>

    );
  } 
}

export default App;
