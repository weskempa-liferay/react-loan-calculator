import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import App from './components/App';

import { IntlProvider } from 'react-intl';

import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import common_fr from "./translations/fr/common.json";
import common_pt from "./translations/pt/common.json";

const languageFiles = {
  "en":common_en,
  "es":common_es,
  "fr":common_fr,
  "pt":common_pt
}

function getLiferayLanguageChoice() {
	try {
		// eslint-disable-next-line no-undef
		const languageId = Liferay.ThemeDisplay.getLanguageId();

		return languageId.split("_")[0];
	} catch (error) {
		console.warn('Not able to find Liferay Language Setting\n', error);

		return 'en'; //Fallback language
	}
};

class LoanApp extends HTMLElement {
  connectedCallback() {

    let i18nConfig = {
      locale: 'en',
      messages: languageFiles[getLiferayLanguageChoice()]
    };

    createRoot(this).render(
      <IntlProvider
        locale={i18nConfig.locale}
        defaultLocale={i18nConfig.locale}
        messages={i18nConfig.messages}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

const ELEMENT_ID = 'loan-calculator';

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, LoanApp);
}