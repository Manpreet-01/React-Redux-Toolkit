import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import { store } from './app/store';
import App from './App.jsx';
import './App.css';

// <React.StrictMode>
// </React.StrictMode>,
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  )