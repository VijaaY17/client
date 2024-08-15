import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import {thunk} from 'redux-thunk'
import reducers from './reducers'
// import { UseDispatch } from 'react-redux'
// import { useEffect } from 'react'
import './index.css'

const store = createStore(reducers,compose(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))