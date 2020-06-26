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
  const [currentSectionIndex, setCurrentSectionIndex] = useState(determineSectionFromLocation(history?.location?.pathname));
  const [isAnimating, setAnimating] = useState(false);

  const sectionElements = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const currentSectionIndexRef = useRef<number>();
  const isAnimatingRef = useRef<boolean>();

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  useEffect(() => {
    isAnimatingRef.current = isAnimating;
  }, [isAnimating]);

  useEffect(() => {
    if (!history) {
      return;
    }
    history.listen((location) => {
      setCurrentSectionIndex(determineSectionFromLocation(location.pathname));
    });
  }, [history]);

  const listener = useCallback((event: WheelEvent): void => {
    const currentSectionIndex = currentSectionIndexRef.current;
    const isAnimating = isAnimatingRef.current;

    if (currentSectionIndex === undefined || isAnimating === undefined) {
      return;
    }

    const { deltaY } = event;
    const isUp = deltaY < 0;
    const isDown = deltaY > 0;

    if (!history) {
      return;
    }

    if (isAnimating) {
      return;
    }


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
    let newIndex: number | undefined = undefined;
    if (isUp && currentSectionIndex > 0) {
      newIndex = currentSectionIndex - 1;
    } else if (isDown && currentSectionIndex < Sections.length - 1) {
      newIndex = currentSectionIndex + 1;
    }

    if (newIndex !== undefined) {
      setAnimating(true);
      setCurrentSectionIndex(newIndex);
      history.push(Sections[newIndex]);
      setTimeout(() => {
        setAnimating(false);
      }, 500);
    }
  }, [history]);

  useEffect(() => {
    window.addEventListener('wheel', listener);

    return (): void => window.removeEventListener('wheel', listener);
  }, [listener]);

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
          }
          
          will-change: transform;
        `}
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
