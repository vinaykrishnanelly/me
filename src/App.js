import './App.css';
import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import Home from './components/home'
import About from './components/about'
import Counter from './components/counter'
import Contact from './components/contact'
import Education from './components/education'
import Experience from './components/experience'
import Services from './components/services'
import Skills from './components/skills'

class App extends Component{
  render() {
    return (
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar></Sidebar>
                <div id="colorlib-main">
                  <Home></Home>
                  <About></About>
                    <Experience></Experience>
                    <Education></Education>
                    <Skills></Skills>
                  <Services></Services>
                  {/*<Counter></Counter>*/}
                  <Contact></Contact>
                </div>
          </div>
        </div>
    );
  }
}

export default App;
