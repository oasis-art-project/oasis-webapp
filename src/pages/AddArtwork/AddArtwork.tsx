import { useMutation, useQueryClient } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import useAuth from '../../hooks/useAuth';
import { updateArtwork, updateArtworkPic } from '../../hooks/addNewArtwork';
import ArtworkImage from './ArtworkImage';
import ArtworkInfo from './ArtworkInfo';


function AddArtwork() {
  const queryClient = useQueryClient();
  const auth: any = useAuth();
    
  const { addToast } = useToasts();
  const {
    user: { activeUser: user },
  } = auth;
  

  const mutationsOptions = {
    onSuccess: () => {
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

  const { mutate: artworkMutation } = useMutation(updateArtwork, mutationsOptions);

  const { mutate: picMutation } = useMutation(updateArtworkPic, mutationsOptions);

  const handlePicSummit = (values: any) => {
    const request = values.file;  
    picMutation({ request, token: auth.user.token, id: auth.user.activeUser.id });
  };

  const handleInfoSummit = (values: any) => {
    artworkMutation({ update: values, token: auth.user.token });
  };

  return (
    <>
      <ArtworkImage user={user} picMutation={handlePicSummit} />
      <ArtworkInfo user={user} email={user.email} mutation={handleInfoSummit} />
    </>
  );
}

export default AddArtwork;