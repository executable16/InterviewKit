import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import App from './App'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))
/* createStore takes reducer, initialState and applyMiddleware() as parameters */

ReactDom.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

/* root is the 2nd argument to render and a reference to an existing DOM node inside of our HTML document */