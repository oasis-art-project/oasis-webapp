import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useEvents from '../../hooks/useEvents';
import { IMGS_URL } from '../../helpers/index';

const Container = styled.section`
  max-width: 1280px;
  /* @media only screen and (max-width: 1280px) {
    width: 99%;
  } */
`;

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
}

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 270px;
`;

const ArtisName = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`;

const Card = ({
  id = null,
  name = '',
  description = '',
  startTime = '',
  endTime = '',
  artists = [] as any,
  images = [] as any,
  place = {} as any,
}) => {
  const artist = artistSelection(artists);
  const imgURL = `${IMGS_URL}/${images[0]}`;
  return (
    <Link to={`/event/${id}`}>
      <article>
        <p>{name}</p>
        <ArtisName className="font-header font-bold text-xl my-2">{artist}</ArtisName>
        <ImgContainer imageURL={imgURL} />
        <p>{place.name}</p>
      </article>
    </Link>
  );
};

function Home() {
  const { status, data, error } = useEvents();

  if (status === 'error') return <div>Error</div>;
  return (
    <Container className="lg:container md:mx-auto md:px-8 sm:px-4">
      <Navbar />
      {status === 'loading' && <div>Loading</div>}
      {error && <div>Error</div>}
      {status === 'success' && (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 my-12">
          {data.events.map((event: any) => (
            <Card key={event.id} {...event} />
          ))}
        </div>
      )}
    </Container>
  );
}
export default Home;
