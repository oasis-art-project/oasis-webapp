import { useParams } from 'react-router-dom';
import DelayRedirect from '../../components/DelayRedirect';

import '@reach/dialog/styles.css';

interface Params {
  alias: string;
}

function EventRedirect() {
  const { alias }: Params = useParams();

  var dStyleClass = `flex-box h-screen justify-center items-center text-gray-700`;
  return (
    <div className={dStyleClass}>

      {alias === "pcd2021" && (
        <DelayRedirect to={`/event/1`} delay={500} />
      )}
      
      {alias !== "pcd2021" && (
        <div id="info">
          <h3>This event could not be found...</h3>
        </div>
      )}      

    </div>
  );
}

export default EventRedirect;
