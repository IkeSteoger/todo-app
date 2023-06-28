import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <SettingsProvider withGlobalStyles withNormalizeCSS>
        <App />
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);
