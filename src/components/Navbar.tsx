/* @jsx jsx */

import React, { FC } from 'react';
import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import * as Vars from '../styles/vars';
import Logo from './Logo';

const NavbarHeight = '3rem';

const navbarBaseStyle = css`
  height: ${NavbarHeight};
  margin: 0.4rem 0;
`;

const NavbarHeader = styled.header`
  background-color: ${Vars.NavbarBackground};
  color: ${Vars.NavbarForeground};
  font-size: 1.1rem;

  ${navbarBaseStyle};
  width: max-content;

  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);

  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  grid-gap: min(max(6vw, 1.2em), 3rem);

  padding: 0 min(max(4vw, 1em), 4rem);
  border-radius: 1.5rem;

  z-index: 100;

  user-select: none;

`;
const NavbarFake = styled.div`
  ${navbarBaseStyle};
`;
const LogoBaseStyled = styled(Logo.Base)`
  height: 2.5rem;
  max-width: 4rem;
  vertical-align: middle;
`;
const LogoUseStyled = styled(Logo.Use)`
  fill: white;
  stroke: white;
`;

const BrandNavLink = styled(NavLink)`
  &.active {
    -webkit-filter: drop-shadow( 0px 0px 6px rgba(255, 255, 255, .8));
    filter: drop-shadow( 0px 0px 6px rgba(255, 255, 255, .8));
}
`;
const OtherNavLink = styled(NavLink)`
  &.active {
    color: ${Vars.MenuSelected};
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }
`;

const NavbarBase: FC = () => (
  <NavbarHeader>
    <BrandNavLink to="/">
      <LogoBaseStyled>
        <LogoUseStyled />
      </LogoBaseStyled>
    </BrandNavLink>

    <OtherNavLink id="nav-about" to="/about" exact>
      소개
    </OtherNavLink>
    <OtherNavLink id="nav-newbie" to="/newbie">
      신입 가이드
    </OtherNavLink>
    <OtherNavLink id="nav-member" to="/member">
      멤버
    </OtherNavLink>
    <OtherNavLink id="nav-calendar" to="/calendar">
      달력
    </OtherNavLink>
  </NavbarHeader>
);


export default {
  Base: NavbarBase,
  Fake: NavbarFake,
  height: NavbarHeight,
};