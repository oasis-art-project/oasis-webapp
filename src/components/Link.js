import { Link } from 'react-router-dom';
import styled from 'styled-components';

const disabledStyle = `pointer-events: none;
cursor: default !important;
text-decoration: none;`;

const StyledLink = styled(Link)`
  ${props => (props.noLink ? disabledStyle : '')}
  :hover {
    text-decoration: none;
    ${props => props.intent === 'list' && 'color: inherit'}
  }
`;

export default StyledLink;
