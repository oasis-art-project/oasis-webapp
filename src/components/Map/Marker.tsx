/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import React from 'react';
import L from 'leaflet';
import { Marker as MarkerL } from 'react-leaflet';
import IconSVG from '../../assets/img/oasis-marker.svg';

const OasisMarker = L.icon({
  iconUrl: IconSVG,
  iconSize: [25, 41],
  popupAnchor: [0, -17],
});

const Marker = (props: any) => (
  <MarkerL icon={OasisMarker} {...props}>
    {props.children}
  </MarkerL>
);

export default Marker;
