import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../containers/Navbar';
import Footer from '../components/Footer';
import HomeContainer from '../containers/Home';
import EventContainer from '../containers/Event';

const HomeSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;

const ViewContainer = styled.div`
  margin: 0px auto;
  margin-top: 50px;
  max-width: 1260px;
  @media only screen and (max-width: 660px) {
    margin-top: 75px;
  }
`;

class IndexView extends Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    if (this.props.location.pathname === '/login') return null;
    return (
      <>
        <HomeSection>
          <Navbar />
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
              <Route
                path={`${this.props.match.url}event/:id`}
                component={EventContainer}
              />
            </Switch>
          </ViewContainer>
        </HomeSection>
        <Footer />
      </>
    );
  }
}

export default IndexView;
