import { Link } from 'react-router-dom';
import useHosts from '../../hooks/useHosts';
import { IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';

function Hosts() {
  const { status, data, error } = useHosts();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
      {data.users.map((host: any) => (
        <Link key={host.id} to={`/host/${host.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <p className="font-header font-bold text-xl lg:truncate mb-1 uppercase">
              {(host.firstName + ' ' + host.lastName).trim()}
            </p>
            <img
              className="mb-2"
              src={`${IMGS_URL}/${host.prevImages[0]}`}
              alt={(host.firstName + ' ' + host.lastName).trim()}
            />
            <p className="lg:truncate mb-1">{host.tags.split(';').map((tag: any) => tag + ' ')}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default Hosts;
