import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./components/redux/store"
import App from './App'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    <ToastContainer
      autoClose={3000}
      closeOnClick
      hideProgressBar
      limit={2}
      pauseOnFocusLoss
      pauseOnHover
      position="top-right"
    />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
