import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../helpers/history";
import styled from 'styled-components';
// pages
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainLayout = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`

const Root = () => (
  <Router history={history}>
    <MainLayout>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </MainLayout>
  </Router>
);

// Export
export default Root;
