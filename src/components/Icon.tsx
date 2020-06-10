/* @jsx jsx */

import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import { asset } from '../constants';
import { css } from '@emotion/core';

export type IconKind = 'solved-ac' | 'boj' | 'material' | 'devicons';

export interface IconProps {
  kind: IconKind;
  value?: string;
}

const icon = css`
  height: 1em;
  max-width: 1em;
  vertical-align: middle;
  text-decoration: none;
  display: inline-block;
  pointer-events: none;
`;
const material = css`
  font-family: 'Material Icons Outlined';
  font-feature-settings: 'liga';
  letter-spacing: normal;
  line-height: 1;
`;

const Icon: FC<IconProps> = ({ kind, value }) => {
  if (kind === 'solved-ac') {
    return (
      <object css={icon} type="image/svg+xml" data="https://static.solved.ac/logo.svg">
        Solved AC Icon
      </object>
    );
  } else if (kind === 'boj') {
    return (
      <object css={icon} type="image/svg+xml" data={asset('images/baekjoon-square.svg')}>
        Baekjoon Online Judge Icon
      </object>
    );
  } else if (kind === 'material') {
    return (
      <span css={[icon, material]}>
        {value}
      </span>
    );
  } else if (kind === 'devicons') {
    return (
      <span css={[icon]} className="devicons">
        {value}
      </span>
    );
  }
  return null;
};

export default Icon;