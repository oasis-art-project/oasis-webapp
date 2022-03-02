/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { useState } from 'react';
import { useFormik } from 'formik';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from 'react-query';
import Loader from '../../components/Loader';
import { registerInfoQuery } from '../../hooks/useRegister';
import logo from '../../assets/img/logo-v2.png';

const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short, enter at least two characters').max(50, 'Too long, maximum 50 characters').required('Required'),
  lastName: Yup.string().max(50, 'Too long, maximum 50 characters'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().max(10, 'Too long, maximum 10 characters'),
  role: Yup.string().required('Required'),
  website: Yup.string().max(100, 'Too long, maximum 100 characters'),
  instagram: Yup.string().max(30, 'Too long, maximum 30 characters'),
  youtube: Yup.string().max(30, 'Too long, maximum 30 characters'),
  bio: Yup.string().max(2000, 'Too long, maximum 2000 characters')
});

const getRole = (role: String) => {
  if (role === 'Host') return 2;
  if (role === 'Artist') return 3;
  if (role === 'Visitor') return 4;
};

const SignupForm = () => {
  const queryClient = useQueryClient();
  const [successMsg, setSuccessMsg]: [any, any] = useState('');
  const [errorMsg, setErrorMsg]: [any, any] = useState(null);
  const { mutate, isLoading } = useMutation(registerInfoQuery, {
    onSuccess: () => {
      setSuccessMsg('Form submited succesfully 🎉 You will receive an email to confirm your registration.');
    },
    onError: () => {
      setErrorMsg('There was an error uploading the form 🙁 Refresh this page to try again. Make sure to use an email address that is not registered already in OASIS.');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'Artist',
      bio: '',
      website: '',
      instagram: '',
      youtube: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      const role = getRole(values.role);
      const userInfo = { ...values, role };
      mutate(userInfo);
    },
  });

  return (
    <div className="min-h-full flex justify-center items-center flex-col">
      <div className="absolute left-14 top-14 hidden lg:block">
        <Link className="flex items-center" to="/">
          <IoArrowBack className="text-xl mr-3" />
          Home
        </Link>
      </div>
      <img src={logo} alt="Oasis logo" width="100px" className="mb-6 lg:mt-12 mt-4" />
      
      {isLoading && (
            <div className="px-4 py-5 bg-white sm:p-6">
              <Loader />
            </div>
      )}

      {errorMsg && <div className="px-4 py-5 bg-white sm:p-6">{errorMsg}</div>}

      {successMsg && (
      <div className="px-4 py-5 bg-white sm:p-6">
        <p>{successMsg}</p>
        <br></br>
        <p>You can return to the <a className="text-gray-400 underline" href={`/`}>OASIS homepage</a>.</p>
      </div>
      )}

      {!errorMsg && !successMsg && !isLoading && (
      <div className="w-full md:w-6/12">
        <div className="mt-3 mb-32 lg:mx-auto md:mt-3 md:col-span-6">
          <div className="px-4 py-5 bg-white sm:p-6">
            <h3 className="font-header text-2xl my-4">How to create an OASIS account?</h3>

            <p>
              Thank you for your interest in joining the OASIS community! As an OASIS user, you can have one of the following roles:
            </p>

            <ol className="list-disc list-inside my-4">
              <li>
                Artist. As an OASIS artist, your get your own profile where you can upload artworks and participate in events.
              </li>
              <li>
                Host. Join as a host if you manage or own an art space where events can be take place, and want to have them listed in OASIS.
              </li>
              <li>
                Visitor. You should select this role if you are primarily interested in attending events and checking out artists' work.
              </li>
              <br />
              <p>
                Please fill the registration form below to get an OASIS account:
              </p>
            </ol>
          </div>

          <form onSubmit={formik.handleSubmit}>
              <div className="overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-10 gap-6">
                    <div className="col-span-10 sm:col-span-5">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
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

                    <div className="col-span-10  sm:col-span-7">
                      <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        autoComplete="role"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Artist</option>
                        <option>Host</option>
                        <option>Visitor</option>
                      </select>
                      {formik.errors.role && (
                        <p className="mt-2 text-sm text-red-500">{formik.errors.role}</p>
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
                      <label
                        htmlFor="instagram"
                        className="block text-sm font-medium text-gray-700"
                      >
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
      </div>
      )}
      
    </div>
  );
};

export default SignupForm;
