import React from 'react';
import { Loader, Seo } from '../shared';

const filterArray = (array, id) =>
  array.filter(el => el.id === parseInt(id))[0];

const Event = ({ match, events }) => {
  if (events) {
    const currentEvent = filterArray(events, match.params.id);
    return (
      <div>
        <Seo title={currentEvent.name} />
        <h3>ID: {match.params.id}</h3>
      </div>
    );
  }
  return <Loader />;
};

export default Event;
