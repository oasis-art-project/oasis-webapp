import React from 'react';
import { Callout } from '@blueprintjs/core';
import styled from 'styled-components';

const StyledCallout = styled(Callout)`
  color: #000;
`;

const ErrorMessage = ({ icon, children }) => (
  <StyledCallout intent="danger" icon={icon}>
    {children}
  </StyledCallout>
);

export default ErrorMessage;
