import { Link, useLocation } from 'react-router-dom';
import useArtists from '../../hooks/useArtists';
import { IMGS_URL } from '../../helpers';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import { useState } from 'react';
import { contains } from '../../helpers/arrayUtils';

const formatName = (first: string, last: string) => {
  return (last + ' ' + first).trim();
};


const Wrapper = styled.div`
  position: relative;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 75%;
  }
`;

function SelectArtists() {
  // const location = useLocation();
  // console.log(location);

  const { status, data, error } = useArtists();
  const [selected, setSelected] = useState(['']);

  if (status === 'loading') return <Loader />;
  if (error) return <div>Error</div>;

  const sortedData = data.users.sort((a: any, b: any) => {
    const nameA = formatName(a.firstName, a.lastName);
    const nameB = formatName(b.firstName, b.lastName);
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });

  function toggleSelected(id: string) {
    if (contains(selected, id)) {
      const remainingIds = selected.filter(sid => id !== sid);
      setSelected(remainingIds);
    } else {
      setSelected([...selected, id]);
    }
  }  

  return (
    <div>

      <Link
        className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
        to="/editartists" /* go to prev page */
      >
        Select and save
      </Link>

      <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-1 mb-1">
        {sortedData.map((artist: any) => (        
          artist.confirmed && (
            
            <div id={artist.id} onClick={() => toggleSelected(artist.id)}>
              
              <article className="flex flex-end flex-col h-full justify-end" >
                <p className="font-header font-bold text-base md:truncate mb-1 uppercase">
                  {(artist.firstName + ' ' + artist.lastName).trim()}
                </p>
                <Wrapper>
                <img
                  className="mb-2"
                  src={`${IMGS_URL}/${artist.prevImages[0]}`}
                  alt={(artist.firstName + ' ' + artist.lastName).trim()}
                />
                </Wrapper>
                {contains(selected, artist.id) && (
                <p className="font-header font-bold text-base md:truncate mb-1 uppercase"> 
                  SELECTED
                </p>)}
              </article>
            </ div>


          )
        ))}
      </div>
    </div>
  );
}

export default SelectArtists;
