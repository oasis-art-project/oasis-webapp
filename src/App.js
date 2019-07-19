import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

import store from "./store";
import Root from "./containers/Root";

import texts from './layout/texts.json';
import theme from "./layout/theme";

addLocaleData([...es, ...en]);

const locale = navigator.languages.indexOf("es") >= 0 ? "es" : "en";

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={texts[locale]}>
        <Root />
      </IntlProvider>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
