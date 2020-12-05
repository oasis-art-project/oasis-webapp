import React, { Component } from 'react';
import { Tab, Tabs, Card, Loader, Seo, Map, Marker } from '../../components';
import styled from 'styled-components';
import { Popup } from 'react-leaflet';
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

const EventPopup = styled(Popup)`
  width: 200px !important;
  .leaflet-popup-content {
    margin: 5px;
    padding: 2.5px 0;
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
              >
                <EventPopup closeButton={false}>
                  <Card
                    noStar
                    intent="list"
                    small
                    key={event.id}
                    id={event.id}
                    title={event.name}
                    description={event.description}
                    image={`${IMGS_URL}/${event.images[0]}`}
                    tags={event.tags.split(';')}
                  />
                </EventPopup>
              </Marker>
            )
        )}
      </Map>
      <CardsContainer>
        {nodes.map(event => (
          <Card
            intent="list"
            key={event.id}
            id={event.id}
            title={event.name}
            description={event.description}
            image={`${IMGS_URL}/${event.images[0]}`}
            tags={event.tags.split(';')}
          />
        ))}
      </CardsContainer>
    </>
  );
};

class Home extends Component {
  componentDidMount() {
    this.props.getAllEvents();
    console.log("Home.componentDidMount", this.props)
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <Seo title="Events" />
        <TabsContainer>
          <Tabs id="home_events" renderActiveTabPanelOnly>
            <Tab
              id="current_events"
              title="Current Events"
              panel={<CurrentEvents nodes={events.current} />}
            />
            <Tab
              id="upcoming_events"
              title="Upcoming Events"
              panel={<CurrentEvents nodes={events.upcoming} />}
            />
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default Home;
