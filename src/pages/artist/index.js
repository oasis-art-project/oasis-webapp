import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loader, Seo, Tag, TagsContainer, Tabs, Tab } from '../../components';
import { IMGS_URL } from '../../helpers/index';
import { Icon } from '@blueprintjs/core';

import ArtworkSection from './ArtworkSection';
import EventSection from './EventSection';

const formatName = (first, last) => `${capitalize(first)} ${capitalize(last)}`;

const formatChatRoom = (id1, id2) => {
  if (id1 < id2) return id1 + '-' + id2;
  else return id2 + '-' + id1;
};

const Container = styled.div`
  padding: 10px;
`;

const ElementContainer = styled.div`
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

const LinkContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: red;
  text-decoration: underline;
`;

const Artist = ({
  current,
  artworks,
  users,
  loading,
  events,
  user,  
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
    if (current === null && users) {
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

    return (
      <div>
        <Seo title={`${formatName(current.firstName, current.lastName)}`} />
        <Grid halign="center">
          
          <Grid.Unit size={{ mobile: 1, desktop: 0.3 }}>
            <Container>
              <div>
                <ArtistImage src={`${IMGS_URL}/${current.images[0]}`} />
              </div>
            </Container>
          </Grid.Unit>

          <Grid.Unit size={{ mobile: 1, desktop: 0.4 }}>
              <Header>
                <ArtistName>{`${formatName(current.firstName, current.lastName)}`}</ArtistName>
              </Header>

              <ArtistBio>{current.bio}</ArtistBio>

              <LinkContainer>
                  <Icon iconSize={20} icon="link" />
                  <a target="_blank" rel="noreferrer" href={current.homepage}>Homepage</a>
              </LinkContainer>

              {user && user.id !== current.id &&
                <LinkContainer>
                  <Icon iconSize={20} icon="chat" />
                  <StyledLink to={`/room/${formatChatRoom(user.id, current.id)}`}>Message user</StyledLink>
                </LinkContainer>
              }

              {tags && (
                <TagsContainer>
                  {tags.map(tag => (
                    <Tag key={tag}>{capitalize(tag)}</Tag>
                  ))}
                </TagsContainer>
              )}

         </Grid.Unit> 

          <TabsContainer>
            <Tabs left id="home_events">
              <Tab id="artist_artworks" title="Artworks" panel={<ArtworkCardsList elements={artworks} />} />
              <Tab id="artist_events" title="Events" panel={<EventCardsList elements={events} />} />
            </Tabs>
          </TabsContainer>
        </Grid>
      </div>
    );
  }
  return <Loader />;
};

const ArtworkCardsList = ({ elements }) => (
  <>
    <ElementContainer>
      {elements && elements.map && elements.map(a => <ArtworkSection artwork={a} />)}
    </ElementContainer>
  </>
);

const EventCardsList = ({ elements }) => (
  <>
    <ElementContainer>
      {elements && elements.map && elements.map(e => <EventSection event={e} />)}
    </ElementContainer>
  </>
);

export default Artist;
