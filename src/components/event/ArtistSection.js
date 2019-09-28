import React from 'react';
import styled from 'styled-components';
import { IMGS_URL } from '../../helpers/index';

const Container = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  border-radius: 50px;
  margin-right: 20px;
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
    <Image src={`${IMGS_URL}/users/${artist.id}/profile.jpg`} />
    <PropsContainer>
      <Name>{fullName}</Name>
      <PropArtist>Boston, MA</PropArtist>
      <PropArtist>Ilustrator</PropArtist>
    </PropsContainer>
  </Container>
);

export default ArtistSection;
