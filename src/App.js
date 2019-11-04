import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { addLocaleData, IntlProvider } from 'react-intl';
import throttle from 'lodash/throttle';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import createStore from './store';
import { saveState } from './localStorage';
import texts from './layout/texts.json';
import theme from './layout/theme';
import history from './helpers/history';
import Layout from './layout/MainLayout';
// Main Pages //
import IndexView from './containers/IndexView';
import Login from './containers/Login';

addLocaleData([...es, ...en]);
const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';
const store = createStore();

// Save user and auth when store change
// may be too much so used throttle from lodash
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
        <Router history={history}>
          <Layout>
            <Route path="/login" component={Login} />
            <Route path="/" component={IndexView} />
          </Layout>
        </Router>
      </IntlProvider>
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
