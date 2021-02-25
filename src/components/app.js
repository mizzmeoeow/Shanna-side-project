import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Shann's Side Project</h1>
        <h2>For Bottega</h2>
        <div>{moment().format()}</div>
      </div>
    );
  }
}
