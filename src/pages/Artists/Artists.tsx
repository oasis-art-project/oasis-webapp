import { Link } from 'react-router-dom';
import useArtists from '../../hooks/useArtists';
import { IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';

function Artists() {
  const { status, data, error } = useArtists();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
      {data.users.map((artist: any) => (
        <Link key={artist.id} to={`/artist/${artist.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <p className="font-header font-bold text-xl md:truncate mb-1 uppercase">
              {(artist.firstName + ' ' + artist.lastName).trim()}
            </p>
            <img
              className="mb-2"
              src={`${IMGS_URL}/${artist.prevImages[0]}`}
              alt={(artist.firstName + ' ' + artist.lastName).trim()}
            />
            <p className="lg:truncate mb-1">{artist.tags.split(';').map((tag: any) => tag + " ")}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default Artists;
