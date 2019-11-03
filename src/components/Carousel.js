import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const OasisCarousetl = ({ children }) => (
  <Carousel showThumbs={false} showStatus={false}>
    {children}
  </Carousel>
);

export default OasisCarousetl;
