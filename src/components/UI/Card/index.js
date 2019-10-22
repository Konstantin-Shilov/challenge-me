import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, CardInfo, CardIcon, CardText } from './styled';

const bg = ['E3A4FD', 'FFAADC', 'C2B3FF'];

const Card = ({ className, zIndex, icon, text, bgIndex }) => (
  <CardWrapper className={className} zIndex={zIndex} bg={bg[bgIndex]}>
    <CardInfo>
      <CardIcon>{icon}</CardIcon>
      <CardText>{text}</CardText>
    </CardInfo>
  </CardWrapper>
);

Card.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  zIndex: PropTypes.number,
  bgIndex: PropTypes.number,
};

Card.defaultProps = {
  className: '',
  text: '',
  icon: '',
  zIndex: 1,
  bgIndex: 0,
};

export default Card;
