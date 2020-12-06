import React from 'react';
import styled from 'styled-components';
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
  border-radius: 50px;
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
    <Container>
      <ImageContainer>
        <Image src={`${IMGS_URL}/${artwork.images[0]}`} />
      </ImageContainer>
      <PropsContainer>
        <Name>${artwork.name}</Name>
        <PropArtwork>${artwork.description}</PropArtwork>
      </PropsContainer>
    </Container>
  );
  
  export default ArtworkSection;