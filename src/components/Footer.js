import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: ${props => props.theme.colors.grey};
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.green};
  :hover {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
  }
`;

const Footer = () => (
  <Container>
    <StyledLink to="/about">About</StyledLink>
  </Container>
);

export default Footer;
