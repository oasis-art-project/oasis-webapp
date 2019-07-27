import React, { Component } from "react";
import { Tab, Tabs } from "../components";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CurrentEvents = () => <div>Current envets</div>;
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
