import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import SectionHeader from '../../components/SectionHeader';
import usePlace from '../../hooks/usePlace';
import { IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';

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

interface Params {
  id: string;
}

function Place() {
  const { id }: Params = useParams();
  const { status, data, error } = usePlace(id);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { place } = data;
  const { events } = place;
  const placeEvents = events.map((event: any) => ({
    name: event.name,
    eventCover: `${IMGS_URL}/${event.images[0]}`,
    id: event.id,
  }));

  const placeCoverIMG = `${IMGS_URL}/${place.images[0]}`;

  return (
    <div>
      <SectionHeader title="Place Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-5xl truncate mb-2">{place.name}</p>
          <ImgContainer imageURL={placeCoverIMG} height="325px" />
        </div>
        <div className="flex flex-col">
          <p className="font-header text-xl mt-12 mb-3">{place.description}</p>
          <a className="flex items-center" target="_blank" rel="noreferrer" href={place.homepage}>
            <FaHome className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Home page</span>
          </a>
          <a
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
            href={`https://instagram.com/${place.instagram}`}
          >
            <FaInstagram className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Instagram</span>
          </a>
          <a
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
            href={`https://facebook.com/${place.facebook}`}
          >
            <FaFacebookSquare className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Facebook</span>
          </a>
        </div>
      </div>

      <SectionHeader title="Host" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        <Link key={place.host.id} to={`/host/${place.host.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${place.host.images[0]}`}
              height="150px"
            />
            <p className="font-header font-bold text-xl truncate mb-2 text-center uppercase">
              {(place.host.firstName + ' ' + place.host.lastName).trim()}
            </p>
          </article>
        </Link>
      </div>

      <SectionHeader title="Events" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {placeEvents.map((event: any) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={event.eventCover} height="150px" />
              <p className="truncate mb-2 text-gray-500">{event.name}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Place;
