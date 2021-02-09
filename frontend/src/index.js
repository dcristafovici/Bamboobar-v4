import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";

import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import {loadState, saveState} from './localStorage'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
store.subscribe(() => {
  saveState({
    cart: store.getState().asideReducer.cart,
    address: store.getState().addressReducer
  })


})


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
