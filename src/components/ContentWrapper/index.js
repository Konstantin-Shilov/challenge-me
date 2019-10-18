import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const wrapperStyle = css`
  display: flex;
  flex-flow: column;
`;

const ContentWrapper = styled.div`
  ${wrapperStyle};
`;

const Wrapper = ({ children, className }) => (
  <ContentWrapper className={className}>{children && children}</ContentWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
};

Wrapper.defaultProps = {
  children: [],
  className: '',
};

export default Wrapper;
