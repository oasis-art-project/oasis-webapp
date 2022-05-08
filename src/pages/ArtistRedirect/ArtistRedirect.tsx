/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams } from 'react-router-dom';
import { useGetArtistByName } from '../../hooks/useArtist';
import Loader from '../../components/Loader';
import DelayRedirect from '../../components/DelayRedirect';

import '@reach/dialog/styles.css';

interface Params {
  name: string;
}

function ArtistRedirect() {  
  const { name }: Params = useParams();
  const { status, data, error } = useGetArtistByName(name);

  if (status === 'loading') return <Loader />;
  if (error) return <div id="info"><h3>This artist could not be found...</h3></div>;

  var dStyleClass = `flex-box h-screen justify-center items-center text-gray-700`;
  return (
    <div className={dStyleClass}>      
      <DelayRedirect to={`/artist/${data.artist_id}` } delay={500} />
    </div>
  );
}

export default ArtistRedirect;
