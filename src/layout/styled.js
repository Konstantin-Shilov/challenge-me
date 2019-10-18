import styled from '@emotion/styled';
import { below } from 'styles/media';
import ContentWrapper from 'components/ContentWrapper';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: ${({ needPadding, theme }) => (needPadding ? theme.header.desktopHeight : 0)}px;
  ${below.m3} {
    padding-top: ${({ needPadding, theme }) => (needPadding ? theme.header.mobileHeight : 0)}px;
  }
  color: ${({ theme }) => theme.mainColor};
  box-sizing: border-box;

  .page {
  }

  .page-enter {
    opacity: 0;
  }

  .page-enter-active {
    opacity: 1;
    transition: opacity 1300ms;
  }

  .page-exit {
    opacity: 1;
  }

  .page-exit-active {
    opacity: 0;
    transition: opacity 1300ms;
  }
`;

export const LayoutContentWrapper = styled(ContentWrapper)`
  max-width: 100%;
  min-height: 100vh;
  padding-top: 50px;
  flex-grow: 1;
  padding-left: ${({ sidebarPadding }) => sidebarPadding}px;
`;
