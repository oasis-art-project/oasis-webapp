/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube, IoChatboxSharp } from 'react-icons/io5';
import useHost from '../../hooks/useHost';
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

const HostImage = styled.img`
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

const formatChatRoom = (id1: any, id2: any) => {
  if (id1 < id2) return id1 + '-' + id2;
  else return id2 + '-' + id1;
};

function Host() {
  const { id }: Params = useParams();
  const { status, data: userData, error } = useHost(id);
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const auth: any = useAuth();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { user } = userData;
  const { places } = user;
  const userPlaces = places.map((place: any) => ({
    name: place.name,
    profileImage: `${IMGS_URL}/${place.prevImages[0]}`,
    id: place.id,
  }));

  const userCoverIMG = `${IMGS_URL}/${user.fullImages[0]}`;

  return (
    <div className="">
      <SectionHeader title="Host Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-4xl lg:truncate mb-2 pb-1">
            {(user.firstName + ' ' + user.lastName).trim()}
          </p>
          <HostImage src={userCoverIMG} alt={user.firstName + ' ' + user.lastName} />
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
              <span onClick={open} className="flex items-center">
                <IoChatboxSharp className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">Chat</span>
              </span>
            )}
            {auth.user && auth.user.identity !== id && (
              <Link
                to={`/room/${formatChatRoom(auth.user.identity, id)}`}
                className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl flex items-center justify-center mt-5"
              >
                <IoChatboxSharp className="mr-6" />
                Chat
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
      <SectionHeader title="Places" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {userPlaces.map((place: any) => (
          <Link key={place.id} to={`/place/${place.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={place.profileImage} height="150px" />
              <p className="truncate mb-2 text-gray-500">{place.name}</p>
            </article>
          </Link>
        ))}
      </div>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        <p className="mt-6 mb-12 text-xl font-header">Only logged-in users can chat with other users</p>
        <Link
          className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
          to="/login"
        >
          Login
        </Link>
      </Dialog>
    </div>
  );
}

export default Host;
