/* @jsx jsx */

import React, { FC, useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import { BrowserRouter, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import * as Pages from '../pages';
import { PUBLIC_URL } from '../constants';
import ShadowedLogo from './ShadowedLogo';
import ScrollIndicator from '../components/ScrollIndicator';

const Sections = ['/', '/about', '/newbie', '/member', '/calendar'];

function determineSectionFromLocation(location: string | undefined): number {
  const index = Sections.indexOf(location ?? '');
  if (index === -1) {
    return 0;
  } else {
    return index;
  }
}

declare const root: HTMLDivElement;

const App: FC = () => {
  const history = useHistory();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(determineSectionFromLocation(history.location.pathname));

  const sectionElements = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const currentSectionIndexRef = useRef<number>(currentSectionIndex);
  const isAnimatingRef = useRef<boolean>(false);
  const inner = useRef<HTMLDivElement>(null);

  const updateSectionIndex = useCallback((newIndex: number) => {
    isAnimatingRef.current = true;
    setCurrentSectionIndex(newIndex);
    history.push(Sections[newIndex]);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  useEffect(() => {
    history.listen((location) => {
      setCurrentSectionIndex(determineSectionFromLocation(location.pathname));
    });
  }, []);

  const wheelListener = useCallback((event: WheelEvent): void => {
    const currentSectionIndex = currentSectionIndexRef.current;
    if (isAnimatingRef.current) {
      return;
    }

    const { deltaY } = event;
    const isUp = deltaY < 0;
    const isDown = deltaY > 0;

    const currentSection = sectionElements[currentSectionIndex].current;
    if (!currentSection) {
      return;
    }

    if (currentSection.scrollHeight !== currentSection.clientHeight) {
      const scrollUpLimitReached = isUp && currentSection.scrollTop === 0;
      const scrollDownLimitReached = isDown && Math.round(currentSection.scrollTop + currentSection.clientHeight + 1) >= currentSection.scrollHeight;
      if (!scrollUpLimitReached && !scrollDownLimitReached) {
        return;
      }
    }

    event.preventDefault();
    if (isUp && currentSectionIndex > 0) {
      updateSectionIndex(currentSectionIndex - 1);
    } else if (isDown && currentSectionIndex < Sections.length - 1) {
      updateSectionIndex(currentSectionIndex + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', wheelListener);

    return (): void => window.removeEventListener('wheel', wheelListener);
  }, [wheelListener]);
  
  const keyboardListener = useCallback((event: KeyboardEvent): void => {
    const currentSectionIndex = currentSectionIndexRef.current;


    if (event.key === 'ArrowLeft' && currentSectionIndex !== 0) {
      updateSectionIndex(currentSectionIndex - 1);
      return;
    }

    if (event.key === 'ArrowRight' && currentSectionIndex !== Sections.length - 1) {
      updateSectionIndex(currentSectionIndex + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keyboardListener);

    return (): void => window.removeEventListener('keydown', keyboardListener);
  }, [keyboardListener]);

  const touchStartTimeRef = useRef<number>(Date.now());
  const touchStartRef = useRef<[number, number]>([0, 0]);
  const lastVectorRef = useRef<[number, number]>([0, 0]);
  const touchStartListener = useCallback((event: TouchEvent): void => {
    lastVectorRef.current = [0, 0];
    if (event.touches.length !== 1) {
      return;
    }
    touchStartRef.current = [event.touches[0].pageX, event.touches[0].pageY];
    touchStartTimeRef.current = Date.now();
  }, []);

  const touchMoveListener = useCallback((event: TouchEvent): void => {
    if (event.touches.length !== 1) {
      return;
    }
    const { pageX, pageY } = event.touches[0];
    const [x, y] = touchStartRef.current;
    const [vx, vy] = [pageX - x, pageY - y];
    lastVectorRef.current = [vx, vy];
    if (inner.current) {
      const angle = Math.abs(Math.atan2(vx, vy) * 180 / Math.PI);
      const isHorizontal = Math.abs(90 - angle) <= 30;
      inner.current.style.left = `${isHorizontal ? vx : 0}px`;
      inner.current.style.transition = 'transform 1s ease';
    }
  }, []);

  const touchEndListener = useCallback((_event: TouchEvent): void => {
    const [vx, vy] = lastVectorRef.current;
    const angle = Math.abs(Math.atan2(vx, vy) * 180 / Math.PI);
    const isHorizontal = Math.abs(90 - angle) <= 30;
    const timeUsed = (Date.now() - touchStartTimeRef.current, Math.min(500)) / 1000;
    const pageMovement = Math.abs(vx / window.innerWidth) >= 0.2 * timeUsed && isHorizontal ? Math.sign(vx) : 0;
    updateSectionIndex(currentSectionIndexRef.current - pageMovement);
    if (inner.current) {
      inner.current.style.left = '0';
      inner.current.style.transition = 'transform 1s ease, left 1s ease';
    }
  }, []);

  useEffect(() => {
    document.addEventListener('touchstart', touchStartListener);
    document.addEventListener('touchmove', touchMoveListener);
    document.addEventListener('touchend', touchEndListener);

    return (): void => {
      document.removeEventListener('touchstart', touchStartListener);
      document.removeEventListener('touchmove', touchMoveListener);
      document.removeEventListener('touchend', touchEndListener);
    };
  }, []);

  return (
    <Fragment>
      <Navbar.Base />
      <div
        css={css`
          position: relative;

          display: flex;
          flex-direction: row;
          
          transition: transform 1s ease;
          height: 100vh;

          .page {
            min-width: 100vw;
            max-width: 100vw;
            min-height: 100vh;
            overflow: auto;
          }
          
          will-change: left, transform;
        `}
        ref={inner}
        style={{
          transform: `translate3d(-${100 * currentSectionIndex}vw, 0px, 0px)`
        }}
      >
        <Pages.Index ref={sectionElements[0]} />
        <ShadowedLogo
          css={css`
            position: absolute;
            left: 50vw;

            width: 100vw;
            height: 100vw;

            @media screen and (min-width: 479px) {
              top: 50%;
              transform: translate(0, -50%);
            }

            @media screen and (max-width: 478px) {
              top: 0;
            }
          `}
        />
        <Pages.About ref={sectionElements[1]} />
        <Pages.Newbie ref={sectionElements[2]} />
        <Pages.Member ref={sectionElements[3]} />
        <Pages.Calendar ref={sectionElements[4]} />
        <Pages.Branding />
        <Pages.StatSolve />
        <Pages.StatTier />
      </div>
      <ScrollIndicator
        css={css`
          margin: auto 0;
          position: absolute;
          bottom: 2rem;
          height: 2rem;
          left: 50%;
          transform: translateX(-50%);
        `}
      />
    </Fragment>
  );
};

const RoutedApp: FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

export default RoutedApp;
