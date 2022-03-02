/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

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

  // Default values
  const tcolorVal = tcolor ? tcolor : "text-gray-700"; 
  const bcolorVal = bcolor ? bcolor : "bg-gray-300"; 

  var dStyleClass = `flex h-screen justify-center items-center ${bcolorVal}`;
  var pStyleClass = `font-header font-bold text-9xl mb-2 pb-1 text-center ${tcolorVal}`;
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
