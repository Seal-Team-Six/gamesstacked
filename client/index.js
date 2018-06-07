import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './reducers/store'
import App from './app'

// import 'semantic-ui-css/semantic.min.css';

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)

// let render = () => {
//  ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('app')
// )
// }

// if (module.hot) {
//  module
//    .hot
//    .accept('./app', () => {
//      setTimeout(render)
//    })
// }

// render()
