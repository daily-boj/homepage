import { css } from '@emotion/core';
import { asset } from '../constants';

const StyleFont = css`
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Thin.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 100;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Light.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 300;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Regular.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 400;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Medium.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 500;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Bold.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 700;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-Black.woff2')}) format('woff2');
    font-style: normal;
    font-weight: 900;
}

@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-ThinItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 100;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-LightItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 300;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-RegularItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 400;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-MediumItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 500;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-BoldItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 700;
}
@font-face {
    font-family: Metropolis;
    src: url(${asset('fonts/metropolis/Metropolis-BlackItalic.woff2')}) format('woff2');
    font-style: italic;
    font-weight: 900;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

html {
    font-family: -apple-system, BlinkMacSystemFont, Metropolis, Noto Sans KR, sans-serif;
}
`;

export default StyleFont;