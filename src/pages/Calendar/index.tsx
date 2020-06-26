/* @jsx jsx */

import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { jsx } from '@emotion/core';

const CalendarPage: ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className="page" ref={ref}>
    Calendar! Core feature of daily boj homepage
  </div>
);

export default forwardRef(CalendarPage);