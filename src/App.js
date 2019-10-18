import React from 'react';
import { CookiesProvider, withCookies } from 'react-cookie';
import { Provider } from 'react-redux';

import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';

import { globalStyles } from 'styles/base';

import history from 'lib/history';
import { syncLocationWithStore } from '@redux/reducers/location';

import Content from './Content';

import configureStore from '@redux';

const store = configureStore();
syncLocationWithStore(store);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CookiesProvider>
        <Global styles={globalStyles} />
        <Content history={history} />
      </CookiesProvider>
    </ThemeProvider>
  </Provider>
);

export default withCookies(App);
