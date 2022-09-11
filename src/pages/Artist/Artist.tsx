/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube, IoChatboxSharp } from 'react-icons/io5';
import useArtist from '../../hooks/useArtist';
import { IMGS_URL } from '../../helpers';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';
import { useState } from 'react';

interface Params {
  id: string;
}

const Title = styled.div`
  letter-spacing: 2px;
`;

const ArtistImage = styled.img`
  width: 100%;
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

const Wrapper = styled.div`
  position: relative;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 90%;
  }
`;

const formatChatRoom = (id1: any, id2: any) => {
  if (id1 < id2) return id1 + '-' + id2;
  else return id2 + '-' + id1;
};

function Artist() {
  const { id }: Params = useParams();
  const { status, data: userData, error } = useArtist(id);
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const auth: any = useAuth();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { user } = userData;
  const { artworks, events } = user;
  const userArtworks = artworks.map((artwork: any) => ({
    name: artwork.name,
    profileImage: `${IMGS_URL}/${artwork.prevImages[0]}`,
    id: artwork.id,
  }));

  const userEvents = events.map((event: any) => ({
    name: event.name,
    eventCover: `${IMGS_URL}/${event.prevImages[0]}`,
    id: event.id,
  }));

  const userCoverIMG = `${IMGS_URL}/${user.fullImages[0]}`;

  return (
    <div className="">
      <SectionHeader title="Artist Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-4xl lg:truncate mb-2 pb-1">
            {(user.firstName + ' ' + user.lastName).trim()}
          </p>
          <ArtistImage src={userCoverIMG} alt={user.firstName + ' ' + user.lastName} />
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-0 md:mt-12 mb-3">
            {user.homepage && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={user.homepage}
              >
                <FaHome className="text-xl" />
                <span className="font-header font-bold text-lg my-1 ml-3 items-center">
                  Home page
                </span>
              </a>
            )}
            {user.showChat && !auth.user && (
              <span onClick={open} className="flex items-center cursor-pointer">
                <IoChatboxSharp className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">Chat</span>
              </span>
            )}
            {auth.user && auth.user.identity !== id && (
              <Link
                to={`/room/${formatChatRoom(auth.user.identity, id)}`}
                className="flex items-center cursor-pointer"
              >
                <IoChatboxSharp className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">Chat</span>
              </Link>
            )}
            {user.instagram && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={`https://instagram.com/${user.instagram}`}
              >
                <FaInstagram className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">
                  Instagram
                </span>
              </a>
            )}
            {user.youtube && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={`https://www.youtube.com/channel/${user.youtube}`}
              >
                <IoLogoYoutube className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">
                  YouTube
                </span>
              </a>
            )}
          </div>
          <p className="font-header text-lg mb-3">{user.bio}</p>
        </div>
      </div>

      {userArtworks && 0 < userArtworks.length && (
        <>
        <SectionHeader title="Artworks" /><div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
          {userArtworks.map((artwork: any) => (
            <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
              <article className="flex flex-end flex-col justify-end">
                <Wrapper>
                  <img alt={artwork.name} src={artwork.profileImage} />
                </Wrapper>
                <p className="text-center md:truncate mb-2 text-gray-500">{artwork.name}</p>
              </article>
            </Link>
          ))}
        </div>
        </>
      )}

      {userEvents && 0 < userEvents.length && (
        <>
        <SectionHeader title="Events" />
        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
          {userEvents.map((event: any) => (
            <Link key={event.id} to={`/event/${event.id}`}>
              <article className="flex flex-end flex-col h-full justify-end">
                <ImgContainer className="mb-2" imageURL={event.eventCover} height="150px" />
                <p className="truncate mb-2 text-gray-500">{event.name}</p>
              </article>
            </Link>
          ))}
        </div>        
        </>
      )}

      <Dialog isOpen={showDialog} onDismiss={close} aria-label="warning alert">
        <button className="close-button float-rigt" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <div className="relative text-center">
          <p className="mt-6 mb-12 text-xl font-header">
            Only logged-in users can chat with other users
          </p>
          <Link
            className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
            to="/login"
          >
            Login
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

export default Artist;
