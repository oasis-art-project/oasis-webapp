import { useMutation, useQueryClient } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import useAuth from '../../hooks/useAuth';
import { createArtwork, updateArtworkPic } from '../../hooks/addNewArtwork';
import ArtworkImage from './ArtworkImage';
import ArtworkInfo from './ArtworkInfo';
import { useState } from 'react';


function AddArtwork() {
  const queryClient = useQueryClient();
  const auth: any = useAuth();
  const [artworkID, setArtworkID] = useState(null);
    
  const { addToast } = useToasts();

  const mutationsOptions = {
    onSuccess: (data: any) => {
      setArtworkID(data.id);
      addToast('Saved Successfully', { appearance: 'success' });
    },
    onError: (error: any) => {
      const code = error.response.status;
      let message = error.response.data?.msg || null;
      if (!message) message = 'Error on save';
      addToast(`${code} - ${message}`, { appearance: 'error' });
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  };

  const artworkMutation = useMutation(createArtwork, mutationsOptions);

  const { mutate: picMutation } = useMutation(updateArtworkPic, mutationsOptions);

  const handlePicSummit = (values: any) => {
    const request = values.file;  
    picMutation({ request, token: auth.user.token, id: artworkID });
  };

  const handleInfoSummit = (values: any) => {
    artworkMutation.mutate({ update: values, token: auth.user.token });
  };

  return (
    <>
    <ArtworkInfo mutation={handleInfoSummit} />
    {artworkID && <ArtworkImage picMutation={handlePicSummit} />}      
    </>
  );
}

export default AddArtwork;