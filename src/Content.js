import React from 'react';
import { withCookies } from 'react-cookie';

import Layout from 'layout';
import Pops from 'pages/Pops';
import MainSecond from 'pages/Best';

const Content = () => (
  <Layout>
    <Pops id="weekly" />
    <MainSecond id="other" />
  </Layout>
);

export default withCookies(Content);
