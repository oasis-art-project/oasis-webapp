import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useEvent from '../../hooks/useEvent';
import { datesParser, IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';

import hubs from '../../assets/img/3dcube.png';

interface Params {
  id: string;
}

const Title = styled.div`
  letter-spacing: 2px;
`;

const HubsButton = styled.a`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

const SectionHeader = ({ title = '' }) => {
  return (
    <div className="w-full mb-10 mt-5">
      <div className="w-full border border-gray-300"></div>
      <Title className="m-2 uppercase font-header text-darkGray">{title}</Title>
    </div>
  );
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

function Event() {
  const { id }: Params = useParams();
  const { status, data, error } = useEvent(id);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { startTime, endTime, images, place, description, artists, artworks } = data.event;
  const { images: placeImages, id: placeId } = place;
  const eventArtist = artists.map((artist: any) => ({
    name: `${artist.firstName} ${artist.lastName}`.trim(),
    profileImage: `${IMGS_URL}/${artist.images[0]}`,
    id: artist.id,
  }));
  const eventArtworks = artworks.map((artwork: any) => ({
    name: artwork.name,
    profileImage: `${IMGS_URL}/${artwork.images[0]}`,
    id: artwork.id,
  }));
  const parsedDates = datesParser(startTime, endTime);
  const eventCoverIMG = `${IMGS_URL}/${images[0]}`;
  const placeCoverIMG = `${IMGS_URL}/${placeImages[0]}`;

  return (
    <div className="">
      <SectionHeader title="Event Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end overflow-hidden">
          <p className="font-header font-bold text-5xl lg:truncate mb-2">{data.event.name}</p>
          <ImgContainer imageURL={eventCoverIMG} height="325px" />
        </div>
        <div className="flex flex-col">
          <p className="font-header font-bold text-2xl uppercase">AT {data.event.place.name}</p>
          <p className="font-header font-bold text-2xl mb-2">{parsedDates}</p>
          <Link to={`/place/${placeId}`}>
            <ImgContainer imageURL={placeCoverIMG} height="325px" />
          </Link>
        </div>
      </div>
      <p className="mb-8 text-gray-500">{description}</p>

      {data.event.hubs_link && (
        <HubsButton
          className="flex justify-center gap-5 w-full"
          target="_blank"
          rel="noreferrer"
          href={`https://hubs.link/${data.event.hubs_link}`}
        >
          <img src={hubs} alt="3D Cube" width="50" />
          <div>
            Launch Virtual Gallery
            <br />
            and attend online
          </div>
        </HubsButton>
      )}

      <SectionHeader title="Participating artists" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        {eventArtist.map((artist: any) => (
          <Link key={artist.id} to={`/artist/${artist.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={artist.profileImage} height="150px" />
              <p className="font-header font-bold text-xl truncate mb-2 text-center uppercase">
                {artist.name}
              </p>
            </article>
          </Link>
        ))}
      </div>
      <SectionHeader title="Artworks" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {eventArtworks.map((artwork: any) => (
          <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={artwork.profileImage} height="150px" />
              <p className="truncate mb-2 text-gray-500">{artwork.name}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Event;
