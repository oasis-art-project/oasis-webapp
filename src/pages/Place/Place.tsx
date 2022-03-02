/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { IoChatboxSharp } from 'react-icons/io5';
import SectionHeader from '../../components/SectionHeader';
import usePlace from '../../hooks/usePlace';
import { IMGS_URL } from '../../helpers';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { useState } from 'react';

import cubeImage from '../../assets/img/3dcube.png';

const MatterportImage = styled.img`
  width: 50px;
  height: 50px;
`;

const MatterportButton = styled.a`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

interface ImageProps {
  readonly imageURL: string;
  readonly width: string;
  readonly height: string;
}

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
`;

const formatChatRoom = (id1: any, id2: any) => {
  if (id1 < id2) return id1 + '-' + id2;
  else return id2 + '-' + id1;
};

interface Params {
  id: string;
}

function Place() {
  const { id }: Params = useParams();
  const { status, data, error } = usePlace(id);
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);  

  const auth: any = useAuth();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { place } = data;
  const { events } = place;
  const placeEvents = events.map((event: any) => ({
    name: event.name,
    eventCover: `${IMGS_URL}/${event.prevImages[0]}`,
    id: event.id,
  }));

  const placeCoverIMG = `${IMGS_URL}/${place.fullImages[0]}`;

  return (
    <div className="">
      <SectionHeader title="Place Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-4xl lg:truncate mb-2 pb-1">
            {place.name}
          </p>
          <ImgContainer imageURL={placeCoverIMG} height="325px" width="100%" />
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-0 md:mt-12 mb-3">
            {place.homepage && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={place.homepage}
              >
                <FaHome className="text-xl" />
                <span className="font-header font-bold text-lg my-1 ml-3 items-center">
                  Home page
                </span>
              </a>
            )}
            {place.host.showChat && !auth.user && (
              <span onClick={open} className="flex items-center">
                <IoChatboxSharp className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">Chat with host</span>
              </span>
            )}
            {auth.user && auth.user.identity !== id && (
              <Link
                to={`/room/${formatChatRoom(auth.user.identity, place.host.id)}`}
                className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl flex items-center justify-center mt-5"
              >
                <IoChatboxSharp className="mr-6" />
                Chat with host
              </Link>
            )}
            {place.instagram && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={`https://instagram.com/${place.instagram}`}
              >
                <FaInstagram className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">
                  Instagram
                </span>
              </a>
            )}
            {place.facebook && (
              <a
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
                href={`https://facebook.com/${place.facebook}`}
              >
                <FaFacebookSquare className="text-xl" />
                <span className="font-header font-bold text-lg my-3 ml-3 items-center">
                  Facebook
                </span>
              </a>
            )}
          </div>
          <p className="font-header text-lg mb-3">{place.description}</p>
        </div>
      </div>

      {place.matterport_link && (
        <MatterportButton
          className="flex justify-center gap-5 w-full"
          target="_blank"
          rel="noreferrer"
          href={`https://my.matterport.com/show/?m=${place.matterport_link}`}
        >
          <MatterportImage src={cubeImage} alt="3D Cube" />
          <div>
            Launch Virtual Gallery
            <br />
            and view online
          </div>
        </MatterportButton>
      )}      

      <SectionHeader title="Host" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        <Link key={place.host.id} to={`/host/${place.host.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${place.host.prevImages[0]}`}
              width="150px"
              height="150px"
            />
            <p className="font-header font-bold text-md truncate mb-2 uppercase">
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
              <ImgContainer className="mb-2" imageURL={event.eventCover} height="150px" width="100%" />
              <p className="truncate mb-2 text-gray-500">{event.name}</p>
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

export default Place;
