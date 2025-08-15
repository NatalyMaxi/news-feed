import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App';
import { store } from './app/store';
import { ThemeProvider } from './app/providers/theme/ThemeProvider';

import 'antd/dist/reset.css';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
