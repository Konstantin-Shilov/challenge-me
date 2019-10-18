import { css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = css`
  ${emotionNormalize};

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
    background: #f0f2f5 !important;
  }

  body {
    min-width: 320px;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0 !important;
  }

  #root {
    height: 100%;
  }
`;
