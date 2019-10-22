import React from 'react';
import PropTypes from 'prop-types';

import ViewPanel from 'components/ViewPanel';
import Card from 'components/UI/Card';

import best from 'config/best';

const Best = ({ id }) => {
  let bgInd = 0;

  return (
    <ViewPanel id={id}>
      {best.map((item, index) => {
        const { length } = best;
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
            icon={item.emoji}
            text={item.text}
            bgIndex={bgIndex}
          />
        );
      })}
    </ViewPanel>
  );
};

Best.propTypes = {
  id: PropTypes.string,
};

Best.defaultProps = {
  id: '',
};

export default Best;
