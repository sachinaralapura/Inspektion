import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import global_kan from "./translations/kan/global.json"
import global_hin from "./translations/hin/global.json"

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
    kan :{
      global : global_kan
    },
    hin : {
      global : global_hin
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
