import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  height: 100px;
  background: ${props => props.theme.colors.grey};
  margin-top: 40px;
`;

const Footer = () => <Container></Container>;

export default Footer;
