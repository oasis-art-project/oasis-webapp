import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInstagram } from 'react-icons/fa';
import { IoLogoVenmo, IoChatboxSharp } from 'react-icons/io5';
import useArtist from '../../hooks/useArtist';
import { IMGS_URL } from '../../helpers';

interface Params {
  id: string;
}

const Title = styled.div`
  letter-spacing: 2px;
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

function Artist() {
  const { id }: Params = useParams();
  const { status, data: userData, error } = useArtist(id);

  if (status === 'loading') return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const { user } = userData;
  const { artworks, events } = user;
  const userArtworks = artworks.map((artwork: any) => ({
    name: artwork.name,
    profileImage: `${IMGS_URL}/${artwork.images[0]}`,
    id: artwork.id,
  }));

  const userEvents = events.map((event: any) => ({
    name: event.name,
    eventCover: `${IMGS_URL}/${event.images[0]}`,
    id: event.id,
  }));

  const userCoverIMG = `${IMGS_URL}/${user.images[0]}`;

  return (
    <div className="">
      <SectionHeader title="Artist Information" />
      <p className="font-header text-3xl"></p>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-5xl truncate mb-2">
            {user.firstName} {user.lastName}
          </p>
          <ImgContainer imageURL={userCoverIMG} height="325px" />
        </div>
        <div className="flex flex-col">
          <p className="font-header text-xl mt-12 mb-3">{user.bio}</p>
          <a className="flex items-center" target="_blank" rel="noreferrer" href={user.homepage}>
            <FaHome className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Home page</span>
          </a>
          <a
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
            href={`https://instagram.com/${user.instagram}`}
          >
            <FaInstagram className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Instagram</span>
          </a>
          <a
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
            href={`https://venmo.com/${user.venmo}`}
          >
            <IoLogoVenmo className="text-2xl" />
            <span className="font-header font-bold text-xl my-3 ml-3 items-center">Venmo</span>
          </a>
          <button className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl flex items-center justify-center mt-5">
            <IoChatboxSharp className="mr-6" />
            Chat
          </button>
        </div>
      </div>
      <SectionHeader title="Artworks" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {userArtworks.map((artwork: any) => (
          <Link key={artwork.id} to={`/artworks/${artwork.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={artwork.profileImage} height="150px" />
              <p className="truncate mb-2 text-gray-500">{artwork.name}</p>
            </article>
          </Link>
        ))}
      </div>
      <SectionHeader title="Events" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {userEvents.map((event: any) => (
          <Link key={event.id} to={`/events/${event.id}`}>
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

export default Artist;
