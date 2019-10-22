import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 170px;
  padding: 69px 48px 0;
  border-radius: 0 0 0 80px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);
  background: #ffffff;
`;

export const HeaderTitle = styled.h1`
  font-family: AvenyT;
  font-weight: 700;
  font-size: 36px;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 48px;
`;

export const MenuLink = styled.a`
  position: relative;
  font-family: AvenyT;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 20px;
  margin-right: 50px;
  padding-bottom: 14px;
  color: #000000;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: #000000;
    text-decoration: none;

    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6px;
    background: #000;
    border-radius: 100px 100px 0 0;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: 0.3s;
  }
`;
