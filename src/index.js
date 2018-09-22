import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from "./App";

import { getQuoteContent } from './reducers'

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = createStore(getQuoteContent, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root"));
