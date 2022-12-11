import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

const foodoTheme = createTheme({
    name: "foodoTheme",
    tokens: {
        components: {
            switchfield: {
                    thumb: {
                        backgroundColor: {value: "{colors.background.tertiary.value}"},
                        checked: {
                            backgroundColor: {value: "{colors.background.tertiary.value}"},
                        },
                    },
                    track: {
                        backgroundColor: {value: "{colors.brand.primary.60.value}"},
                        checked: {
                            backgroundColor:  {value: "{colors.brand.primary.60.value}"},
                        },
                    },
                }
            }
        }
    }, studioTheme)

Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={foodoTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
