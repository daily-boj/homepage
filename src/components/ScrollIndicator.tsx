/* @jsx jsx */
import React, { FC, SVGAttributes } from 'react';
import { css, jsx, keyframes } from '@emotion/core';

const ScrollIndicator: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 22" {...props}>
    <rect
      x="1" y="1"
      width="40" height="20"
      rx="10"
      fill="transparent"
      strokeWidth="2" stroke="black"
    />
    <circle
      id="circle"
      cx="11" cy="11"
      r="5"
      css={css`
        animation: 1s ease-out 0.5s infinite ${keyframes`
          from {
            opacity: 1;
            transform: translateX(0);
          }

          to {
            opacity: 0;
            transform: translateX(8px);
          }
        `};
      `}
    />
    <path
      d="M52 16 L57 11 L52 6"
      fill="transparent"
      stroke="black" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

export default ScrollIndicator;