import React from 'react';
import PropTypes from 'prop-types';
import { menu } from 'config';

import { HeaderWrapper, HeaderTitle, HeaderMenu, MenuLink } from './styled';

const Header = (props) => {
  const { go, activePanel } = props;

  return (
    <HeaderWrapper>
      <HeaderTitle>Challenges</HeaderTitle>
      <HeaderMenu>
        {menu.map((item) => (
          <MenuLink
            key={item.title}
            onClick={go}
            data-to={item.id}
            active={activePanel === item.id}
          >
            {item.title}
          </MenuLink>
        ))}
      </HeaderMenu>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  go: PropTypes.func.isRequired,
  activePanel: PropTypes.string.isRequired,
};

export default Header;
