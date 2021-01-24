import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import useArtwork from '../../hooks/useArtwork';
import { IMGS_URL } from '../../helpers';

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
  readonly height: string;
}

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props: any) => props.height};
`;

function Artwork() {
  const { id }: Params = useParams();
  const { data, status, error } = useArtwork(id);

  if (status === 'loading') return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const { artwork } = data;
  const { artist } = artwork;

  const artworkCoverIMG = `${IMGS_URL}/${artwork.images[0]}`;

  return (
    <div>
      <SectionHeader title="Artwork Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-5xl truncate mb-2">{artwork.name}</p>
          <ImgContainer imageURL={artworkCoverIMG} height="325px" />
        </div>
        <div className="flex flex-col"></div>
      </div>
      <SectionHeader title="Artists" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        <Link key={artist.id} to={`/artist/${artist.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${artist.images[0]}`}
              height="150px"
            />
            <p className="font-header font-bold text-xl truncate mb-2 text-center uppercase">
              {artist.firstName} {artist.lastName}
            </p>
          </article>
        </Link>
      </div>
      {/* <SectionHeader title="Events" />*/}
    </div>
  );
}

export default Artwork;
