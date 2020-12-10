import React from 'react';
import { Card } from '../../components';
import { IMGS_URL } from '../../helpers/index';

const PlaceSection = ({ place }) => (
    <Card
      intent="list"
      key={place.id}
      id={place.id}
      title={place.name}
      description={place.description}
      image={`${IMGS_URL}/${place.images[0]}`}
      tags={place.tags.split(';')}
      kind="place"
    />
);

export default PlaceSection;