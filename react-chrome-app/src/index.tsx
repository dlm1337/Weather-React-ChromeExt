import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const mountApp = () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'react-chrome-app';

  const globalStyles = document.createElement('style');
  globalStyles.innerHTML = `
    #${rootElement.id} {
      position: fixed;
      left: 0;
      top: 0;
      width: 300px;
      height: 100vh;
      background: #ffffff;
      border-right: 1px solid #c2c2c2;
      z-index: 999;
    }
  `;

  rootElement.appendChild(globalStyles);
  document.body.appendChild(rootElement);

  const root = ReactDOM.createRoot(rootElement);

  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Failed to render the React app:', error);
  }
};

mountApp();


chrome.runtime.sendMessage({ popupStart: "Hello from index(popup) script!" });
