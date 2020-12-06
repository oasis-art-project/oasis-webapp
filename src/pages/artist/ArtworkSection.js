import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components';
import { IMGS_URL } from '../../helpers/index';

const Container = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
`;

const Name = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const PropArtwork = styled.p`
  font-weight: 400;
  margin: 0;
`;

const PropsContainer = styled.div``;

const ArtworkSection = ({ artwork }) => (
    <Card
      intent="list"
      key={artwork.id}
      id={artwork.id}
      title={artwork.name}
      description={artwork.description}
      image={`${IMGS_URL}/${artwork.images[0]}`}
      tags={artwork.tags.split(';')}
      kind="artwork"
    />
);
  
export default ArtworkSection;