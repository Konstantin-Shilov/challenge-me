import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import PropTypes from 'prop-types';

import Layout from 'layout';
import Main from 'pages/Main';

// eslint-disable-next-line react/prefer-stateless-function
class Content extends Component {
  // componentDidMount() {
  // }

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Layout>
          <Main />
        </Layout>
      </Router>
    );
  }
}

Content.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withCookies(Content);
