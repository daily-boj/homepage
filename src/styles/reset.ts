import { css } from '@emotion/core';

const StyleReset = css`
html, body, #root {
    padding: 0;
    margin: 0;

    min-height: 100vh;
    max-width: 100vw; 

    box-sizing: border-box;
}

a {
    color: unset;
    text-decoration: unset;
}
`;

export default StyleReset;