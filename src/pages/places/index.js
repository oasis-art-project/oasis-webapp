import React, { Component } from 'react';
import { Tab, Tabs, Card, Loader, Seo } from '../../components';
import styled from 'styled-components';
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

const AllPlaces = ({ nodes }) => {
  if (!nodes) return <LoadingState />;
  return (    
    <>
      <CardsContainer>
      {nodes.map(place => (
          <Card
            intent="list"
            key={place.id}
            id={place.id}
            title={place.name}
            // description={place.description}
            image={`${IMGS_URL}/${place.images[0]}`}
            tags={place.tags.split(';')}
          />
        ))}
      </CardsContainer>
    </>
  );
};

class Places extends Component {
  componentDidMount() {
    this.props.getAllPlaces();
  }

  render() {
    const { places } = this.props;
    return (
      <div>
        <Seo title="Places" />
        <TabsContainer>
          <Tabs id="home_places" renderActiveTabPanelOnly>
            <Tab
              id="all_places"
              title="All Places"
              panel={<AllPlaces nodes={places.all} />}
            />
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default Places;
