import * as Yup from 'yup';
import { useFormik } from 'formik';
import { IMGS_URL } from '../../helpers';
import SectionHeader from '../../components/SectionHeader';

const artworkSchema = Yup.object().shape({
  name: Yup.string().max(100, 'Too long, maximum 100 characters'),
  description: Yup.string().max(1000, 'Too long, maximum 10000 characters'),
  medium: Yup.string().max(200, 'Too long, maximum 10000 characters'),
  size: Yup.string().max(200, 'Too long, maximum 10000 characters'),
  year: Yup.number().integer('invalid decimal'),
  link: Yup.string().max(100, 'Too long, maximum 100 characters')
});

function ArtworkInfo(props: any) {
  const { mutation } = props;
  const pictureInitialValue = { file : null };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      medium: '',
      size: '',
      year: 2021,
      link: '',
    },
    validationSchema: artworkSchema,
    onSubmit: (values: any) => {
      const update = { ...values, confirmed: true };
      mutation(update);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-4 bg-white sm:px-6 mb-6">

            <SectionHeader title="Artwork information" />
            <div className="grid grid-cols-10 gap-6">
              <div className="col-span-10 sm:col-span-5">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Artwork name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="work-title"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div className="col-span-10">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                  {formik.errors.description && (
                    <p className="mt-2 text-sm text-red-500">{formik.errors.description}</p>
                  )}
                </div>
              </div>


              <div className="col-span-10  sm:col-span-5">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Medium
                </label>
                <input
                  type="text"
                  name="medium"
                  id="medium"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.medium}
                />
                {formik.errors.medium && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.medium}</p>
                )}
              </div>


              <div className="col-span-10  sm:col-span-5">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.size}
                />
                {formik.errors.size && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.size}</p>
                )}
              </div>

              <div className="col-span-10  sm:col-span-5">
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <input
                  type="integer"
                  name="year"
                  id="year"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                />
                {formik.errors.year && (
                  <p className="mt-2 text-sm text-red-500">{formik.errors.year}</p>
                )}
              </div>

              <div className="col-span-10  sm:col-span-7">
                <label htmlFor="homepage" className="block text-sm font-medium text-gray-700">
                  Link
                </label>
                <div className="mt-1 flex shadow-sm">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    http://
                  </span>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full sm:text-sm border-gray-300"
                    placeholder=""
                    onChange={formik.handleChange}
                    value={formik.values.link}
                  />
                  {formik.errors.link && (
                    <p className="mt-2 text-sm text-red-500">{formik.errors.link}</p>
                  )}
                </div>
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="border-solid border-4 w-max border-darkGray px-3 py-1 font-header font-bold text-base"
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ArtworkInfo;
