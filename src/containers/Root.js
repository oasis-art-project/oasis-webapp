import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../helpers/history";
import styled from "styled-components";
// pages
import IndexView from "../containers/IndexView";
import Login from "../containers/Login";

const MainLayout = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  *:focus {
    outline: none !important;
  }
  .bp3-control input:focus ~ .bp3-control-indicator {
    outline: none !important;
  }
  color: ${props => props.theme.text_color};
`;

const Root = () => (
  <Router history={history}>
    <MainLayout>
      <Route path="/login" component={Login} />
      <Route path="/" component={IndexView} />
    </MainLayout>
  </Router>
);

// Export
export default Root;
