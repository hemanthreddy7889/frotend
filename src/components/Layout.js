// Layout.js
import React from 'react';
import HomeButton from './HomeButton';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <HomeButton />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
