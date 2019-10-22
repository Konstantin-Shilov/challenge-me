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
