import { css } from '@emotion/core';
import * as Vars from './vars';

const StyleDefault = css`
:lang(ko) {
  word-break: keep-all;
}

body {
  background: ${Vars.Background};
  letter-spacing: -0.04em;
  font-size: 1.3rem;
}

html, body, #root {
  overflow: hidden;
}

#root {
  position: static;
  scroll-behavior: smooth;
}

code {
  background-color: ${Vars.CodeBackground};
  color: ${Vars.CodeForeground};
  padding: 0.2em 0.4em;
  border-radius: 0.4em;
}
`;

export default StyleDefault;