import React, { Component } from 'react';
import { Tab, Tabs, Card, Loader, Seo, Map } from '../shared';
import styled from 'styled-components';
import { Marker } from 'react-leaflet';
import { IMGS_URL } from '../../helpers/index';

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1300px) {
    padding: 0 20px;
  }
`;

const LoaderContainer = styled.div`
  margin-top: 180px;
`;

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  @media only screen and (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const LoadingState = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

const CurrentEvents = ({ nodes }) => {
  if (!nodes) return <LoadingState />;
  return (
    <>
      <Map>
        {nodes.map(
          event =>
            event.place.latitude &&
            event.place.longitude && (
              <Marker
                key={event.id}
                position={[event.place.latitude, event.place.longitude]}
              />
            )
        )}
      </Map>
      <CardsContainer>
        {nodes.map(event => (
          <Card
            key={event.id}
            id={event.id}
            title={event.name}
            description={event.description}
            image={`${IMGS_URL}/event/${event.id}/event.jpg`}
            tags={event.tags.split(';')}
          />
        ))}
      </CardsContainer>
    </>
  );
};

const UpcomingEvents = () => <div>Upcoming events</div>;

class HomeContainer extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <Seo title="Home" />
        <TabsContainer>
          <Tabs id="TabsExample" renderActiveTabPanelOnly>
            <Tab
              id="current_events"
              title="Current Events"
              panel={<CurrentEvents nodes={events.all} />}
            />
            <Tab
              id="upcoming_events"
              title="Upcoming Events"
              panel={<UpcomingEvents />}
            />
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default HomeContainer;
