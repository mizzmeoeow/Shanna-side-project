import React, { Component } from 'react';
import moment from "moment";
import Navigation from './navigation';
import PortfolioContainer from './new-container';
import NavigationContainer from './navigation/navigation-container';
import Search from './search';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Shanna's Side Project</h1>
        <h2>For Bottega</h2>
          <Navigation />
          <PortfolioContainer />
          <Search />
        <div>{moment().format()}</div>
      </div>
    );
  }
}
