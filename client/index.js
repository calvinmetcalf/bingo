import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux';
import reducers from './reducers';
import {render} from 'react-dom';
import DevTools from './dev-tools';
import Bingo from './components/bingo';
import App from './app';

let store = compose(DevTools.instrument())(createStore)(reducers);

render((
  <Provider store={store}>
    <div>
    <App>
      <Bingo/>
    </App>
      {process.env.NODE_ENV === 'production' ? <div /> : <DevTools />}
    </div>
  </Provider>
), document.getElementById('app'));
