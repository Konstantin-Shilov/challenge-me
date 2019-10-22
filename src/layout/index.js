import React from 'react';
import PropTypes from 'prop-types';
import vkConnect from '@vkontakte/vk-connect';
import { ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Header from './Header';
// import Footer from './Footer';

import { LayoutWrapper, ViewVKWrapper } from './styled';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'weekly',
      history: ['weekly'],
    };
  }

  go = (e) => {
    this.goForward(e.currentTarget.dataset.to);
  };

  goBack = () => {
    const { history } = this.state;
    const newHistory = [...history];
    newHistory.pop();
    const activePanel = newHistory[newHistory.length - 1];
    if (activePanel === 'weekly') {
      vkConnect.send('VKWebAppDisableSwipeBack');
    }
    this.setState({ history: newHistory, activePanel });
  };

  goForward = (activeP) => {
    const { history, activePanel } = this.state;
    const newHistory = [...history];
    newHistory.push(activeP);
    if (activePanel === 'weekly') {
      vkConnect.send('VKWebAppEnableSwipeBack');
    }
    this.setState({ history: newHistory, activePanel: activeP });
  };

  render() {
    const { children } = this.props;
    const { activePanel, history } = this.state;

    return (
      <ConfigProvider isWebView>
        <LayoutWrapper>
          <Header go={this.go} activePanel={activePanel} />
          <ViewVKWrapper onSwipeBack={this.goBack} history={history} activePanel={activePanel}>
            {children}
          </ViewVKWrapper>
        </LayoutWrapper>
      </ConfigProvider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
