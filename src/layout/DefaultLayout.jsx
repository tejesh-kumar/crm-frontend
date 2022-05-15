import React from 'react';
import PropTypes from 'prop-types';

import Header from './partials/Header.comp';
import Footer from './partials/Footer.comp';

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.instanceOf(Element).isRequired,
};

export default DefaultLayout;
