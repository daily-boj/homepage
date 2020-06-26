import React, { FC, SVGAttributes } from 'react';
import { asset } from '../constants';

const Base: FC<Exclude<SVGAttributes<SVGSVGElement>, 'viewBox'>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="2048" height="2048" {...props} />
);

const Use: FC<Exclude<SVGAttributes<SVGUseElement>, 'href'>> = (props) => (
  <use type="symbol" xlinkHref={asset('/images/logo-symbol.svg#daily-boj-logo')} {...props} />
);

const Logo = {
  Base,
  Use,
};

export default Logo;