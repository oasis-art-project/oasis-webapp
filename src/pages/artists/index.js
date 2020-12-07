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

const AllArtists = ({ nodes }) => {
  if (!nodes) return <LoadingState />;
  return (
    <>
      <CardsContainer>
        {nodes.map(artist => (
          <Card
            intent="list"
            key={artist.id}
            id={artist.id}
            title={`${formatName(artist.firstName, artist.lastName)}`}
            // description={"Illustrator"}
            image={`${IMGS_URL}/${artist.images[0]}`}
            tags={artist.tags ? artist.tags.split(';') : []}
            noStar={true}
            kind="artist"
          />
        ))}
      </CardsContainer>
    </>
  );
};

class Artists extends Component {
  componentDidMount() {
    this.props.getAllArtists();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Seo title="Artists" />
        <TabsContainer>
          <Tabs id="home_artists" renderActiveTabPanelOnly>
            <Tab
              id="all_artists"
              title="All Artists"
              panel={<AllArtists nodes={users.artists} />}
            />
          </Tabs>
        </TabsContainer>
      </div>
    );
  }
}

export default Artists;
