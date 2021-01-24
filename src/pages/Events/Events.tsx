import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useCurrentEvents from '../../hooks/useCurrentEvents';
import { datesParser, IMGS_URL } from '../../helpers';
import Map, { Marker, Popup } from '../../components/Map';

const artistSelection = (artists: []) => {
  let resultArtist = '';
  artists.forEach((user: any, i: number) => {
    if (i > 0) resultArtist += ' & ';
    resultArtist += `${user.firstName} ${user.lastName}`;
  });
  return resultArtist;
};

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

const ArtisName = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;

const StyledPopup = styled(Popup)`
  width: 200px;
  p {
    margin: 0;
  }
`;

const Card = ({
  id = null,
  name = '',
  startTime = '',
  endTime = '',
  artists = [] as any,
  images = [] as any,
  place = {} as any,
}) => {
  const artist = artistSelection(artists);
  const imgURL = `${IMGS_URL}/${images[0]}`;
  const parsedDates = datesParser(startTime, endTime);

  return (
    <Link to={`/event/${id}`}>
      <article>
        <p>{name}</p>
        <ArtisName className="font-header font-bold text-xl my-2">{artist}</ArtisName>
        <ImgContainer imageURL={imgURL} height="270px" />
        <p>{place.name}</p>
        <p>{parsedDates}</p>
      </article>
    </Link>
  );
};

function Events() {
  const { status, data, error } = useCurrentEvents();

  const [view, setView] = useState('current_events');

  const toggleView = () => {
    if (view === 'current_events') setView('upcoming_events');
    if (view === 'upcoming_events') setView('current_events');
  };

  if (status === 'loading') return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="mb-6">
        <ul className="flex items-center justify-center">
          <li
            onClick={() => toggleView()}
            className={`mx-5 hover: cursor-pointer ${
              view === 'current_events' ? 'text-darkGray' : 'text-lightGray'
            }`}
          >
            Current events
          </li>
          <li
            className={`mx-5 hover: cursor-pointer ${
              view === 'upcoming_events' ? 'text-darkGray' : 'text-lightGray'
            }`}
            onClick={() => toggleView()}
          >
            Upcoming events
          </li>
        </ul>
      </div>
      <div>
        <Map>
          {data[view].map((event: any) => (
            <Marker key={event.id} position={[event.place.latitude, event.place.longitude]}>
              <StyledPopup>
                <Link to={`/event/${event.id}`}>
                  <p className="font-header text-darkGray font-bold text-lg my-1 truncate">
                    {event.name}
                  </p>
                  <ImgContainer imageURL={`${IMGS_URL}/${event.images[0]}`} height="150px" />
                  <p className="font-header text-darkGray font-bold text-base truncate my-2">
                    {event.place.name}
                  </p>
                </Link>
              </StyledPopup>
            </Marker>
          ))}
        </Map>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-12">
        {data[view].map((event: any) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}
export default Events;
