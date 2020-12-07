import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: ${props => props.theme.colors.grey};
  margin-top: 40px;
`;

const Footer = () => <Container></Container>;

export default Footer;
