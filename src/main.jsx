import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AppProvider} from './Context'
import { Provider } from 'react-redux'
import store from './MyComponents/redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
    </Provider>
  </React.StrictMode>
)
