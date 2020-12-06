import React from 'react';
import L from 'leaflet';
import { Marker as MarkerL } from 'react-leaflet';
import IconSVG from '../assets/oasis-marker.svg';

const OasisMarker = L.icon({
  iconUrl: IconSVG,
  iconSize: [25, 41],
  popupAnchor: [0, -17],
});

const Marker = props => (
  <MarkerL icon={OasisMarker} {...props}>
    {props.children}
  </MarkerL>
);

export default Marker;
