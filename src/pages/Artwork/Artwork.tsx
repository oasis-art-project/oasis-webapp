/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import useArtwork from '../../hooks/useArtwork';
import { IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';
import { browserName, CustomView } from 'react-device-detect';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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

interface Params {
  id: string;
}

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
  height: ${(props: any) => (props.height ? props.height : '325px')};
`;

const ArtworkImage = styled.img`
  width: 100%;
`;

function Artwork() {
  const { id }: Params = useParams();
  const { data, status, error } = useArtwork(id);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const { artwork } = data;
  const { artist, events } = artwork;

  const artworkCoverIMG = `${IMGS_URL}/${artwork.fullImages[0]}`;

  const artworkEvents = events.map((event: any) => ({
    name: event.name,
    eventCover: `${IMGS_URL}/${event.prevImages[0]}`,
    id: event.id,
  }));

  return (
    <div>
      <SectionHeader title="Artwork Information" />
      <p className="font-header font-bold text-4xl mb-2 pb-1">{artwork.name}</p>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">

          <CustomView condition={browserName !== "Safari"}>
            <TransformWrapper>
              <TransformComponent>
                <ArtworkImage alt={artwork.name} src={artworkCoverIMG} />
              </TransformComponent>
            </TransformWrapper>
          </CustomView>

          <CustomView condition={browserName === "Safari"}>
            <ArtworkImage alt={artwork.name} src={artworkCoverIMG} />
          </CustomView>

        </div>
        <div className="flex flex-col">
          {artwork.year && (
            <p className="font-header text-xl my-3">
              <label className="font-bold mr-3">Year:</label>
              {artwork.year}
            </p>
          )}
          {artwork.medium && (
            <p className="font-header text-xl my-3">
              <label className="font-bold mr-3">Medium:</label>
              {artwork.medium}
            </p>
          )}
          {artwork.size && (
            <p className="font-header text-xl my-3">
              <label className="font-bold mr-3">Size:</label>
              {artwork.size}
            </p>
          )}
          {artwork.duration && (
            <p className="font-header text-xl my-3">
              <label className="font-bold mr-3">Duration:</label>
              {artwork.duration}
            </p>
          )}
          {artwork.description && <p className="font-header text-xl my-3">{artwork.description}</p>}
          {artwork.link && (
            <a
              className="flex items-center content-center"
              target="_blank"
              rel="noreferrer"
              href={artwork.link}
            >
              <FaExternalLinkSquareAlt className="text-xl mr-3" />
              <span className="font-header font-bold text-xl my-3 m items-center">
                External website
              </span>
            </a>
          )}
        </div>
      </div>
      <SectionHeader title="Artist" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        <Link key={artist.id} to={`/artist/${artist.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${artist.prevImages[0]}`}
              width="150px"
              height="150px"
            />
            <p className="font-header font-bold text-md truncate mb-2 uppercase">
              {(artist.firstName + ' ' + artist.lastName).trim()}
            </p>
          </article>
        </Link>
      </div>
      <SectionHeader title="Events" />
      <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5">
        {artworkEvents.map((event: any) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            <article className="flex flex-end flex-col h-full justify-end">
              <ImgContainer className="mb-2" imageURL={event.eventCover} height="150px" width="100%" />
              <p className="truncate mb-2 text-gray-500">{event.name}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Artwork;
