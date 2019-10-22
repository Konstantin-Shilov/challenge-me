import React from 'react';
import PropTypes from 'prop-types';

import { IconWrapper } from './styled';

const Icon = (props) => {
  const { children, className } = props;
  return (
    <IconWrapper className={className} {...props}>
      {children}
    </IconWrapper>
  );
};

Icon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  children: [],
  className: '',
};

export default Icon;
