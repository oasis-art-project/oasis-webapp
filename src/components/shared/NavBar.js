import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Measure from 'react-measure';
import LogoPNG from '../../assets/logo.png';
import MobileStyles from '../../helpers/navStyles';
import Button from './Button';
import { Popover, Icon } from '@blueprintjs/core';

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

const MobileLink = styled(Link)`
  display: block;
  color: #fff;
  margin: 10px 0;
  font-size: 20px;
  :hover {
    text-decoration: none;
  }
`;

const MobileNav = ({ close, open, stateChange }) => {
  return (
    <Menu
      styles={MobileStyles}
      isOpen={open}
      onStateChange={state => stateChange(state)}
    >
      <MobileLink onClick={close} to="/">
        Events
      </MobileLink>
      <MobileLink onClick={close} to="/about">
        About
      </MobileLink>
      <MobileLink onClick={close} to="/how-to">
        How to use OASIS
      </MobileLink>
      <MobileLink onClick={close} to="/artists">
        Our Artists
      </MobileLink>
      <MobileLink onClick={close} to="/places">
        Our Places
      </MobileLink>
    </Menu>
  );
};

const DesktopNav = ({ user }) => (
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

    {user && <UserMenu user={user} />}

    {!user && (
      <Link to="/login">
        <LoginButton intent="primary" round>
          LogIn
        </LoginButton>
      </Link>
    )}

  </StyledNav>
);

const UserMenu = ({ user }) => (
  <Popover>
    <LoginButton intent="primary" round>
      <Icon icon="user" />
    </LoginButton>
  </Popover>
);

class NavBar extends Component {
  state = {
    width: document.body.scrollWidth,
    sideOpen: false,
  };

  closeMenu() {
    this.setState({ sideOpen: false });
  }

  handleStateChange(state) {
    this.setState({ sideOpen: state.isOpen });
  }

  render() {
    const { width, sideOpen } = this.state;
    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({ width: contentRect.bounds.width });
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef}>
            {width <= 660 ? (
              <MobileNav
                stateChange={this.handleStateChange.bind(this)}
                open={sideOpen}
                close={this.closeMenu.bind(this)}
              />
            ) : (
              <DesktopNav user={this.props.user} />
            )}
          </div>
        )}
      </Measure>
    );
  }
}

export default NavBar;
