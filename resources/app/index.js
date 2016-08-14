import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

export default class App extends React.Component {
  render () {
    return <div>
        Getting started with React, Webpack & ES6!!!!!!! 
        <AwesomeComponent/>
      </div>;
  }

} 

render(<App/>, document.getElementById('app'));