import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* In a real app, you would use a routing library like React Router */}
      <a href="/">Home</a>
      <a href="/dashboard">Dashboard</a>
      <a href="/settings">Settings</a>
    </nav>
  );
};

export default Navbar;
