import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/leaflet/leaflet.css';
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
        <link rel="stylesheet" href="leaflet-src.js.map" />
        { /* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/> */ }
        { /* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet-src.js" /> */ }

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
