
// src/components/ThemeToggle.jsx
import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeToggle;

