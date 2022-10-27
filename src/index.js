import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {store} from "./redux";
import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import HttpApi from "i18next-http-backend";
import axios from "axios"

i18n
      .use(initReactI18next)
      .use(languageDetector)
      .use(HttpApi)
      .init({
          fallbackLng: "ru",
          supportedLngs: ["ru", "uz"],
          detection: {
              order: ["cookie", "htmlTag", "localStorage", "subdomain", "path"],
              caches: ["localStorage"],
          },
          backend: {
              loadPath: "/Locales/{{lng}}/translation.json",
          },
          react: {useSuspen: false},
      });

const backendOptions = {
    loadPath: "",

    request: async (options, url, payload, callback) => {
        try {
            const translation = await axios.get(url);
            callback(null, {
                status: 200,
                data: JSON.stringify(translation.data),
            });
        } catch (e) {
            callback(e);
        }
    },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
              <Provider store={store}>
                  <App style={{overflowY: 'clip'}}/>
              </Provider>
      </BrowserRouter>
);