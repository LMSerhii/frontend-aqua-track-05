import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TourWrapper from './TourWrapper/TourWrapper.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { persistor, store } from './redux/store';
import './shared/styles/index.css';
import 'modern-normalize';
import './i18next/config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <TourWrapper>
              <App />
            </TourWrapper>
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
