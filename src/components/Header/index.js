import React from 'react';
import './index.css';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for theme switcher
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };
  handleLinkClick = () => {
    // Close the menu when a link is clicked
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;
    const { darkMode, toggleTheme } = this.props;

    return (
      <nav className={`${darkMode ? 'navbar2' : 'navbar1'} ${menuOpen ? 'open' : ''}`}>
        {/* Social Media Icons */}
        <div className="icons-container">
          <a href="https://www.linkedin.com/in/seereddisaimadhu/">
            <img
              src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993783/icons8-linkedin-48_cipj7u.png"
              alt="linkedin"
              className="icon-logo"
            />
          </a>
          <a href="https://github.com/madhuseereddi">
            <img
              src="https://res.cloudinary.com/dx97khgxd/image/upload/v1726993782/icons8-github-48_poymkw.png"
              alt="github"
              className="icon-logo"
            />
          </a>
        </div>

        {/* Resume Button */}

      
        {/* Hamburger Menu for Mobile */}
        <div className='calm'>
        <div className="hamburger-menu" onClick={this.toggleMenu}>
          <MdOutlineArrowDropDownCircle className="drop-down" />
        </div>


        {/* Navigation Links */}
        <div className={darkMode ? 'items-list2' : 'items-list1'}>
              <Link to="/" className='clickit' onClick={this.handleLinkClick}><div>Home</div></Link>
              <Link to="/about" className='clickit' onClick={this.handleLinkClick}><div>About</div></Link>
              <Link to="/projects" className='clickit' onClick={this.handleLinkClick}><div>Projects</div></Link>
              <Link to="/skills" className='clickit' onClick={this.handleLinkClick}><div>Skills</div></Link>
              <Link to="/feedback" className='clickit' onClick={this.handleLinkClick}><div>Feedback</div></Link>
            </div>
          

        {/* Download Resume Button */}
        <div className='mode'>
     
        <button onClick={toggleTheme} className={`theme-toggle-btn ${darkMode ? 'dark' : 'light'}`}>
  <div className="toggle-switch">
    <FaSun className="theme-icon sun-icon" />
    <FaMoon className="theme-icon moon-icon" />
    <div className="toggle-circle"></div>
  </div>
</button>
</div>
</div>

      </nav>
    );
  }
}

export default Header;
