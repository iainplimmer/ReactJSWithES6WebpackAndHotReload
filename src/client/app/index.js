import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

export default class App extends React.Component {
  render () {
    return <div>
        Getting started with React!! 
        <AwesomeComponent/>
      </div>;
  }
}

render(<App/>, document.getElementById('app'));