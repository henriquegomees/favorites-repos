import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import promise from 'redux-promise'
import Thunk from 'redux-thunk'
import Multi from 'redux-multi'

import './index.css'
import App from './App'
import reducers from './store'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Thunk, Multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))