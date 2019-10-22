import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.card.height}px;
  padding: 140px 22px 0;
  background: #${({ bg }) => bg};
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 0 0 ${({ theme }) => theme.card.borderRadius}px;
  margin-bottom: ${({ theme }) => theme.card.bottomMargin}px;
  z-index: ${({ zIndex }) => zIndex};
`;

export const CardInfo = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardText = styled.p`
  position: relative;
  margin: 0;
  font-size: 19px;
  line-height: 27px;
`;

export const CardIcon = styled.span`
  position: relative;
  width: 50px;
  min-width: 50px;
  margin-right: 22px;
  font-size: 50px;
  text-align: center;
  text-shadow: 0 22px 10px rgba(0, 0, 0, 0.18);
`;
