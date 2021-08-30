import { useState } from 'react';
import styled from 'styled-components';
import useArtists from '../../hooks/useArtists';
import { IMGS_URL } from '../../helpers';
import Loader from '../../components/Loader';
import { Dialog } from '@reach/dialog';
import { contains } from '../../helpers/arrayUtils';
import { formatName } from '../../helpers/stringUtils';

const StyledDialog = styled(Dialog)`
@media only screen and (max-width: 600px) {
  width: 90vw;
}
`;

function EditArtistDialog(props: any) {

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
      <StyledDialog isOpen={props.showDialog} onDismiss={props.closeDialog} aria-label="Select artists">
      
      <button className="close-button float-rigt" onClick={props.closeDialog}>
        <span aria-hidden>×</span>
      </button>

      <div className="relative text-center">

        <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-1 mb-1">
          {sortedData.map((artist: any) => (        
            artist.confirmed && (
            
              <div id={artist.id} onClick={() => toggleSelected(artist.id)}>
              
                <article className="flex flex-end flex-col h-full justify-end" >
                  <p className="font-header font-bold text-base md:truncate mb-1 uppercase">
                    {(artist.firstName + ' ' + artist.lastName).trim()}
                  </p>
                  <img
                    className="mb-2"
                    src={`${IMGS_URL}/${artist.prevImages[0]}`}
                    alt={(artist.firstName + ' ' + artist.lastName).trim()}
                  />

                  <p className="font-header font-bold text-base md:truncate mb-1 uppercase">
                  {contains(selected, artist.id) ? 'YES' : 'NO' }
                  </p>

                </article>
              </ div>
            )
          ))}
        </div>

        <button
          type="button"
          className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
          aria-pressed={props.isPressed}
          onClick={() => { props.setArtists(selected); props.closeDialog(); }}
        >
          Save selection
        </button>        

      </div>

    </StyledDialog>
    );
  }

  export default EditArtistDialog;