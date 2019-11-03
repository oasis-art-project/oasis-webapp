import React from 'react';
import { Map as LMap, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const Container = styled.div`
  height: 350px;
  width: 100%;
  padding-bottom: 30px;
  .leaflet-container {
    height: 100%;
  }
`;

const Map = ({ children }) => (
  <Container>
    <LMap center={[42.3822833, -71.1330431]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </LMap>
  </Container>
);

export default Map;
