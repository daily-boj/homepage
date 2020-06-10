/* @jsx jsx */

import React, { FC, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import { NavLink } from 'react-router-dom';
import { asset } from '../constants';
import styled from '@emotion/styled/macro';
import * as Vars from '../styles/vars';

const CollapseButton = styled.input`
  position: absolute;
  visibility: hidden;
`;
const NavbarHeader = styled.header`
  background-color: ${Vars.NavbarBackground};
  font-size: 1.5rem;

  width: 100%;
  height: 3rem;

  position: fixed;
  top: 0;

  display: grid;

  z-index: 100;

  user-select: none;

  a { 
    height: 100%;
  }

  a, nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  nav {
    padding: 0 1rem;
    height: 100%;

    transition: ${Vars.TransitionTiming} background-color, box-shadow ${Vars.TransitionDuration};
  }
  
  a:not(.active) > nav:hover {
    background-color: ${Vars.NavbarBackgroundHover};
    box-shadow: ${Vars.DropShadow};
  }

  a.active > nav {
    background-color: ${Vars.NavbarBackgroundSelected};
    color: ${Vars.MenuSelected};
    border-color: ${Vars.MenuSelected};
    box-shadow: ${Vars.InnerShadow};
  }
  
	grid-template-columns: auto 1fr;
	grid-template-rows: 3rem auto;

  @media screen and (min-width: 600px) {
    grid-template-areas:
        'brand nav'
        'brand nav';

    nav {
      border-bottom: 4px solid transparent;
    }
  }
  @media screen and (max-width: 599px) {
    ${CollapseButton}:not(:checked) ~ & {
      height: calc(3rem * 4);
    }
    ${CollapseButton}:checked ~ & {
      grid-template-areas:
          'brand toggler'
          'brand toggler';
    }
    ${CollapseButton}:not(:checked) ~ & {
      grid-template-areas:
          'brand toggler'
          '  nav     nav';
    }
    
    nav {
      width: 100%;
      border-left: 4px solid transparent;
    }
  }
`;
const NavbarFake = styled.div`
  height: 3rem;

  @media screen and (max-width: 599px) {
    ${CollapseButton}:not(:checked) ~ & {
      height: calc(3rem * 4);
    }
  }
`;
const Brand = styled.span`
  margin: 0 1rem;
  grid-area: brand;
`;
const Logo = styled.object`
  height: 1em;
  max-width: 1em;
  vertical-align: middle;
  margin-right: 0.2rem;
`;
const Collapse = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  grid-area: nav;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;
    align-items: stretch;
    transition: ${Vars.TransitionTiming} height ${Vars.TransitionDuration};
    
    ${CollapseButton}:checked ~ ${NavbarHeader} & {
      display: none;
    }
  }
`;
const TogglerView = styled.label`
  grid-area: toggler;
  margin-left: auto;
  cursor: pointer;

  &::before {
    font-family: 'Material Icons Outlined';
    font-feature-settings: 'liga';
    letter-spacing: normal;
    line-height: 1;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 3rem;
    height: 3rem;
    
    ${CollapseButton}:checked ~ ${NavbarHeader} & {
      content: 'menu';
    }
    ${CollapseButton}:not(:checked) ~ ${NavbarHeader} & {
      content: 'close';
    }
  }
  
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const Navbar: FC = () => (
  <Fragment>
    <CollapseButton type="checkbox" id="collapse-button" />
    <NavbarHeader>
      <NavLink to="/">
        <Brand>
          <Logo type="image/svg+xml" data={asset('images/logo.svg')}>
            Daily BOJ Logo
          </Logo>
          <span>
            <span css={css`font-weight: 500;`}>{'Daily'}</span>&nbsp;
            <span css={css`font-weight: 700;`}>{'BOJ'}</span>
          </span>
        </Brand>
      </NavLink>

      <TogglerView htmlFor="collapse-button" />

      <Collapse>
        <NavLink to="/newbie">
          <nav id="nav-newbie">
            신입 가이드
          </nav>
        </NavLink>
        <NavLink to="/member">
          <nav id="nav-member">
            멤버
          </nav>
        </NavLink>
        <NavLink to="/calendar">
          <nav id="nav-calendar" >
            달력
          </nav>
        </NavLink>
      </Collapse>
    </NavbarHeader>
    <NavbarFake />
  </Fragment>
);


export default Navbar;