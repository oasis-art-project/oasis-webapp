import { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import { useFormik } from 'formik';
import useAuth from '../../hooks/useAuth';
import useUserProfile, { updateProfile } from '../../hooks/useUserProfile';
import { registerInfoQuery } from '../../hooks/useRegister';

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short, enter at least two characters')
    .max(50, 'Too long, maximum 50 characters')
    .required('Required'),
  lastName: Yup.string().max(50, 'Too long, maximum 50 characters'),
  phone: Yup.string().max(10, 'Too long, maximum 10 characters'),
  website: Yup.string().max(100, 'Too long, maximum 100 characters'),
  instagram: Yup.string().max(30, 'Too long, maximum 30 characters'),
  youtube: Yup.string().max(30, 'Too long, maximum 30 characters'),
  bio: Yup.string().max(2000, 'Too long, maximum 2000 characters'),
});

function ProfileForm(props: any) {
  const { user, mutation, email } = props;
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: email || '',
      phone: user.phone || '',
      bio: user.bio || '',
      website: user.homepage || '',
      instagram: user.instagram || '',
      youtube: user.youtube || '',
    },
    validationSchema: profileSchema,
    onSubmit: (values: any) => {
      mutation(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-10 gap-6">
              <div className="col-span-10 sm:col-span-5">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.firstName}</p>
                )}
              </div>

              <div className="col-span-10 sm:col-span-5">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.lastName}</p>
                )}
              </div>

              <div className="col-span-10 sm:col-span-7">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.email}</p>
                )}
              </div>

              <div className="col-span-10 sm:col-span-7">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number (only used to send direct message notifications)
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.errors.phone && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.phone}</p>
                )}
              </div>

              <div className="col-span-10">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Short bio
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.bio}
                  />
                  {formik.errors.bio && (
                    <p className="mt-2 text-sm text-red-500">{formik.errors.bio}</p>
                  )}
                </div>
              </div>

              <div className="col-span-10  sm:col-span-7">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <div className="mt-1 flex shadow-sm">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.website}
                  />
                  {formik.errors.website && (
                    <p className="mt-2 text-sm text-red-500">{formik.errors.website}</p>
                  )}
                </div>
              </div>

              <div className="col-span-10  sm:col-span-5">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.instagram}
                />
                {formik.errors.instagram && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.instagram}</p>
                )}
              </div>

              <div className="col-span-10  sm:col-span-5">
                <label htmlFor="youtube" className="block text-sm font-medium text-gray-700">
                  YouTube
                </label>
                <input
                  type="text"
                  name="youtube"
                  id="youtube"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.youtube}
                />
                {formik.errors.youtube && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.youtube}</p>
                )}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Settings() {
  const queryClient = useQueryClient();
  const auth: any = useAuth();
  console.log(auth);
  const { data, error, isLoading } = useUserProfile(auth.user.activeUser.id);

  const [successMsg, setSuccessMsg]: [any, any] = useState('');
  const [errorMsg, setErrorMsg]: [any, any] = useState(null);
  const { mutate } = useMutation(updateProfile, {
    onSuccess: () => {
      setSuccessMsg(
        'Form submited succesfully 🎉 You will receive an email to confirm your registration.'
      );
    },
    onError: () => {
      setErrorMsg(
        'There was an error uploading the form 🙁 Refresh this page to try again. Make sure to use an email address that is not registered already in OASIS.'
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });
  const {
    user: { activeUser: user },
  } = auth;

  const handleSummit = (values: any) => {
    mutate({ update: values, token: auth.user.token });
  };

  if (isLoading) return <div>Loading</div>;

  return <ProfileForm user={data.user} email={user.email} mutation={handleSummit} />;

  // const user : any = data.user || null;

  //
}

export default Settings;
