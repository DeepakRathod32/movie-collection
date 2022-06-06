import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore}  from 'redux';

import movies from './reducers'
import './index.css';
import App from './components/App';

const store = createStore(movies);
console.log('store', store);
// console.log('before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman'}]
// })

// console.log('after state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


