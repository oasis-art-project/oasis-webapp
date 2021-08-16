import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { ReactSmartScroller } from 'react-smart-scroller';
import { Dialog } from '@reach/dialog';
import useEvent from '../../hooks/useEvent';
import { datesParser, eventStarted, IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';
import cubeImage from '../../assets/img/3dcube.png';
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

const HubsImage = styled.img`
  width: 50px;
  height: 50px;
`;

const GatherImage = styled.img`
  width: 50px;
  height: 50px;
`;


const HubsButton = styled.span`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

const GatherButton = styled.span`
  color: white;
  background-color: black;
  padding: 1rem;
  text-align: center;
`;

const StyledDialog = styled(Dialog)`
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
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
  const [showDialogHubs, setShowDialogOnlineEvent] = useState(false);
  const openHubsDialog = () => setShowDialogOnlineEvent(true);
  const closeHubsDialog = () => setShowDialogOnlineEvent(false);
  const openGatherDialog = () => setShowDialogOnlineEvent(true);
  const closeGatherDialog = () => setShowDialogOnlineEvent(false);

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
      <SectionHeader title="이벤트 정보" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end overflow-hidden">
          <p className="font-header font-bold text-5xl lg:truncate mb-2">{data.event.name}</p>
          <ImgContainer imageURL={eventCoverIMG} height="325px" width="100%" />
        </div>
        <div className="flex flex-col">
          <p className="font-header font-bold text-2xl uppercase">{data.event.place.name}에서</p>
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
            추가 정보
          </span>
        </a>
      )}      

      {data.event.hubs_link && eventStarted(startTime) && (
        <HubsButton
          className="flex justify-center gap-5 w-full"
          onClick={openHubsDialog}
        >
          <HubsImage src={cubeImage} alt="3D Cube" />
          <div>
            모질라 허브 Mozilla Hubs 열어주세요
            <br />
            그리고 온라인으로 참석 
          </div>
        </HubsButton>
      )}

      {data.event.gather_link && (
        <GatherButton
          className="flex justify-center gap-5 w-full"
          onClick={openGatherDialog}
        >
          <GatherImage src={vineImage} alt="Gather Vine" />
          <div>
            게더타운 Gather.Town 열어주세요
            <br />
            그리고 온라인으로 참석 
          </div>
        </GatherButton>
      )}


      {0 < eventArtists.length && (<SectionHeader title="Participating artists" />)}
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

      {0 < eventArtworks.length && (<SectionHeader title="Featured artworks" />)}      
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

      <StyledDialog isOpen={showDialogHubs} onDismiss={closeHubsDialog} aria-label="Hubs intro">
        <button className="close-button float-rigt" onClick={closeHubsDialog}>
          <span aria-hidden>×</span>
        </button>
        <div className="relative text-center">
          <p className="mt-6 mb-6 text-xl font-header">
            OASIS will now take you to the virtual event on Mozilla Hubs. Some important instructions:
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>1)</b> Select <b>JOIN ROOM</b> in the next page. Enter on Device only if you have a VR headset.
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
          <b>2)</b> After joining, use the <b>W and S</b> keys to move forward/backwards, and <b>mouse pointer</b> to set direction.
          </p>
          <p className="mt-6 mb-12 text-xl font-header">
          <b>3)</b> With a phone, <b>PINCH IN/OUT</b> to move backwards/foward, and <b>move the phone</b> to set direction.
          </p>          
          <a className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
             target="_blank"
             rel="noreferrer"                        
             href={`https://hubs.link/${data.event.hubs_link}`}
          >
            Continue
          </a>
        </div>
      </StyledDialog>


      <StyledDialog isOpen={showDialogHubs} onDismiss={closeGatherDialog} aria-label="Gather intro">
        <button className="close-button float-rigt" onClick={closeGatherDialog}>
          <span aria-hidden>×</span>
        </button>
        <div className="relative text-center">
          <p className="mt-6 mb-6 text-xl font-header">
            OASIS will now take you to the virtual event on Gather.Town. Some important instructions:
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>1)</b> Select your character in the next page. Make sure to configure.
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
          <b>2)</b> After joining, use the arrow keys to move around, and get closer to other users to listen and/or speak.
          </p>
          <p className="mt-6 mb-12 text-xl font-header">
          <b>3)</b> You can disable/enable the microphone and camera at anytime.
          </p>          
          <a className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
             target="_blank"
             rel="noreferrer"                        
             href={`https://gather.town/invite?token=${data.event.gather_link}`}
          >
            Continue
          </a>
        </div>
      </StyledDialog>

    </div>
  );
}

export default Event;
