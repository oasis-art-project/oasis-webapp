import { useFormik } from 'formik';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/img/logo-v2.png';
import useAuth from '../../hooks/useAuth';

const SignupForm = () => {
  const auth: any = useAuth();
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = (values: any) => {
    auth.signin(() => {
      history.replace(from);
    })(values);
  };

  console.log(auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      login(values);
    },
  });
  return (
    <div className="w-100 min-h-screen flex justify-center items-center flex-col">
      <div className="absolute left-14 top-14 hidden lg:block">
        <Link className="flex items-center" to="/">
          <IoArrowBack className="text-xl mr-3" />
          Home
        </Link>
      </div>
      <img src={logo} alt="Oasis logo" width="100px" className="mb-12" />
      <form className="flex flex-col px-10 py-7 w-96" onSubmit={formik.handleSubmit}>
        <label className="m-2 uppercase font-header text-darkGray" htmlFor="email">
          Email Address
        </label>
        <input
          disabled={auth.loginFetch ? true : false}
          className="border-b-2 border-gray-300 mb-8 mt-3 focus:outline-none"
          required
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label className="m-2 uppercase font-header text-darkGray" htmlFor="password">
          Password
        </label>
        <input
          className="border-b-2 border-gray-300 mb-16 mt-3 focus:outline-none"
          required
          disabled={auth.loginFetch ? true : false}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button
          className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
