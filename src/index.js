import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import ThemeProvider from './state/ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
    <App /> 
   </ThemeProvider>
  </React.StrictMode>
);


