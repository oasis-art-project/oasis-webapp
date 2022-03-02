/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams } from 'react-router-dom';
import { useGetEventByAlias } from '../../hooks/useEvent';
import Loader from '../../components/Loader';
import DelayRedirect from '../../components/DelayRedirect';

import '@reach/dialog/styles.css';

interface Params {
  alias: string;
}

function EventRedirect() {  
  const { alias }: Params = useParams();
  const { status, data, error } = useGetEventByAlias(alias);

  if (status === 'loading') return <Loader />;
  if (error) return <div id="info"><h3>This event could not be found...</h3></div>;

  var dStyleClass = `flex-box h-screen justify-center items-center text-gray-700`;
  return (
    <div className={dStyleClass}>      
      <DelayRedirect to={`/event/${data.event_id}` } delay={500} />
    </div>
  );
}

export default EventRedirect;
