/* @jsx jsx */
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { css, jsx } from '@emotion/core';

const MemberPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div
    className="page"
    ref={ref}
    css={css`
      background: linear-gradient(-90deg, #FFFFFF 0%, #F5F5F5 100%);
    `}
  >
    This group contains a lot of goinmul
  </div>
);

export default forwardRef(MemberPage);