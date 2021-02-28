import { useParams } from 'react-router-dom';
import useArtist from '../../hooks/useArtist';
import Loader from '../../components/Loader';

import '@reach/dialog/styles.css';
import { useState } from 'react';

interface Params {
  id: string;
}

function ArtistCover() {
  const { id }: Params = useParams();
  const { status, data: userData, error } = useArtist(id);
  useState(false);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { user } = userData;

  return (
    <div className="">
          <p className="font-header font-bold text-9xl mb-2 pb-1">
            {(user.firstName + ' ' + user.lastName).trim()}
          </p>
    </div>
  );
}

export default ArtistCover;
