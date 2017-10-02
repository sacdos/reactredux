import React, { Component } from 'react';
import Form from './form';
import Liste from './liste';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Liste />
      </div>
    );
  }
}
