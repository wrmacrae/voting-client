import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action_creators'
import remoteActionMidleware from './remote_action_middleware'
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

require('./style.css');

const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);
const store = applyMiddleware(remoteActionMidleware(socket))(createStore)(reducer);

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
