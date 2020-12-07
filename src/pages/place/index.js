import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import { Loader, Seo, Tag, TagsContainer } from '../../components';
import { IMGS_URL } from '../../helpers/index';

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

const PlaceDesc = styled.p``;

const Place = ({
    places,
    current,
    loading,
    getPlace,
    setCurrentPlace,
    match: {
      params: { id },
    },
  }) => {
    // This is the same as componentDidMount
    useEffect(() => {
      initPlace();
    });
  
    const initPlace = () => {
      if (!places && !current && loading === false) {
        getPlace(id);
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
      } else {
        getPlace(id);
      }
    };
  
    if (current) {
      const tags = current.tags.split(';');
      // const artworks = state.artworks;
    //  console.log('ARTWORKS', artworks);
  
      return (
        <div>
          <Seo title={current.name} />
          <Grid halign="center">
            <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
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
  
            {/* <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
              <ArtworkContainer>
                {artworks && artworks.map(a => <ArtworkSection artwork={a} />)}
              </ArtworkContainer>
            </Grid.Unit> */}

          </Grid>
        </div>
      );
    }
    return <Loader />;
  };
  
  export default Place;
  