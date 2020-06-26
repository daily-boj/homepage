/* @jsx jsx */
import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { jsx } from '@emotion/core';

const MemberPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className="page" ref={ref}>
    This group contains a lot of goinmul
  </div>
);

export default forwardRef(MemberPage);