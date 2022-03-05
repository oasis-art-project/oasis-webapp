/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { ReactSmartScroller } from 'react-smart-scroller';
import HubsDialog from './HubsDialog';
import YoutubeDialog from './YoutubeDialog';
import GatherDialog from './GatherDialog';
import useEvent from '../../hooks/useEvent';
import { datesParser, eventStarted, IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';
import cubeImage from '../../assets/img/3dcube.png';
import videoImage from '../../assets/img/video.png';
import vineImage from '../../assets/img/vine.png';

const formatName = (first: string, last: string) => {
  return (last + ' ' + first).trim();
};

interface Params {
  id: string;
}

const Title = styled.div`
  letter-spacing: 2px;
`;

const EventButton = styled.span`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

const EventImage = styled.img`
  width: 50px;
  height: 50px;
`;

const SectionHeader = ({ title = '' }) => {
  return (
    <div className="w-full mb-10 mt-5">
      <div className="w-full border border-gray-300"></div>
      <Title className="m-2 uppercase font-header text-darkGray">{title}</Title>
    </div>
  );
};


const generateHubsLink = (hubs_link: string) => {
  if (hubs_link.includes("https")) {
    return hubs_link;
  } else {
    return "https://hubs.link/" + hubs_link;
  }  
};

interface ImageProps {
  readonly imageURL: string;
  readonly width: string;
  readonly height: string;
}

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

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
`;

function Event() {
  const { id }: Params = useParams();
  const { status, data, error } = useEvent(id);
  
  const [showHubsDialog, setShowHubsDialog] = useState(false);
  const [showYoutubeDialog, setShowYoutubeDialog] = useState(false);
  const [showGatherDialog, setShowGatherDialog] = useState(false);
  const openHubsDialog = () => setShowHubsDialog(true);
  const closeHubsDialog = () => setShowHubsDialog(false);
  const openYoutubeDialog = () => setShowYoutubeDialog(true);
  const closeYoutubeDialog = () => setShowYoutubeDialog(false);
  const openGatherDialog = () => setShowGatherDialog(true);
  const closeGatherDialog = () => setShowGatherDialog(false);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { startTime, endTime, fullImages, place, description, artists, artworks } = data.event;
  const { fullImages: placeImages, id: placeId } = place;

  const sortedArtists = artists.sort((a: any, b: any) => {
    const nameA = formatName(a.firstName, a.lastName);
    const nameB = formatName(b.firstName, b.lastName);
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  const eventArtists = sortedArtists.map((artist: any) => ({
    name: `${artist.firstName} ${artist.lastName}`.trim(),
    profileImage: `${IMGS_URL}/${artist.prevImages[0]}`,
    id: artist.id,
  }));

  const sortedArtworks = artworks.sort((a: any, b: any) => {
    const nameA = formatName(a.artist.firstName, a.artist.lastName);
    const nameB = formatName(b.artist.firstName, b.artist.lastName);
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  const eventArtworks = sortedArtworks.map((artwork: any) => ({
    name: artwork.name,
    artist: artwork.artist,
    profileImage: `${IMGS_URL}/${artwork.prevImages[0]}`,
    id: artwork.id,
  }));

  const parsedDates = datesParser(startTime, endTime);
  const eventCoverIMG = `${IMGS_URL}/${fullImages[0]}`;
  const placeCoverIMG = `${IMGS_URL}/${placeImages[0]}`;

  return (
    <div className="">
      <SectionHeader title="Event Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end overflow-hidden">
          <p className="font-header font-bold text-5xl lg:truncate mb-2">{data.event.name}</p>
          <ImgContainer imageURL={eventCoverIMG} height="325px" width="100%" />
        </div>
        <div className="flex flex-col">
          <p className="font-header font-bold text-2xl uppercase">AT {data.event.place.name}</p>
          <p className="font-header font-bold text-2xl mb-2">{parsedDates}</p>
          <Link to={`/place/${placeId}`}>
            <ImgContainer imageURL={placeCoverIMG} height="325px" width="100%" />
          </Link>
        </div>
      </div>
      <p className="mb-8 text-gray-500">{description}</p>
      {data.event.link && (
        <a
          className="flex items-center content-center"
          target="_blank"
          rel="noreferrer"
          href={data.event.link}
        >
          <FaExternalLinkSquareAlt className="text-xl mr-3" />
          <span className="font-header font-bold text-xl my-3 m items-center">
            More information
          </span>
        </a>
      )}      

      {data.event.hubs_link && eventStarted(startTime) && (
        <EventButton
          className="flex justify-center gap-5 w-full"
          onClick={openHubsDialog}
        >
          <EventImage src={cubeImage} alt="3D Cube" />
          <div>
            Open virtual event
            <br />
            and attend online
          </div>
        </EventButton>
      )}

      {data.event.youtube_link && eventStarted(startTime) && (
        <EventButton className="flex justify-center gap-5 w-full" 
           onClick={openYoutubeDialog}>
          <EventImage src={videoImage} alt="YouTube" />
          <div>
            Open virtual event
            <br />
            and attend online
          </div>
        </EventButton>
      )}

      {data.event.gather_link && eventStarted(startTime) && (
        <EventButton className="flex justify-center gap-5 w-full" 
           onClick={openGatherDialog}>
          <EventImage src={vineImage} alt="Gather.Town" />
          <div>
            Open virtual event
            <br />
            and attend online
          </div>
        </EventButton>
      )}

      {0 < eventArtists.length && <SectionHeader title="Participating artists" />}
      <div className="w-full mb-10 mt-10">
        <ReactSmartScroller
          draggable
          spacing={12}
          thumb={
            <div
              style={{
                width: 100,
                height: 10,
                backgroundColor: 'black',
              }}
            />
          }
        >
          {eventArtists.map((artist: any) => (
            <Link key={artist.id} to={`/artist/${artist.id}`}>
              <article className="flex flex-end flex-col h-full justify-end items-center">
                <ImgContainer
                  className="mb-2"
                  imageURL={artist.profileImage}
                  width="150px"
                  height="150px"
                />
                <p className="font-header font-bold text-md truncate mb-2 text-center uppercase">
                  {artist.name}
                </p>
              </article>
            </Link>
          ))}
        </ReactSmartScroller>
      </div>

      {0 < eventArtworks.length && <SectionHeader title="Featured artworks" />}
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5 w-full overflow-hidden">
        {eventArtworks.map((artwork: any) => (
          <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
            <article className="flex flex-end flex-col justify-end">
              {1 < eventArtists.length && (
                <p className="text-center font-header font-bold text-xl lg:truncate mb-1 uppercase">
                  {(artwork.artist.firstName + ' ' + artwork.artist.lastName).trim()}
                </p>            
              )}
              <Wrapper>
                <img alt={artwork.name} src={artwork.profileImage} />
              </Wrapper>
              <p className="text-center md:truncate mb-1 text-gray-500">{artwork.name}</p>
            </article>
          </Link>
        ))}
      </div>

      {/* DIALOGS */}
      {data.event.hubs_link && (
        <HubsDialog
          showDialog={showHubsDialog}
          closeDialog={closeHubsDialog}
          link={generateHubsLink(`${data.event.hubs_link}`)}
        />
      )}
      {data.event.youtube_link && (
        <YoutubeDialog
          showDialog={showYoutubeDialog}
          closeDialog={closeYoutubeDialog}
          link={data.event.youtube_link}
        />
      )}
      {data.event.gather_link && (
        <GatherDialog
          showDialog={showGatherDialog}
          closeDialog={closeGatherDialog}
          link={data.event.gather_link}
        />
      )}      

    </div>
  );
}

export default Event;
