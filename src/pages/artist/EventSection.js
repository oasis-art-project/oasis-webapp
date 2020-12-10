import React from 'react';
import { Card } from '../../components';
import { IMGS_URL } from '../../helpers/index';

const EventSection = ({ event }) => (
    <Card
      intent="list"
      key={event.id}
      id={event.id}
      title={event.name}
      description={event.description}
      image={`${IMGS_URL}/${event.images[0]}`}
      tags={event.tags.split(';')}
      kind="event"
    />
);

export default EventSection;