import { useParams } from 'react-router-dom';
import DelayRedirect from '../../components/DelayRedirect';

import '@reach/dialog/styles.css';

interface Params {
  id: string;
  name: string;
  tcolor: string
  bcolor: string
}

function ArtistCover() {
  const { id, name, tcolor, bcolor }: Params = useParams();
  var dStyleClass = `flex h-screen justify-center items-center ${bcolor}`;
  var pStyleClass = `font-header font-bold text-9xl mb-2 pb-1 text-center ${tcolor}`;
  return (
    <div className={dStyleClass}>
      <p className={pStyleClass}>
        {name}
      </p>
      <DelayRedirect to={`/artist/${id}`} delay={3000} />
    </div>
  );
}

export default ArtistCover;
