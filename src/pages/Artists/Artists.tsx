/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { Link } from 'react-router-dom';
import useArtists from '../../hooks/useArtists';
import { IMGS_URL } from '../../helpers';
import styled from 'styled-components';
import Loader from '../../components/Loader';

const formatName = (first: string, last: string) => {
  return (last + ' ' + first).trim();
};

const Tags = styled.p`
  min-width: 100%;
  min-height: 1.2em;
`;

function Artists() {
  const { status, data, error } = useArtists();

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const sortedData = data.users.sort((a: any, b: any) => {
    const nameA = formatName(a.firstName, a.lastName);
    const nameB = formatName(b.firstName, b.lastName);
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
      {sortedData.map((artist: any) => (        
        artist.confirmed && (
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
              <Tags className="md:truncate mb-1 leading-4">
                {artist.tags.split(';').map((tag: any) => tag + ' ')}
              </Tags>
            </article>
          </Link>
        )
      ))}
    </div>
  );
}

export default Artists;
