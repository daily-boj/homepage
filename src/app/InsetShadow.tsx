/* @jsx jsx */

import React, { FC } from 'react';
import { jsx } from '@emotion/core';

export const FilterId = 'inset-shadow';

const InsetShadow: FC = () => (
  <filter id={FilterId} x="-10" y="-10" width="2048" height="2048" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix" />
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
    <feOffset dx="-10" dy="-10" />
    <feGaussianBlur stdDeviation="5" />
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
    <feOffset dx="15" dy="15" />
    <feGaussianBlur stdDeviation="5" />
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    <feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.682353 0 0 0 0 0.752941 0 0 0 0.2 0" />
    <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />
  </filter>
);

export default {
  FilterId,
  Element: InsetShadow,
};