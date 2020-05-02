import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <h3>COVID-19 Tracker</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;
