import styled from '@emotion/styled';
import { View } from '@vkontakte/vkui';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: ${({ theme }) => theme.mainColor};
  box-sizing: border-box;
`;

export const ViewVKWrapper = styled(View)`
  .View__header {
    display: none;
  }
`;
