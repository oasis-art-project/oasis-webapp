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

interface YoutubeDialogProps {
    readonly showDialog: boolean;
    readonly link: string;
    readonly closeDialog: (e: MouseEvent<HTMLButtonElement>) => void;
  }
  
  function YoutubeDialog({ showDialog, closeDialog, link }: YoutubeDialogProps) {
    return (
      <StyledDialog isOpen={showDialog} onDismiss={closeDialog} aria-label="Gather intro">
        <button className="close-button float-rigt" onClick={closeDialog}>
          <span aria-hidden>×</span>
        </button>
        <div className="relative text-center">
          <p className="mt-6 mb-6 text-xl font-header">
            OASIS will now take you to the virtual event on YouTube. Some important instructions:
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>1)</b> If it's a pre-recorded video, just play to watch.
          </p>
          <p className="mt-6 mb-6 text-xl font-header">
            <b>2)</b> If it's a live stream, please wait for the stream to start.
          </p>
          <p className="mt-6 mb-12 text-xl font-header">
            <b>3)</b> You can come back to OASIS at anytime.
          </p>
          <a
            className="mx-auto border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl"
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${link}`}
          >
            Continue
          </a>
        </div>
      </StyledDialog>
    );
  }
  
  export default YoutubeDialog;
  