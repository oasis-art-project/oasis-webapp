import { Link } from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';
import styled from 'styled-components';
import { IMGS_URL } from '../../helpers';
import Map, { Marker, Popup } from '../../components/Map';
import Loader from '../../components/Loader';
import Geohash from 'latlon-geohash';

import cubeImage from '../../assets/img/3dcube.png';

const decodeLatLon = (loc: string) => {
  let dec = Geohash.decode(loc)
  return [dec.lat, dec.lon];
}

const StyledPopup = styled(Popup)`
  width: 200px;
  p {
    margin: 0;
  }
`;

const MatterportButton = styled.a`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

interface ImageProps {
  readonly imageURL: string;
  readonly height: string;
}

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props: any) => props.height};
`;

function Places() {
  const { status, data, error } = usePlaces();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;
  return (
    <>
      <Map>
        {data.places.map((place: any) => (
          <Marker key={place.id} position={decodeLatLon(place.location)}>
            <StyledPopup>
              <Link to={`/place/${place.id}`}>
                <p className="font-header text-darkGray font-bold text-lg my-1 truncate">
                  {place.name}
                </p>
                <ImgContainer imageURL={`${IMGS_URL}/${place.prevImages[0]}`} height="150px" />
              </Link>
              {place.matterport_link && (
                  <MatterportButton
                    className="flex justify-center gap-2 w-full mt-2"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://my.matterport.com/show/?m=${place.matterport_link}`}
                  >
                    <img src={cubeImage} alt="3D Cube" width="20" />
                    <div className="text-gray-50">
                      Virtual Gallery
                    </div>
                  </MatterportButton>
              )}
            </StyledPopup>
          </Marker>
        ))}
      </Map>
      <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
        {data.places.map((place: any) => (
          <Link key={place.id} to={`/place/${place.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <p className="font-header font-bold text-xl lg:truncate mb-1 uppercase">
                {place.name}
              </p>
              <ImgContainer
                className="mb-2"
                imageURL={`${IMGS_URL}/${place.prevImages[0]}`}
                height="225px"
              />
              <p className="lg:truncate mb-1">{place.tags.split(';').map((tag: any) => tag + " ")}</p>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Places;
