import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "../components/shared";
import HomeContainer from '../containers/Home'

const HomeSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

const ViewContainer = styled.div`
  padding: 0 120px;
  margin-top: 50px;
`;

class IndexView extends Component {
  render() {
    if (this.props.location.pathname === "/login") return null;
    return (
      <HomeSection>
        <NavBar />
        <ViewContainer>
          <Switch>
            <Route
              exact
              path={this.props.match.path}
              component={HomeContainer}
            />
            <Route
              path={`${this.props.match.url}artists`}
              render={props => <h1>artists view</h1>}
            />
            <Route
              path={`${this.props.match.url}places`}
              render={props => <h1>places view</h1>}
            />
            <Route
              path={`${this.props.match.url}about`}
              render={props => <h1>about view</h1>}
            />
            <Route
              path={`${this.props.match.url}how-to`}
              render={props => <h1>how-to view</h1>}
            />
          </Switch>
        </ViewContainer>
      </HomeSection>
    );
  }
}

export default IndexView;
