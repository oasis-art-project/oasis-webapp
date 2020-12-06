import React from 'react';
import { Card } from '../../components';
import { IMGS_URL } from '../../helpers/index';

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