import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import { Panel } from '@vkontakte/vkui';

const StyledPanel = styled(Panel)`
  &.Panel {
    .Panel__in {
      padding-top: ${({ theme }) => theme.header.height}px;
    }
  }
`;

const ViewPanel = ({ id, children }) => <StyledPanel id={id}>{children}</StyledPanel>;

ViewPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  id: PropTypes.string,
};

ViewPanel.defaultProps = {
  children: [],
  id: '',
};

export default ViewPanel;
