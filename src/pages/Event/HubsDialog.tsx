import { MouseEvent } from 'react';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';

const StyledDialog = styled(Dialog)`
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`;

interface HubsDialogProps {
  readonly showDialog: boolean;
  readonly link: string;
  readonly closeDialog: (e: MouseEvent<HTMLButtonElement>) => void;
}

function HubsDialog({ showDialog, closeDialog, link }: HubsDialogProps) {
  return (
    <StyledDialog isOpen={showDialog} onDismiss={closeDialog} aria-label="Gather intro">
      <button className="close-button float-rigt" onClick={closeDialog}>
        <span aria-hidden>×</span>
      </button>
      <div className="relative text-center">
        <p className="mt-6 mb-6 text-xl font-header">
          이제 OASIS가 Gather.Town의 온라인 이벤트로 안내합니다. 몇 가지 중요한 지침:
        </p>
        <p className="mt-6 mb-6 text-xl font-header">
          <b>1)</b> 다음 페이지에서 캐릭터를 선택하세요. 마이크 및 카메라 액세스를 구성해야 합니다.
        </p>
        <p className="mt-6 mb-6 text-xl font-header">
          <b>2)</b> 가입한 후 화살표 키를 사용하여 이동하고 다른 사용자에게 가까이 가서
          듣고/말하십시오.
        </p>
        <p className="mt-6 mb-12 text-xl font-header">
          <b>3)</b> 마이크와 카메라는 언제든지 비활성화/활성화할 수 있습니다.
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

export default HubsDialog;
