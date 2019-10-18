import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

import { LayoutWrapper, LayoutContentWrapper } from './styled';

const Layout = ({ children, options }) => {
  const { needPadding, sidebarWidth } = options;

  return (
    <LayoutWrapper needPadding={needPadding}>
      <Header />
      <LayoutContentWrapper sidebarPadding={sidebarWidth}>
        {children}
        <Footer />
      </LayoutContentWrapper>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  options: PropTypes.shape({
    needPadding: PropTypes.bool,
    sidebarWidth: PropTypes.number,
  }),
};

Layout.defaultProps = {
  children: [],
  options: {
    needPadding: false,
    sidebarWidth: 200,
  },
};

export default Layout;
