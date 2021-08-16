import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useCurrentEvents from '../../hooks/useCurrentEvents';
import { datesParser, eventStarted, timeComparison, IMGS_URL } from '../../helpers';
import Map, { Marker, Popup } from '../../components/Map';
import Loader from '../../components/Loader';
import Geohash from 'latlon-geohash';

import cubeImage from '../../assets/img/3dcube.png';
import vineImage from '../../assets/img/vine.png';

const artistSelection = (artists: []) => {
  let resultArtist = '';
  if (artists.length < 1) {
    resultArtist = " "
  } else if (artists.length < 3) {
    artists.forEach((user: any, i: number) => {
      if (i > 0) resultArtist += ' & ';
      resultArtist += `${user.firstName} ${user.lastName}`.trim();
    });  
  } else {
    resultArtist = "Group Event"
  }
  return resultArtist;
};

const decodeLatLon = (loc: string) => {
  let dec = Geohash.decode(loc)
  return [dec.lat, dec.lon];
}

const getLocCentroid = (events: []) => {
  // Seoul center
  let center = [37.5527854, 126.9891719]
  let n = events.length
  if (n < 1) {
    return center;
  } else {
    var locSums = [0.0, 0.0];
    events.forEach((event: any, i: number) => {
      let dec = Geohash.decode(event.place.location)
      locSums[0] += dec.lat;
      locSums[1] += dec.lon;
    });
    return [locSums[0] / n, locSums[1] / n];
  }
}

const HubsButton = styled.a`
  color: white;
  background-color: black;
  padding: 0.5rem;
  text-align: center;
`;

const GatherButton = styled.a`
  color: white;
  background-color: black;
  padding: 0.5rem;
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

const EventName = styled.p`
  width: 100%;
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
  prevImages = [] as any,
  place = {} as any,
}) => {
  const artist = artistSelection(artists);
  const imgURL = `${IMGS_URL}/${prevImages[0]}`;
  const parsedDates = datesParser(startTime, endTime);

  return (
    <Link to={`/event/${id}`}>
      <article>
        <p className="md:whitespace-nowrap">{artist}</p>
        <EventName className="font-header font-bold text-xl my-2 md:whitespace-nowrap">
        {name}
        </EventName>
        <ImgContainer imageURL={imgURL} height="270px" />
        <p>{place.name}</p>
        <p>{parsedDates}</p>
      </article>
    </Link>
  );
};

function Events() {
  const { status, data, error } = useCurrentEvents();

  const [view, setView] = useState('upcoming_events');

  const toggleView = () => {
    if (view === 'upcoming_events') setView('current_events');
    if (view === 'current_events') setView('upcoming_events');    
  };

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const sortedData: any = {};
  sortedData['current_events'] = data.current_events.sort((a: any, b: any) => {
    const timeA = a.startTime;
    const timeB = b.startTime;
    if (timeComparison(timeA, timeB)) return 1;
    else return -1;
  });  
  sortedData['upcoming_events'] = data.upcoming_events.sort((a: any, b: any) => {
    const timeA = a.startTime;
    const timeB = b.startTime;
    if (timeComparison(timeA, timeB)) return 1;
    else return -1;
  });

  return (
    <>
      <div className="mb-6">
        <ul className="flex items-center justify-center">
          <li
            className={`mx-5 hover: cursor-pointer ${
              view === 'upcoming_events' ? 'text-darkGray' : 'text-lightGray'
            }`}
            onClick={() => toggleView()}
          >
            예정 이벤트
          </li>
          <li
            onClick={() => toggleView()}
            className={`mx-5 hover: cursor-pointer ${
              view === 'current_events' ? 'text-darkGray' : 'text-lightGray'
            }`}
          >
            현재 이벤트
          </li>
        </ul>
      </div>
      <div>
        <Map center={getLocCentroid(data[view])}>
          {data[view].map((event: any) => (
            <Marker key={event.id} position={decodeLatLon(event.place.location)}>
              <StyledPopup>
                <Link to={`/event/${event.id}`}>
                  <p className="font-header text-darkGray font-bold text-lg my-1 truncate">
                    {event.name}
                  </p>
                  <ImgContainer imageURL={`${IMGS_URL}/${event.prevImages[0]}`} height="150px" />
                  <p className="font-header text-darkGray font-bold text-base truncate my-2">
                    {event.place.name}
                  </p>
                </Link>                
                {event.hubs_link && eventStarted(event.startTime) && (
                  <HubsButton
                    className="flex justify-center gap-2 w-full"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://hubs.link/${event.hubs_link}`}
                  >
                    <img src={cubeImage} alt="3D Cube" width="20" />
                    <div className="text-gray-50">
                    Online 이벤트
                    </div>
                  </HubsButton>
                )}
                {event.gather_link && (
                  <GatherButton
                    className="flex justify-center gap-2 w-full"
                    target="_blank"
                    rel="noreferrer"
                    href={`https://gather.town/invite?token=${event.gather_link}`}
                  >
                    <img src={vineImage} alt="Gather Vine" width="20" />
                    <div className="text-gray-50">
                    Online 이벤트
                    </div>
                  </GatherButton>
                )}
              </StyledPopup>
            </Marker>
          ))}
        </Map>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-12">
        {sortedData[view].map((event: any) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}
export default Events;
