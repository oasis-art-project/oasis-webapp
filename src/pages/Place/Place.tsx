import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SectionHeader from '../../components/SectionHeader';
import usePlace from '../../hooks/usePlace';
import { IMGS_URL } from '../../helpers';

interface ImageProps {
  readonly imageURL: string;
  readonly height: string;
}

const ImgContainer = styled.div<ImageProps>`
  background-image: url(${(props: any) => props.imageURL});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props: any) => props.height};
`;

interface Params {
  id: string;
}

function Place() {
  const { id }: Params = useParams();
  const { status, data, error } = usePlace(id);

  if (status === 'loading') return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const { place } = data;
  const placeCoverIMG = `${IMGS_URL}/${place.images[0]}`;

  return (
    <div>
      <SectionHeader title="Place Information" />
      <div className="grid xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-5">
        <div className="flex flex-end flex-col h-full justify-end">
          <p className="font-header font-bold text-5xl truncate mb-2">{place.name}</p>
          <ImgContainer imageURL={placeCoverIMG} height="325px" />
        </div>
        <div className="flex flex-col"></div>
      </div>
      <SectionHeader title="Host" />
      <div className="grid xl:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-6 mb-5">
        <Link key={place.host.id} to={`/host/${place.host.id}`}>
          <article className="flex flex-end flex-col h-full justify-end">
            <ImgContainer
              className="mb-2"
              imageURL={`${IMGS_URL}/${place.host.images[0]}`}
              height="150px"
            />
            <p className="font-header font-bold text-xl truncate mb-2 text-center uppercase">
              {place.host.firstName} {place.host.lastName}
            </p>
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Place;
