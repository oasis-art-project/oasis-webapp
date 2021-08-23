import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

const StyledDialog = styled(Dialog)`
@media only screen and (max-width: 600px) {
  width: 90vw;
}
`;
  
function EditArtistDialog(props) {

  return (
      <StyledDialog isOpen={props.showDialogHubs} onDismiss={props.closeHubsDialog} aria-label="Hubs intro">
      <button className="close-button float-rigt" onClick={props.closeHubsDialog}>
        <span aria-hidden>×</span>
      </button>
      <div className="relative text-center">
        <p className="mt-6 mb-6 text-xl font-header">
          OASIS will now take you to the virtual event. Some important instructions:
        </p>
        <p className="mt-6 mb-6 text-xl font-header">
          <b>1)</b> Select <b>JOIN ROOM</b> in the next page. Enter on Device only if you have a VR headset.
        </p>
        <p className="mt-6 mb-6 text-xl font-header">
        <b>2)</b> After joining, use the <b>W and S</b> keys to move forward/backwards, and <b>mouse pointer</b> to set direction.
        </p>
        <p className="mt-6 mb-12 text-xl font-header">
        <b>3)</b> With a phone, <b>PINCH IN/OUT</b> to move backwards/foward, and <b>move the phone</b> to set direction.
        </p>          
        <a className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
           target="_blank"
           rel="noreferrer"                        
           href={`https://hubs.link/${data.event.hubs_link}`}
        >
          Continue
        </a>
      </div>
    </StyledDialog>
    );
  }

  export default EditArtistDialog;