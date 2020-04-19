import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <Link to="/">
          <p>COVID-19 Tracker</p>
        </Link>
        { /* <ul>
          <li>
            <Link to="/page-2/">Help</Link>
          </li>
        </ul> */ }
      </Container>
    </header>
  );
};

export default Header;
