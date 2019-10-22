import React from 'react';
import PropTypes from 'prop-types';

import ViewPanel from 'components/ViewPanel';
import Card from 'components/UI/Card';

import pops from 'config/pops';

const Pops = ({ id }) => {
  let bgInd = 0;

  return (
    <ViewPanel id={id}>
      {pops.map((pop, index) => {
        const { length } = pops;
        const bgIndex = bgInd;

        if (bgInd === 2) {
          bgInd = 0;
        } else {
          bgInd += 1;
        }

        return (
          <Card
            key={length - index}
            zIndex={length - index}
            icon={pop.emoji}
            text={pop.text}
            bgIndex={bgIndex}
          />
        );
      })}
    </ViewPanel>
  );
};

Pops.propTypes = {
  id: PropTypes.string,
};

Pops.defaultProps = {
  id: '',
};

export default Pops;
