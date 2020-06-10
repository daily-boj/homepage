import React, { FC, ReactNode } from 'react';
import { jsx } from '@emotion/core';
import { Link as RouterLink } from "react-router-dom";
import Icon from './Icon';

type LinkBase = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export interface ExternalLinkProps extends LinkBase {
  to: string,
  children: ReactNode,
}

const External: FC<ExternalLinkProps> = ({ to, children, ...props }) => {
  let icon = <Icon kind='material' value='launch' />;
  try {
    const url = new URL(to);
    switch (url.host) {
      case "solved.ac": {
        icon = <Icon kind='solved-ac' />
        break;
      }
      case "acmicpc.net":
      case "www.acmicpc.net":
      case "noj.am":
      case "boj.kr": {
        icon = <Icon kind='boj' />
        break;
      }
      case "github.com": {
        icon = <Icon kind='devicons' value={'\ue609'} />
        break;
      }
      default: {
        icon = <Icon kind='material' value='launch' />;
      }
    }
  } catch { /* ignore error */ }

  return (
    <a className="link external" href={to} {...props} >
      {icon}
      {children}
    </a >
  )
}

export interface InternalLinkProps extends LinkBase {
  to: string,
  children: ReactNode,
}

const Internal: FC<InternalLinkProps> = ({ to, children, ...props }) => (
  <RouterLink to={to} className="link internal" {...props}>
    {children}
  </RouterLink>
);

const Link = {
  External,
  Internal,
}

export default Link;