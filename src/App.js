import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { addLocaleData, IntlProvider } from 'react-intl';
import throttle from 'lodash/throttle';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import createStore from './store';
import { saveState } from './localStorage';
import Root from './containers/Root';

import texts from './layout/texts.json';
import theme from './layout/theme';

addLocaleData([...es, ...en]);

const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

const store = createStore();

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
      auth: {
        token: store.getState().auth.token,
        expires: store.getState().auth.expires,
      },
    });
  }),
  1000
);

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={texts['en']}>
        <Root />
      </IntlProvider>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
