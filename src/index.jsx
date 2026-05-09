import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { ConfigProvider } from './utils/ConfigProvider';
import { ConnectionStateProvider } from './utils/ConnectionStateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary autoReload label="Root">
      <ConfigProvider>
        <ConnectionStateProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConnectionStateProvider>
      </ConfigProvider>
    </ErrorBoundary>
  </React.StrictMode>
);