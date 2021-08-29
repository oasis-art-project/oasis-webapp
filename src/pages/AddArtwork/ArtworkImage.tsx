import { Formik } from 'formik';
import { IMGS_URL } from '../../helpers';
import SectionHeader from '../../components/SectionHeader';

interface ArtworkImageInterface {
  picMutation: any;
}

function ArtworkImage(props: ArtworkImageInterface) {
  const { picMutation } = props;
  const pictureInitialValue = { file: null };

  return (
    <Formik
      initialValues={pictureInitialValue}
      onSubmit={(values: any) => {
        picMutation(values);
      }}
      render={({ values, handleSubmit, setFieldValue }) => {
        return (
          <div className="px-4 bg-white sm:p-6 mb-12">
            <SectionHeader title="Artwork image" />
            <div className="flex items-center ">
              <div>
                {pictureInitialValue.file && (
                  <img
                    alt=""
                    src={`${IMGS_URL}/${pictureInitialValue.file}`}
                    width="350px"
                  />
                )}
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                className="flex ml-6 items-center"
              >
                <div className="form-group">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event: any) => {
                      setFieldValue('file', event.currentTarget.files[0]);
                    }}
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="border-solid border-4 w-max border-darkGray px-3 py-1 font-header font-bold text-base"
                >
                  Upload image
                </button>
              </form>
            </div>
          </div>
        );
      }}
    />
  );
}

export default ArtworkImage;
