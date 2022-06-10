import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import './index.css';
import App from './components/App';

// function logger(obj, next, action)
// logger(obj)(next)(action)
// const logger = function ({dispatch, getState}){
//   return function (next){
//     return function (action){
//       //middleware code
//       console.log('ACTION TYPE = ', action.type);
//       next(action)
//     }
//   }
// }

// this is a way to write above code in short form using arrow function / curring method
const logger = ({dispatch, getState}) => (next) => (action) => {
  // logger code
  if(typeof action !== 'function'){
    console.log('ACTION TYPE = ', action.type);
  }
  next(action)
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   // logger code
//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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


