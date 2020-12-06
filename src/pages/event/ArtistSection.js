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

const PropArtist = styled.p`
  font-weight: 400;
  margin: 0;
`;

const PropsContainer = styled.div``;

const ArtistSection = ({ artist, fullName }) => (
  <Container>
    <ImageContainer>
      <Image src={`${IMGS_URL}/${artist.images[0]}`} />
    </ImageContainer>
    <PropsContainer>
      <Name>{fullName}</Name>
      <PropArtist>Boston, MA</PropArtist>
      <PropArtist>Ilustrator</PropArtist>
    </PropsContainer>
  </Container>
);

export default ArtistSection;
