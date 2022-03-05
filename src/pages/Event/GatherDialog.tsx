/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { MouseEvent } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

const StyledDialog = styled(Dialog)`
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

interface GatherDialogProps {
    readonly showDialog: boolean;
    readonly link: string;
    readonly closeDialog: (e: MouseEvent<HTMLButtonElement>) => void;
  }
  
  function GatherDialog({ showDialog, closeDialog, link }: GatherDialogProps) {
    return (
      <StyledDialog isOpen={showDialog} onDismiss={closeDialog} aria-label="Gather intro">
        <button className="close-button float-rigt" onClick={closeDialog}>
          <span aria-hidden>×</span>
        </button>
        <div className="relative text-center">
          <p className="mt-6 mb-6 text-xl font-header">
            OASIS will now take you to the virtual event on Gather.Town. Some important instructions:
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>1)</b> Choose your character in the next page. Microphone and camera access must be configured. 
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>2)</b> After signing up, use the arrow keys to move around and interact other users.
          </p>
          <p className="mt-6 mb-12 text-xl font-header">
            <b>3)</b> You can come back to OASIS at anytime.
          </p>
          <a
            className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
            target="_blank"
            rel="noreferrer"
            href={`https://gather.town/invite?token=${link}`}
          >
            Continue
          </a>
        </div>
      </StyledDialog>
    );
  }
  
  export default GatherDialog;
  