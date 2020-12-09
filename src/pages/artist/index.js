import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import { Loader, Seo, Tag, TagsContainer, Tabs, Tab } from '../../components';
import { IMGS_URL } from '../../helpers/index';

import ArtworkSection from './ArtworkSection';

const formatName = (first, last) => `${capitalize(first)} ${capitalize(last)}`;

const Container = styled.div`
  padding: 10px;
`;

const ArtworkContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

const ArtistImage = styled.img`
  width: 256px;
  margin-left: 0px;
  margin-top: 20px;
`;

const ArtistName = styled.h3`
  font-weight: 400;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ArtistBio = styled.p``;

const TabsContainer = styled.section`
  display: flex;
  width: 100%;
`;

const Artist = ({
  current,
  artworks,
  users,
  loading,
  events,
  getArtist,
  getArtworks,
  setCurrentArtist,
  getEventsByArtist,
  match: {
    params: { id },
  },
}) => {
  // This is the same as componentDidMount
  useEffect(() => {
    initArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initArtist = () => {
    if (!users && !current && loading === false) {
      getArtist(id);
      getArtworks(id);
      getEventsByArtist(id);
    }
    if (current == null && users) {
      setArtist();
    }
    if (current && current.id !== id) {
      setArtist();
    }
  };

  const setArtist = () => {
    const fromUsers = users ? find(propEq('id', id))(users) : false;
    if (fromUsers) {
      setCurrentArtist(fromUsers);
      getArtworks(current.id);
      getEventsByArtist(id);
    } else {
      getArtist(id);
      getArtworks(id);
      getEventsByArtist(id);
    }
  };

  if (current) {
    const tags = current.tags.split(';');
    // const artworks = state.artworks;
    // console.log('ARTWORKS', artworks);
    // console.log({ events, artworks });

    return (
      <div>
        <Seo title={`${formatName(current.firstName, current.lastName)}`} />
        <Grid halign="center">
          <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
            <Container>
              <div>
                <ArtistImage src={`${IMGS_URL}/${current.images[0]}`} />
              </div>
              <Header>
                <ArtistName>{`${formatName(current.firstName, current.lastName)}`}</ArtistName>
              </Header>

              <ArtistBio>{current.bio}</ArtistBio>
              {tags && (
                <TagsContainer>
                  {tags.map(tag => (
                    <Tag key={tag}>{capitalize(tag)}</Tag>
                  ))}
                </TagsContainer>
              )}
            </Container>
          </Grid.Unit>

          <TabsContainer>
            <Tabs left id="home_events">
              <Tab id="artist_artworks" title="Artworks" panel={<CardsList elements={artworks} />} />
              <Tab id="artist_events" title="Events" panel={<CardsList elements={events} />} />
            </Tabs>
          </TabsContainer>
        </Grid>
      </div>
    );
  }
  return <Loader />;
};

const CardsList = ({ elements }) => (
  <>
    <ArtworkContainer>
      {elements && elements.map && elements.map(a => <ArtworkSection artwork={a} />)}
    </ArtworkContainer>
  </>
);

export default Artist;
