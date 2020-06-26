/* @jsx jsx */

import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Highlight = styled.span`
  font-weight: 450;
`;

const AboutPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div
    className="page"
    ref={ref}
    css={css`
      z-index: 10;

      height: 100%;

      font-weight: 300;
      line-height: 108.5%;
      letter-spacing: -0.1vw;

      display: flex;
      flex-direction: column;
      justify-content: center;
      
      @media screen and (min-width: 768px) {
        font-size: 2vw;
      }

      @media screen and (min-width: 468px) and (max-width: 767px) {
        font-size: 3vw;
      }
      
      @media screen and (max-width: 467px) {
        font-size: 4vw;
      }
    `}
  >
    <span css={css`
      text-align: right;
      margin-right: 4vw;
    `}>
      <p>
        <Highlight>데일리 백준</Highlight>은 <Highlight>알고리즘 문제 풀이</Highlight>를 하는 <Highlight>소모임</Highlight>입니다.
      </p>
      <p>
        매일매일 참가자들끼리 <Highlight>토론으로 문제를 선정하고,</Highlight>
        <br />
        문제를 푸는 데에 어려움이 있다면 <Highlight>서로 질문을 나눕니다.</Highlight>
      </p>
      <p>
        <Highlight>이 모임에서 지켜야 하는 규칙은 아주 간단합니다.</Highlight>
        <br />
        <span css={css`font-weight: 500;`}>매일 한 문제를 푸는 것뿐입니다.</span>
      </p>
    </span>
  </div>
);

export default forwardRef(AboutPage);