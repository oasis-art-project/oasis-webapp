import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMGS_URL } from '../../helpers';
import useHosts from '../../hooks/useHosts';
import Loader from '../../components/Loader';

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
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${host.images[0]}`}
              height="225px"
            />
            <p className="lg:truncate mb-1">{host.tags.split(';').map((tag: any) => tag + ' ')}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}

export default Hosts;
