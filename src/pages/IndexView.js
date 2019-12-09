import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../containers/Navbar';
import Footer from '../components/Footer';
import HomeContainer from '../containers/Home';
import EventContainer from '../containers/Event';
// Static Pages
import About from './About';
import HowTo from './HowTo';

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

const IndexView = ({ location, match }) => {
  if (location.pathname === '/login') return null;
  return (
    <>
      <HomeSection>
        <Navbar />
        <ViewContainer>
          <Switch>
            <Route path={`${match.url}about`} component={About} />
            <Route path={`${match.url}how-to`} component={HowTo} />
            <Route exact path={match.path} component={HomeContainer} />
            <Route
              path={`${match.url}artists`}
              render={props => <h1>artists view</h1>}
            />
            <Route
              path={`${match.url}places`}
              render={props => <h1>places view</h1>}
            />
            <Route path={`${match.url}event/:id`} component={EventContainer} />
          </Switch>
        </ViewContainer>
      </HomeSection>
      <Footer />
    </>
  );
};

export default IndexView;
