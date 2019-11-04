import styled from 'styled-components';

const MainLayout = styled.div`
  *:focus {
    outline: none !important;
  }
  .bp3-control input:focus ~ .bp3-control-indicator {
    outline: none !important;
  }
  .leaflet-popup-content p,
  .leaflet-popup-content a {
    font-weight: 400;

    color: ${props => props.theme.text_color} !important;
  }
  font-family: 'Source Sans Pro', sans-serif;
  color: ${props => props.theme.text_color};
`;

export default MainLayout;
