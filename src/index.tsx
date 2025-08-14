import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import { ThemeProvider } from './app/providers/theme/ThemeProvider';

import 'antd/dist/reset.css';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
