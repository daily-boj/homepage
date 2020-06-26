import { css } from '@emotion/core';

const StyleReset = css`
html, body {
  max-width: 100vw; 
}
html, body, #root {
  padding: 0;
  margin: 0;

  min-height: 100vh;

  box-sizing: border-box;
}

a {
  color: unset;
  text-decoration: unset;
}

object {
  pointer-events: none;;
}
`;

export default StyleReset;