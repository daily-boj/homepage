/* @jsx jsx */

import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Highlight = styled.span`
  font-weight: 450;
`;

const IndexPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div
    className="page"
    ref={ref}
    css={css`
      height: 100%;

      background: linear-gradient(90deg, #FFFFFF 0%, #F5F5F5 100%);

      font-weight: 300;
      font-size: 4vw;
      line-height: 108.5%;
      letter-spacing: -0.065em;

      display: flex;
      flex-direction: column;
      justify-content: center;
      
      @media screen and (min-width: 768px) {
        font-size: 4vw;
      }

      @media screen and (min-width: 468px) and (max-width: 767px) {
        font-size: 6vw;
      }
      
      @media screen and (max-width: 467px) {
        font-size: 8vw;
      }
    `}
  >
    <span css={css`
      z-index: 10;
      
      margin-left: 4vw;
    `}>
      <Highlight>데일리 백준</Highlight>으로<br />
      <Highlight>하루</Highlight>에 적어도 <Highlight>한 문제</Highlight>는<br />
      풀어봅시다
    </span>
  </div>
);

export default forwardRef(IndexPage);