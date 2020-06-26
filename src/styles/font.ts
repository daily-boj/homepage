import { css } from '@emotion/core';
import '@ibm/plex/css/ibm-plex.min.css';
import IBMPlexSansKoreanExtraLight from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-ExtraLight.woff2';
import IBMPlexSansKoreanLight from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-Light.woff2';
import IBMPlexSansKoreanRegular from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-Regular.woff2';
import IBMPlexSansKoreanText from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-Text.woff2';
import IBMPlexSansKoreanMedium from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-Medium.woff2';
import IBMPlexSansKoreanBold from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-Bold.woff2';
import IBMPlexSansKoreanSemiBold from '@ibm/plex/IBM-Plex-Sans-KR/fonts/complete/woff2/unhinted/IBMPlexSansKR-SemiBold.woff2';

const StyleFont = css`
@font-face {
    font-family: 'IBM Plex Sans KR';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Sans ExtraLight'), local('IBMPlexSans-ExtraLight'), url(${IBMPlexSansKoreanExtraLight}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Sans Light'), local('IBMPlexSans-Light'), url(${IBMPlexSansKoreanLight}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'), local('IBMPlexSans'), url(${IBMPlexSansKoreanRegular}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Sans Text'), local('IBMPlexSans-Text'), url(${IBMPlexSansKoreanText}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Sans Medium'), local('IBMPlexSans-Medium'), url(${IBMPlexSansKoreanMedium}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Sans SemiBold'), local('IBMPlexSans-SemiBold'), url(${IBMPlexSansKoreanSemiBold}) format('woff2');
}
@font-face {
    font-family: IBM Plex Sans KR;
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'), url(${IBMPlexSansKoreanBold}) format('woff2');
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'IBM Plex Sans KR', sans-serif;
  font-display: swap;
}
`;

export default StyleFont;