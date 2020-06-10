/* @jsx jsx */

import React, { FC, Fragment } from 'react';
import { jsx } from '@emotion/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import * as Pages from './pages';
import { PUBLIC_URL } from './constants';

const App: FC = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/branding">
          <Pages.Branding />
        </Route>
        <Route exact path="/calendar">
          <Pages.Calendar />
        </Route>
        <Route exact path="/member">
          <Pages.Member />
        </Route>
        <Route exact path="/newbie">
          <Pages.Newbie />
        </Route>
        <Route exact path="/stat/solve">
          <Pages.StatSolve />
        </Route>
        <Route exact path="/stat/tier">
          <Pages.StatTier />
        </Route>
        <Route exact path="/">
          <Pages.Index />
        </Route>
        <Route>
          <Pages.ErrorPageNotFound />
        </Route>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default App;
