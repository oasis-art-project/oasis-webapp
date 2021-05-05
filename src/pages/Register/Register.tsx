import { useFormik } from 'formik';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/img/logo-v2.png';

const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().email('Invalid email').required('Required'),
  role: Yup.string().required('Required'),
  website: Yup.string(),
  instagram: Yup.string(),
  youtube: Yup.string(),
});

const SignupForm = () => {
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
      console.log(values);
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
      <div className="w-full md:w-6/12">
        <div className="mt-3 mb-32 lg:mx-auto md:mt-3 md:col-span-6">
          <div className="px-4 py-5 bg-white sm:p-6">
            <h3 className="font-header text-2xl my-4">How to create an OASIS account?</h3>

            <p>
              Thank you for your interest in joining the OASIS community! Right now the platform is
              still being developed and tested, with some functions are not yet ready, including
              account creation. However, we can create an account for you if you send us an email
              providing some very basic information about you and why you are interested in OASIS.
            </p>

            <br />
            <p>
              Please note that there are three kinds of accounts in OASIS, and you have to pick one
              (at least initially):
            </p>

            <ol className="list-disc list-inside my-4">
              <li>
                Artist accounts. These accounts contain basic biographic information, representative
                images of seleted artworks, and links to porfolio page and social media accounts
                (Instagram, YouTube).
              </li>
              <li>
                Host accounts. Hosts are people who manage or own art spaces where events can be
                take place (physical or virtual). Under one of these accounts, hosts can enter their
                hosted spaces and the events at each space.
              </li>
              <li>
                Visitor accounts. These accounts are meant for people primarily interested in
                attending the events. Currently, these accounts simply allow users to connect with
                artists and hosts by using the chat function in the OASIS website.
              </li>
              <br />
              <p>
                All the information about artworks and events in the OASIS website is publicly
                available for vieweing without requiring an account ❤️
              </p>
              <br />
              <p>
                If you would like to have an account during the testing stage of OASIS, either as an
                artist, host, or visitor, please fiel this form:
              </p>
            </ol>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className=" overflow-hidden sm:rounded-md">
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
                      Phone
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
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300"
                        placeholder="you@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.bio}
                      />
                      {formik.errors.bio && (
                        <p className="mt-2 text-sm text-red-500">{formik.errors.bio}</p>
                      )}
                    </div>
                  </div>

                  <div className="col-span-10  sm:col-span-7">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Website
                    </label>
                    <div className="mt-1 flex shadow-sm">
                      <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                      </span>
                      <input
                        type="text"
                        name="company_website"
                        id="company_website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300"
                        placeholder="www.example.com"
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <SignupButton
          className="mt-3 border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl lg:w-80 w-full"
          href={`/signup`}
        >
          Signup
      </SignupButton> */}
    </div>
  );
};

export default SignupForm;
