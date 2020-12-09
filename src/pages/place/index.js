import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import { Loader, Seo, Card, Tag, TagsContainer } from '../../components';
import { IMGS_URL } from '../../helpers/index';

import HostSection from './HostSection';

const formatName = (name, lastName) => `${capitalize(name)} ${capitalize(lastName)}`;

const Container = styled.div`
  padding: 10px;
`;

// const ArtworkContainer = styled.div`
//   display: flex;
//   @media only screen and (max-width: 660px) {
//     flex-direction: column;
//   }
// `;

const PlaceImage = styled.img`
  width: 512px;
  margin-left: 0px;
  margin-top: 20px;
`;

const PlaceName = styled.h3`
  font-weight: 400;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  /* @media only screen and (max-width: 1300px) {
    justify-content: space-around;
  } */
`;

const PlaceDesc = styled.p``;

const Place = ({
  places,
  current,
  loading,
  events,
  getPlace,
  getEvents,
  setCurrentPlace,
  match: {
    params: { id },
  },
}) => {
  // This is the same as componentDidMount
  useEffect(() => {
    initPlace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initPlace = () => {
    if (!places && !current && loading === false) {
      getPlace(id);
      getEvents(id);
    }
    if (current == null && places) {
      setPlace();
    }
    if (current && current.id !== id) {
      setPlace();
    }
  };

  const setPlace = () => {
    const fromPlaces = places ? find(propEq('id', id))(places) : false;
    if (fromPlaces) {
      setCurrentPlace(fromPlaces);
      getEvents(current.id);
    } else {
      getPlace(id);
      getEvents(id);
    }
  };

  if (current) {
    const tags = current.tags.split(';');
    const host = current.host;

    return (
      <div>
        <Seo title={current.name} />
        <Grid halign="center">
          <Grid.Unit size={{ mobile: 1, desktop: 0.5 }}>
            <Container>
              <div>
                <PlaceImage src={`${IMGS_URL}/${current.images[0]}`} />
              </div>
              <Header>
                <PlaceName>{current.name}</PlaceName>
              </Header>

              <PlaceDesc>{current.description}</PlaceDesc>
              {tags && (
                <TagsContainer>
                  {tags.map(tag => (
                    <Tag key={tag}>{capitalize(tag)}</Tag>
                  ))}
                </TagsContainer>
              )}
            </Container>
          </Grid.Unit>

          <Grid.Unit size={{ mobile: 1, desktop: 0.4 }}>
            <Container>
              <HostSection host={host} fullName={`${formatName(host.firstName, host.lastName)}`} />
            </Container>
          </Grid.Unit>

          <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
            <h3>Events</h3>
            <CardsContainer>
              {events &&
                events.map &&
                events.map(event => (
                  <Card
                    intent="list"
                    key={event.id}
                    id={event.id}
                    title={event.name}
                    description={event.description}
                    image={`${IMGS_URL}/${event.images[0]}`}
                    tags={event.tags.split(';')}
                    kind="event"
                  />
                ))}
            </CardsContainer>
          </Grid.Unit>
        </Grid>
      </div>
    );
  }
  return <Loader />;
};

export default Place;
