import React from 'react';
import ReactDOM from 'react-dom';
import './assets/tailwind.css';
import 'leaflet/dist/leaflet.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastProvider } from 'react-toast-notifications';
import Alert from './components/Alert';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismiss components={{ Toast: Alert }}>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
