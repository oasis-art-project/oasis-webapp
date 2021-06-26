import { useMutation, useQueryClient } from 'react-query';
import { useToasts } from 'react-toast-notifications';
import useAuth from '../../hooks/useAuth';
import useUserProfile, { updateProfile, updateProfilePic } from '../../hooks/useUserProfile';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';

function Settings() {
  const queryClient = useQueryClient();
  const auth: any = useAuth();
  const { data: userResponse, isLoading } = useUserProfile(auth.user.activeUser.id);
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
  const { mutate: profileMutation } = useMutation(updateProfile, mutationsOptions);

  const { mutate: picMutation } = useMutation(updateProfilePic, mutationsOptions);

  const handlePicSummit = (values: any) => {
    const request = values.file;  
    picMutation({ request, token: auth.user.token, id: auth.user.activeUser.id });
  };

  const handleInfoSummit = (values: any) => {
    profileMutation({ update: values, token: auth.user.token });
  };

  if (isLoading) return <div>Loading</div>;

  const { user: userFromRequest } = userResponse;
  return (
    <>
      <ProfileImage user={userFromRequest} picMutation={handlePicSummit} />
      <ProfileInfo user={userFromRequest} email={user.email} mutation={handleInfoSummit} />
    </>
  );
}

export default Settings;
