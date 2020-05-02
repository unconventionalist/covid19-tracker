import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/stylesheets/application.scss';

import Header from 'components/Header';
import favicon from 'assets/images/favicon.png';

const Layout = ({ children, pageName }) => {
  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <link rel="icon" href={favicon} />
        <title>Covid-19 Tracker</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <main>{ children }</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
