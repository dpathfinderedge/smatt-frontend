import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { AuthContextProvider } from './contexts/AuthContextProvider';
import { StateContextProvider } from './contexts/StateContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
