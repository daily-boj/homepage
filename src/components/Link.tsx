import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Icon from './Icon';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

type LinkBase = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export interface ExternalLinkProps extends LinkBase {
  to: string;
  children: ReactNode;
}

const Base = css`
  text-decoration: underline;
`;
const BaseAnchor = styled.a`
  ${Base}
`;
const BaseRouterLink = styled(RouterLink)`
  ${Base}
`;

const External: FC<ExternalLinkProps> = ({ to, children, ...props }) => {
  let icon = <Icon kind='material' value='launch' />;
  try {
    const url = new URL(to);
    switch (url.host) {
      case 'solved.ac': {
        icon = <Icon kind='solved-ac' />;
        break;
      }
      case 'acmicpc.net':
      case 'www.acmicpc.net':
      case 'noj.am':
      case 'boj.kr': {
        icon = <Icon kind='boj' />;
        break;
      }
      case 'github.com': {
        icon = <Icon kind='devicons' value={'\ue609'} />;
        break;
      }
      default: {
        icon = <Icon kind='material' value='launch' />;
      }
    }
  } catch { /* ignore error */ }

  return (
    <BaseAnchor className="link external" href={to} {...props} >
      {icon}
      {children}
    </BaseAnchor>
  );
};

export interface InternalLinkProps extends LinkBase {
  to: string;
  children: ReactNode;
}

const Internal: FC<InternalLinkProps> = ({ to, children, ...props }) => (
  <BaseRouterLink to={to} className="link internal" {...props}>
    {children}
  </BaseRouterLink>
);

const Link = {
  External,
  Internal,
};

export default Link;