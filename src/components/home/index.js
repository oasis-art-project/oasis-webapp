import React, { Component } from 'react';
import { Tab, Tabs, Card, Loader, Seo } from '../shared';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  margin-top: 180px;
`;

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const LoadingState = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

const CurrentEvents = ({ nodes }) => {
  if (!nodes) return <LoadingState />;
  return (
    <CardsContainer>
      {nodes.map(event => (
        <Card
          key={event.id}
          id={event.id}
          title={event.name}
          description={event.description}
        />
      ))}
    </CardsContainer>
  );
};

const UpcomingEvents = () => <div>Upcoming events</div>;

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAllEvents();
  }

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
