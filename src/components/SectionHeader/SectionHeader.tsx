/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  letter-spacing: 2px;
`;

const Title = ({ children }: PropsWithChildren<{}>) => (
  <TitleContainer className="m-2 uppercase font-header text-darkGray">{children}</TitleContainer>
);

const SectionHeader = ({ title = '' }) => {
  return (
    <div className="w-full mb-10 mt-5">
      <div className="w-full border border-gray-300"></div>
      <Title>{title}</Title>
    </div>
  );
};

export default SectionHeader;
