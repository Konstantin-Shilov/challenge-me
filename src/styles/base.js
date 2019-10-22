import { css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const context = require.context('fonts');

const getFonts = (familyName, fontName, ext) => context(`./${familyName}/${fontName}.${ext}`);

const fontFace = (familyName, fontName, fontWeight) => css`
  @font-face {
    font-family: ${familyName};
    src: url(${getFonts(familyName, fontName, 'ttf')}) format('truetype');
    font-weight: ${fontWeight};
    font-style: normal;
  }
`;

export const globalStyles = css`
  ${emotionNormalize};

  * {
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    max-width: 100vw;
    font-family: GoogleSans, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 400;
    background: #333232;
    overflow-x: hidden;
  }

  body[scheme='client_light'],
  body[scheme='client_dark'] {
    --background_page: #333232;
  }

  #root {
    height: 100%;
  }

  ${fontFace('GoogleSans', 'GoogleSans-Regular', 400)};
  ${fontFace('GoogleSans', 'GoogleSans-Medium', 500)};
  ${fontFace('GoogleSans', 'GoogleSans-Bold', 700)};
  ${fontFace('AvenyT', 'AvenyT-SemiBold', 600)};
  ${fontFace('AvenyT', 'AvenyT-Bold', 700)};
`;
