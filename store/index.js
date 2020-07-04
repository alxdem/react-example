import { createStore } from 'redux';

import reducers from './reducers.js';
import initial from './initialState';

export const initStore = (initialState = initial) => {
  return createStore(reducers, initialState);
};
