import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import { Loader, Seo } from '../../components';

const formatName = (first, last) => `${capitalize(first)} ${capitalize(last)}`;

const Artist = ({
  current,
  users,
  loading,
  getArtist,
  setCurrentArtist,
  match: {
    params: { id },
  },
}) => {
  // This is the same as componentDidMount
  useEffect(() => {
    if (!users && !current && loading === false) {
      getArtist(id);
    }
    if (current == null && users) {
      setArtist();
    }
    if (current && current.id !== id) {
      setArtist();
    }
  }, []);

  const setArtist = () => {
    const fromUsers = users ? find(propEq('id', id))(users) : false;
    if (fromUsers) {
      setCurrentArtist(fromUsers);
    } else {
      getArtist(id);
    }
  };

  if (current) {
    return (
      <div>
        <Seo title={`${formatName(current.firstName, current.lastName)}`} />
        <h3>{`${formatName(current.firstName, current.lastName)}`}</h3>
      </div>
    );
  }
  return <Loader />;
};

export default Artist;
