import styled from '@emotion/styled';
import Icon from 'components/Icon';

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled(Icon)`
  width: 200px;
  height: auto;

  svg {
    fill: #484c54;
  }
`;
