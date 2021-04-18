import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const Container = styled.div`
  height: 350px;
  width: 100%;
  padding-bottom: 30px;
  .leaflet-container {
    height: 100%;
  }
`;


const Map = (props: any) => (
  <Container>
    <MapContainer center={props.center} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      {props.children}
    </MapContainer>
  </Container>
);

export default Map;
