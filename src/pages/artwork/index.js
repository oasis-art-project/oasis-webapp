import React, { useEffect } from 'react';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import { Loader, Seo, Like, Tag, TagsContainer, Carousel } from '../../components';
import { IMGS_URL } from '../../helpers/index';

import ArtistSection from './ArtistSection';
import EventSection from './EventSection';

const Container = styled.div`
  padding: 10px;
`;

const ArtworkImage = styled.img`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const ArtworkName = styled.h3`
  font-weight: 400;
  margin-right: 20px;
`;

const EventContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

const formatName = (name, lastName) => `${capitalize(name)} ${capitalize(lastName)}`;

const ArtworkDesc = styled.p``;

const Artwork = ({
  current,
  loading,
  events,
  getArtwork,
  getEventsWithArtwork,
  match: {
    params: { id },
  },
}) => {
  // This is the same as componentDidMount
  useEffect(() => {
    initArtwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initArtwork = () => {
    if (!current && loading === false) {
      getArtwork(id);
      getEventsWithArtwork(id);
    }
    if (current === null || (current && current.id !== id)) {
      getArtwork(id);
      getEventsWithArtwork(id);
    }
  };

  if (current) {
    const tags = current.tags.split(';');
    
    return (
      
        <div>
          <Seo title={current.name} />
          <Grid halign="center">
            <Grid.Unit size={{ mobile: 1, desktop: 0.5 }}>
              <Container>
                <Carousel>
                  <div>
                    <ArtworkImage src={`${IMGS_URL}/${current.images[0]}`} />
                  </div>
                </Carousel>
                <Header>
                  <ArtworkName>{current.name}</ArtworkName>
                  <Like />
                </Header>
                <ArtworkDesc>{current.description}</ArtworkDesc>                
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
             <h3>Artists</h3>
              <Container>                
                  <ArtistSection artist={current.artist} fullName={`${formatName(current.artist.firstName, current.artist.lastName)}`} /> 
              </Container>
            </Grid.Unit>

            <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
              <h3>Events</h3>
              <EventContainer>
                {events && events.map && events.map(e => <EventSection event={e} />)}
              </EventContainer>
            </Grid.Unit> 

          </Grid>
        </div>
    );
  }

  return <Loader />;
};

export default Artwork;
