import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

const StyledDialog = styled(Dialog)`
@media only screen and (max-width: 600px) {
  width: 90vw;
}
`;
  
function EditArtistDialog(props: any) {

  return (
      <StyledDialog isOpen={props.showDialog} onDismiss={props.closeDialog} aria-label="Select artists">
      
      <button className="close-button float-rigt" onClick={props.closeDialog}>
        <span aria-hidden>×</span>
      </button>




      <div className="relative text-center">
        <p className="mt-6 mb-6 text-xl font-header">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
        vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
        dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        {/* <a className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
           target="_blank"
           rel="noreferrer"                        
           href={`https://hubs.link`}
        >
          Continue
        </a> */}

<button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => { props.setArtists(["test"]); props.closeDialog(); }}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>        

      </div>



    </StyledDialog>
    );
  }

  export default EditArtistDialog;