import React from 'react';

import { Copyright, FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper>
    <Copyright>
      {`IQOption © ${new Date().getFullYear()} Created by ${process.env.REACT_APP_TEAM_NAME}`}
    </Copyright>
  </FooterWrapper>
);

export default Footer;
