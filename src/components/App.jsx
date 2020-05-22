import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Results from './Results';
import Voting from './Voting';

export default class App extends React.Component {
  render() {
    return (<HashRouter>
      <Route path="/results" component={Results} />
      <Route path="/" component={Voting} />
    </HashRouter>);
  }
};