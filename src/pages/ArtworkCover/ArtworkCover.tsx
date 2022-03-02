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
  artist: string;
  title: string;
  info1: string;
  info2: string;  
  tcolor: string
  bcolor: string
}

function ArtworkCover() {
  const { id, artist, title, info1, info2, tcolor, bcolor }: Params = useParams();

  // Default values
  const tcolorVal = tcolor ? tcolor : "text-gray-700"; 
  const bcolorVal = bcolor ? bcolor : "bg-gray-300"; 

  var dStyleClass = `flex-box h-screen justify-center items-center ${bcolorVal}`;
  var pArtistStyleClass = `font-header text-9xl mb-2 pt-16 text-center ${tcolorVal}`;
  var pTitleStyleClass = `font-header font-bold text-8xl mb-2 pt-2 text-center ${tcolorVal}`;
  var pInfo1StyleClass = `font-header text-8xl mb-2 pt-6 text-center ${tcolorVal}`;
  var pInfo2StyleClass = `font-header text-7xl mb-2 pt-10 text-center ${tcolorVal}`;
  return (
    <div className={dStyleClass}>
      <p className={pArtistStyleClass}>
        {artist}
      </p>          
      <p className={pTitleStyleClass}>
        {title}
      </p>
      <p className={pInfo1StyleClass}>
        {info1}
      </p>
      <p className={pInfo2StyleClass}>
        {info2}
      </p>      

      <DelayRedirect to={`/artwork/${id}`} delay={3000} />
    </div>
  );
}

export default ArtworkCover;
