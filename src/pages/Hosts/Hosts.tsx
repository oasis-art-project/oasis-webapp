/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { Link } from 'react-router-dom';
import useHosts from '../../hooks/useHosts';
import { IMGS_URL } from '../../helpers';
import styled from 'styled-components';
import Loader from '../../components/Loader';

const Tags = styled.p`
  min-width: 100%;
  min-height: 1.2em;
`;

function Hosts() {
  const { status, data, error } = useHosts();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
      {data.users.map((host: any) => (
        (host.confirmed && (host.active == null || host.active)) && (
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
              <Tags className="md:truncate mb-1 leading-4">
                {host.tags.split(';').map((tag: any) => tag + ' ')}
              </Tags>
            </article>
          </Link>
        )
      ))}
    </div>
  );
}

export default Hosts;
