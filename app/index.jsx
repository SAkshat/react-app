import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Evernote from './evernote.jsx';
import Notebooks from './notebooks.jsx'
import Notebook from './notebook.jsx'
import Notes from './notes.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Evernote />
      </div>
    );
  }
}
render(
  <Router history={browserHistory}>
    <Route path="/" component={Evernote}>
      <IndexRoute component={Notes} />
      <Route path="notebooks" component={Notebooks}/>
      <Route path="notebooks/:notebook_id" component={Notebook}/>
      <Route path="notes" component={Notes}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
