import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { slide as MenuBurger } from 'react-burger-menu';
import Measure from 'react-measure';
import LogoPNG2 from '../assets/logo_2.png';
import MobileStyles from '../helpers/navStyles';
import Button from './Button';
import { Popover, Icon, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

const Logo = styled.img`
  width: 60px;
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

const Divider = styled.div`
  width: 80%;
  height: 1px;
  margin: 60px 0;
  background: #fff;
`;

const UserBtn = styled.div`
  cursor: pointer;
  position: absolute;
  margin-top: 10px;
  margin-right: 20px;
  right: 0;
  padding: 0 30px !important;
`;

const MenuMobileContainer = styled.header`
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  z-index: 9999;
  background-color: #373a47;
`;

const MenuMobile = styled.div`
  height: 36px;
  width: 30px;
  /* margin: 5px; */
  cursor: pointer;
`;

const MobileNav = ({ close, open, stateChange, user }) => {
  return (
    <MenuMobileContainer>
      <MenuMobile>
        <MenuBurger styles={MobileStyles} isOpen={open} onStateChange={state => stateChange(state)}>
          <MobileLink onClick={close} to="/">
            Events
          </MobileLink>
          <MobileLink onClick={close} to="/artists">
            Artists
          </MobileLink>
          <MobileLink onClick={close} to="/places">
            Places
          </MobileLink>
          <MobileLink onClick={close} to="/hosts">
            Hosts
          </MobileLink>          
          {/* <MobileLink onClick={close} to="/about">
            About
          </MobileLink> */}

          <Divider />
          {user && (
            <MobileLink onClick={close} to="/profile">
              Profile
            </MobileLink>
          )}
          <MobileLink onClick={close} to="/login">
            {user ? 'Log Out' : 'Sign In'}
          </MobileLink>
        </MenuBurger>
      </MenuMobile>
    </MenuMobileContainer>
  );
};

const DesktopNav = ({ user }) => (
  <StyledNav>
    <Link to="/">
      <Logo src={LogoPNG2} />
    </Link>

    <StyledLink to="/" exact activeClassName="active">
      Events
    </StyledLink>
    <StyledLink to="/artists" activeClassName="active">
      Artists
    </StyledLink>
    <StyledLink to="/places" activeClassName="active">
      Places
    </StyledLink>
    <StyledLink to="/hosts" activeClassName="active">
      Hosts
    </StyledLink>    
    {/* <StyledLink to="/about" activeClassName="active">
      About
    </StyledLink> */}

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

const UserOptions = (
  <Menu>
    <Link to="/profile">
      <MenuItem icon="user" text="My profile" />
    </Link>
    <MenuDivider />
    <Link to="/login">
      <MenuItem icon="log-out" text="Log out" />
    </Link>
  </Menu>
);

// --- TODO ---
// consider user img
// warning of <a> children of <a>
const UserMenu = ({ user }) => (
  <UserBtn>
    <Popover content={UserOptions}>
      <div>
        <Icon iconSize={30} icon="user" />
      </div>
    </Popover>
  </UserBtn>
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
                user={this.props.user}
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
