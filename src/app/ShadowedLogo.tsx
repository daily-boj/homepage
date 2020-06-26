/* @jsx jsx */

import React, { FC } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import Logo from '../components/Logo';
import InsetShadow from './InsetShadow';
import RasterizeSvg from '../components/RasterizeSvg';

const LogoBaseStyled = styled(Logo.Base)`
  width: 100vw;
`;
const LogoUseStyled = styled(Logo.Use)`
  fill: #f5f5f5;
  stroke: #f5f5f5;
`;

const ShadowedLogo: FC = (props) => (
  <RasterizeSvg {...props}>
    <LogoBaseStyled>
      <InsetShadow.Element />
      <LogoUseStyled filter={`url(#${InsetShadow.FilterId})`} />
    </LogoBaseStyled>
  </RasterizeSvg>
);

export default ShadowedLogo;