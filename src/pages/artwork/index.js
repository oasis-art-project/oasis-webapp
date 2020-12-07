import React, { Component } from 'react';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import { Loader, Seo, Like, Tag, TagsContainer, Carousel } from '../../components';
import { IMGS_URL } from '../../helpers/index';

import ArtistSection from './ArtistSection';

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

const formatName = (name, lastName) => `${capitalize(name)} ${capitalize(lastName)}`;

const ArtworkDesc = styled.p``;

class Artwork extends Component {
  state = {
    currentArtwork: this.props.artwork,
  };

  componentDidMount() {
    if (this.state.currentArtwork === null) {
      this.props.getArtwork(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.artwork !== prevProps.artwork) {
      this.setState({
        currentArtwork: this.props.artwork,
      });
    }
  }

  render() {
    const { currentArtwork } = this.state;
    
    if (currentArtwork) {
      const tags = currentArtwork.tags.split(';');
      return (
        <div>
          <Seo title={currentArtwork.name} />
          <Grid halign="center">
            <Grid.Unit size={{ mobile: 1, desktop: 0.5 }}>
              <Container>
                <Carousel>
                  <div>
                    <ArtworkImage src={`${IMGS_URL}/${currentArtwork.images[0]}`} />
                  </div>
                </Carousel>
                <Header>
                  <ArtworkName>{currentArtwork.name}</ArtworkName>
                  <Like />
                </Header>
                <ArtworkDesc>{currentArtwork.description}</ArtworkDesc>                
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
                  <ArtistSection artist={currentArtwork.artist} fullName={`${formatName(currentArtwork.artist.firstName, currentArtwork.artist.lastName)}`} /> 
              </Container>
            </Grid.Unit>

          </Grid>
        </div>
      );
    }
    return <Loader />;
  }
}

export default Artwork;
