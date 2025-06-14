import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar: React.FC = () => {
  const handleHomeClick = () => {
    console.log("Home clicked");
    // Add specific logic for Home
  };

  const handleQuizClick = () => {
    console.log("Quiz clicked");
    // Add specific logic for Quiz
    
  };

  const handleLeaderboardClick = () => {
    console.log("Leaderboard clicked");
    // Add specific logic for Leaderboard
  };

  const handleAboutClick = () => {
    console.log("About clicked");
    // Add specific logic for About
  };

  return (
    <nav className="navbar">
      <div className="logo">🌟 MyWebsite</div>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link" onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/quiz" className="quiz_navbar_link" onClick={handleQuizClick}>
            Quiz
            <div className="dropdown-content">
              <Link to="/quiz/1">Create Room</Link>
              <Link to="/quiz/2">Join Room</Link>
              <Link to="/quiz/3">Room Info</Link>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="nav-link" onClick={handleLeaderboardClick}>
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={handleAboutClick}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
