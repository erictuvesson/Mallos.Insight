import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import { NavigationProvider } from '@atlaskit/navigation-next';

import App from './App';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Router>
        <NavigationProvider>
          <App onNavResize={this.onNavResize}>
            <Route path="/" component={HomePage} />
            <Route path="/issues" component={SettingsPage} />
          </App>
        </NavigationProvider>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
