import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from './store';
import Root from "./containers/Root";

import theme from "./layout/theme";

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </ReduxProvider>
);

export default App;
