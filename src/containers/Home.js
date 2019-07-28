import React, { Component } from "react";
import { Tab, Tabs, Card, Loader } from "../components";
import styled from "styled-components";

import {get} from 'axios';

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;


class CurrentEvents extends Component {

  constructor(props){
    super(props);
    this.state = {loading: true, events: null}
  }

  componentDidMount() {
    get('api/event').then(response => {
      console.log(response.data.events)
    })
    .catch( error => {
      // handle error
      console.log(error);
    })
  }

  render() {
    return <h1>hola !</h1>
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
