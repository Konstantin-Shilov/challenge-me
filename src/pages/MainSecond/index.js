import React from 'react';
import PropTypes from 'prop-types';

import ViewPanel from 'components/ViewPanel';

const MainSecond = ({ id }) => <ViewPanel id={id}>Test</ViewPanel>;

MainSecond.propTypes = {
  id: PropTypes.string,
};

MainSecond.defaultProps = {
  id: '',
};

export default MainSecond;
