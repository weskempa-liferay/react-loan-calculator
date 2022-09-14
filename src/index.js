import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import App from './components/App';

class LoanApp extends HTMLElement {
  connectedCallback() {
    createRoot(this).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
      );
  }
}

const ELEMENT_ID = 'loan-calculator';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, LoanApp);
}