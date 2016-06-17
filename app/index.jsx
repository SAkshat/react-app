import React from 'react';
import {render} from 'react-dom';
import Evernote from './evernote.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <Evernote />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'))
