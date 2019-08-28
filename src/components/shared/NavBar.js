import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import LogoPNG from '../../assets/logo.png';
import Button from './Button';

const Logo = styled.img`
  width: 100px;
  margin-left: 20px;
  margin-top: 20px;
  position: absolute;
  left: 0;
`;

const LoginButton = styled(Button)`
  position: absolute;
  margin-top: 10px;
  margin-right: 20px;
  right: 0;
  padding: 0 30px !important;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: ${props => props.theme.colors.grey};
  margin-right: 15px;
  margin-top: 15px;
  &.active {
    color: ${props => props.theme.colors.green};
  }
  :hover {
    text-decoration: none;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <Link to="/">
          <Logo src={LogoPNG} />
        </Link>

        <StyledLink to="/about" activeClassName="active">
          About OASIS
        </StyledLink>
        <StyledLink to="/how-to" activeClassName="active">
          How to use OASIS
        </StyledLink>
        <StyledLink to="/artists" activeClassName="active">
          Our Artists
        </StyledLink>
        <StyledLink to="/places" activeClassName="active">
          Our Places
        </StyledLink>

        <Link to="/login">
          <LoginButton intent="primary" round>
            LogIn
          </LoginButton>
        </Link>
      </StyledNav>
    );
  }
}

export default NavBar;
