import { Link } from 'react-router-dom';
import useArtworks from '../../hooks/useArtworks';
import { IMGS_URL } from '../../helpers';
import styled from 'styled-components';
import Loader from '../../components/Loader';

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

const formatName = (first: string, last: string) => {
  return (last + ' ' + first).trim();
};

function SelectArtworks() {
  const { status, data, error } = useArtworks();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const sortedArtworks = data.artworks.sort((a: any, b: any) => {
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

  return (
    <div>
      <Link
        className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
        to="/editartists" /* go to prev page */
      >
        Select and save
      </Link>
    
        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-12 mb-5 w-full overflow-hidden">
        {eventArtworks.map((artwork: any) => (
        <Link key={artwork.id} to={`/artwork/${artwork.id}`}>
            <article className="flex flex-end flex-col justify-end">
            <p className="text-center font-header font-bold text-xl lg:truncate mb-1 uppercase">
                {(artwork.artist.firstName + ' ' + artwork.artist.lastName).trim()}
            </p>          
            <Wrapper>
                <img alt={artwork.name} src={artwork.profileImage} />
            </Wrapper>
            <p className="text-center md:truncate mb-1 text-gray-500">{artwork.name}</p>
            </article>
        </Link>
        ))}
    </div>
  </div>
  );
}

export default SelectArtworks;
