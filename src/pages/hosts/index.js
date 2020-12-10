import React, { Component } from 'react';
import { Tab, Tabs, Card, Loader, Seo } from '../../components';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import { IMGS_URL } from '../../helpers/index';

const formatName = (name, lastName) => `${capitalize(name)} ${capitalize(lastName)}`;

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

const AllHosts = ({ nodes }) => {
  if (!nodes) return <LoadingState />;
  return (
    <>
      <CardsContainer>
        {nodes.map(host => (
          <Card
            intent="list"
            key={host.id}
            id={host.id}
            title={`${formatName(host.firstName, host.lastName)}`}
            image={`${IMGS_URL}/${host.images[0]}`}
            tags={host.tags ? host.tags.split(';') : []}
            noStar={true}
            kind="host"
          />
        ))}
      </CardsContainer>
    </>
  );
};

class Hosts extends Component {
  componentDidMount() {
    this.props.getAllHosts();
  }

  render() {
    const { users } = this.props;
    return (        
      <div>
        <Seo title="Hosts" />
        <TabsContainer>
          <Tabs id="home_hosts" renderActiveTabPanelOnly>
            <Tab
              id="all_hosts"
              title="All Hosts"
              panel={<AllHosts nodes={users.hosts} />}
            />
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default Hosts;
