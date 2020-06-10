/* @jsx jsx */

import React, { FC, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import * as Vars from '../../styles/vars';

const Introduction = styled.div`
  display: inline-block;

  background-color: ${Vars.IntroductionBackground};
  color: ${Vars.introductionForeground};

  margin: 32px;

  @media screen and (max-width: 899px) {
    margin: 0;
    padding: 1rem 1rem;
  }
  @media screen and (min-width: 900px) {
    max-width: 768px;
    padding: 4rem 2rem;
  }
`;

const Catchphrase = styled.div`
  margin: 1.2rem;
  position: absolute;
  text-align: right;
  .line {
    display: inline-block;

    padding: 0.2rem 2rem;

    background-color: ${Vars.CatchphraseBackground};
    color: ${Vars.CatchphraseForeground};

    box-shadow: ${Vars.DropShadow};

    user-select: none;
  }
  br {
    line-height: 2em;
  }
  .highlight {
    font-weight: 700;
  }
  
  @media screen and (max-width: 899px) {
    font-size: 4vw;
    right: 0;
  }
  @media screen and (min-width: 900px) {
    font-size: 2.5rem;
    bottom: 6rem;
    right: 4rem;
  }
  @media screen and (max-height: 800px) {
    position: relative;
    bottom: 0;
    right: 0;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const IndexPage: FC = () => (
  <Fragment>
    <div css={css`
      position: relative;
      height: calc(100vh - 4rem);
    `}>
      <Introduction>
        데일리 백준은 알고리즘 문제 풀이를 하는 소모임입니다.
        <br />
        <br />
        {'매일매일 참가자들끼리 토론으로 문제를 선정하고, '}
        {'문제를 푸는 데에 어려움이 있다면 서로 질문을 나눕니다. '}
        {'코드를 보고 반례를 찾아주기도 하며, '}
        {'문제를 푸는 데에 필요한 알고리즘을 같이 배우기도 합니다.'}
        <br />
        <br />
        {'본 모임은 알고리즘 실력을 진일보시키는 것에 목적을 두고 있습니다. '}
        {'또한, 알고리즘 관련 자료를 공개해 지식을 나누는 데에도 뜻을 두고 있습니다. '}
        <br />
        <br />
        {'이 모임에서 지켜야 하는 규칙은 아주 간단합니다. '}
        {'매일 한 문제를 푸는 것뿐입니다. '}
      </Introduction>
      <Catchphrase>
        <span className="line">
          데일리&nbsp;백준으로
          {' '}
          <span className="highlight">
            하루에
          </span>
        </span>
        <br />
        <span className="line">
          적어도
          {' '}
          <span className="highlight">
            한&nbsp;문제
          </span>
          는 풀어봅시다
        </span>
      </Catchphrase>
    </div>
  </Fragment>
);

export default IndexPage;