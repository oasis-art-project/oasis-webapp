import { useParams } from 'react-router-dom';
import DelayRedirect from '../../components/DelayRedirect';

import '@reach/dialog/styles.css';

interface Params {
  id: string;
  name: string;
}

function ArtistCover() {
  const { id, name }: Params = useParams();
  return (
    <div className="">
      <p className="font-header font-bold text-9xl mb-2 pb-1">
        {name}
      </p>
      <DelayRedirect to={`/artist/${id}`} delay={3000} />
    </div>
  );
}

export default ArtistCover;
