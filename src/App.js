import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Feedback from './components/Feedback';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { darkMode } = this.state;

    // Background images
    const lightBgImage = "https://res.cloudinary.com/dx97khgxd/image/upload/v1715927029/geometric-abstract-background-with-connected-dots-lines_1409-1866_z3ghpi.avif";
    const darkBgImage = "https://res.cloudinary.com/dx97khgxd/image/upload/v1727841791/image_kwzyq3.jpg";

    // Set background image based on the theme
    const backgroundImage = darkMode ? darkBgImage : lightBgImage;

    return (
      <div className="full-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Router>
          <Header darkMode={darkMode} toggleTheme={this.toggleTheme} />
  
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/Madhu-portfolio" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} />} />
            <Route path="/projects" element={<Projects darkMode={darkMode} />} />
            <Route path="/skills" element={<Skills darkMode={darkMode} />} />
            <Route path="/feedback" element={<Feedback darkMode={darkMode} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
