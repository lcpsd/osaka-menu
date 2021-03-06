import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { LocationContextProvider } from './context/Location';
import GlobalStyle from './styles/GlobalStyles';
import {defaultTheme} from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={defaultTheme}>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

