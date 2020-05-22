import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = ['Frozen', 'Coco'];
  
const router = <HashRouter component={App}>
  <div>
    <Route path="/results" component={Results} />
    <Route path="/" component={Voting} />
  </div>
</HashRouter>;
  
ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
