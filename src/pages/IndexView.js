import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../containers/Navbar';
import Footer from '../components/Footer';
import HomeContainer from '../containers/Home';
import EventContainer from '../containers/Event';
import ArtistsContainer from '../containers/Artists';
import PlacesContainer from '../containers/Places';
import ArtistContainer from '../containers/Artist';
import PlaceContainer from '../containers/Place';
import ArtworkContainer from '../containers/Artwork';

// Static Pages
import About from './about';

const PageContainer = styled.main`
  position: relative;
  min-height: 100vh;
  @media only screen and (max-width: 1520px) {
    margin: 0 30px;
  }
`;

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
  constructor() {
    super();
    this.setUserLocation = this.setUserLocation.bind(this);
  }

  setUserLocation(location) {
    // console.log(location)
    this.props.setUserLocation(location);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      this.setUserLocation({ latitude, longitude });
    });
  }

  render() {
    const { location, match } = this.props;
    if (location.pathname === '/login') return null;
    return (
      <PageContainer>
        <HomeSection>
          <Navbar />
          <ViewContainer>
            <Switch>            
              <Route exact path={match.path} component={HomeContainer} />
              <Route path={`${match.url}artists`} component={ArtistsContainer} />
              <Route path={`${match.url}places`} component={PlacesContainer} />
              <Route path={`${match.url}about`} component={About} />
              <Route path={`${match.url}event/:id`} component={EventContainer} />
              <Route path={`${match.url}artist/:id`} component={ArtistContainer} />
              <Route path={`${match.url}place/:id`} component={PlaceContainer} />           
              <Route path={`${match.url}artwork/:id`} component={ArtworkContainer} />
            </Switch>
          </ViewContainer>
        </HomeSection>
        <Footer />
      </PageContainer>
    );
  }
}


export default IndexView;
