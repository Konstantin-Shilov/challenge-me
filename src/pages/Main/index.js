import React from 'react';
import Helmet from 'react-helmet';

import 'public/images/common/close.svg';

import { MainWrapper, TitleWrapper, IconWrapper } from './styled';

const Main = () => (
  <MainWrapper>
    <Helmet>
      <title>{process.env.REACT_APP_PROJECT_NAME}</title>
    </Helmet>
    <TitleWrapper>
      <IconWrapper glyph="close" />
      <h1>{process.env.REACT_APP_PROJECT_NAME}</h1>
    </TitleWrapper>
  </MainWrapper>
);

export default Main;
