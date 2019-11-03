import { Button } from '@blueprintjs/core';
import styled from 'styled-components';

import theme from '../layout/theme';

const intentBackground = intent => {
  switch (intent) {
    case 'primary':
      return theme.colors.orange;
    case 'secundary':
      return theme.colors.green;
    default:
      return theme.colors.grey;
  }
};

const StyledButton = styled(Button)`
  background-color: ${props => intentBackground(props.intent)} !important;
  color: ${props => props.theme.colors.white} !important;
  box-shadow: none !important;
  background-image: none !important;
  border-radius: ${props => (props.round ? '20px' : '')} !important;
`;

export default StyledButton;
