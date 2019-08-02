import React, { Component } from "react";
import { Tab, Tabs, Card, Loader } from "../components";
import styled from "styled-components";

import { get } from "axios";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  margin-top: 180px;
`;
const LoadingState = () => (
  <LoaderContainer>
    <Loader />
  </LoaderContainer>
);

class CurrentEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, events: null, error: false };
  }

  componentDidMount() {
    get("api/event")
      .then(response => {
        this.setState({ events: response.data.events, loading: false });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.loading) return <LoadingState />;
    console.log(this.state.events);
    return this.state.events.map(event => (
      <Card key={event.id} title={event.name} description={event.description} />
    ));
  }
}

const UpcomingEvents = () => <div>Upcoming events</div>;

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <TabsContainer>
          <Tabs id="TabsExample" renderActiveTabPanelOnly>
            <Tab
              id="current_events"
              title="Current Events"
              panel={<CurrentEvents />}
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
