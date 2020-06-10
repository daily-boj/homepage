import { hsl, hsla } from 'polished';

// navbar
export const NavbarBackground = hsl(230, 0.05, 0.90);
export const NavbarBackgroundHover = hsl(230, 0.05, 1.00);
export const NavbarBackgroundSelected = hsl(230, 0.05, 0.80);

export const MenuSelected = hsl(230, 0.60, 0.60);

// index page
export const IntroductionBackground = hsl(0, 0.10, 0.95);
export const introductionForeground = hsl(230, 0.10, 0.05);

export const CatchphraseBackground = hsl(0, 0.10, 0.95);
export const CatchphraseForeground = hsl(230, 0.10, 0.05);

// global
export const CodeBackground = hsl(230, 0.15, 0.65);
export const CodeForeground = hsl(40, 0.75, 0.75);

export const DropShadow = `2px 4px 32px ${hsla(0, 0.05, 0.05, 0.3)}`;
export const InnerShadow = `
  inset 2px 2px 7px ${hsla(0, 0.05, 0.05, 0.2)},
  inset -2px -2px 7px ${hsla(0, 0.05, 0.05, 0.2)};
`;

export const Link = hsl(230, 0.85, 0.75);
export const LinkVisited = hsl(270, 0.85, 0.75);

export const TransitionTiming = `ease-out`;
export const TransitionDuration = `0.2s`;

export const Background = hsl(230, 0.25, 0.80);

