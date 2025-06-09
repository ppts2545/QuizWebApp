
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"; // Assuming you have a CSS file for additional styles

type NavItem = {
    name: string;
    path: string;
}

const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'About', path: '/about' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌟 MyWebsite</div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} >
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;