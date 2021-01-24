import logo from '../../assets/img/logo-v2.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.darkGray};
  }
`;

function Navbar() {
  const { pathname } = useLocation();
  const isEvent = pathname.includes('event');
  const isArtist = pathname.includes('artist');
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <img src={logo} alt="Oasis logo" width="65px" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div className={'lg:flex items-center' + (navbarOpen ? ' flex' : ' hidden')}>
            <ul
              onClick={() => {
                setNavbarOpen(false);
              }}
              className="flex justify-between lg:space-x-8 font-header font-bold text-3xl lg:flex-row flex-col text-lightGray"
            >
              <li className="my-5 mt-10 lg:mt-auto">
                <StyledNavLink
                  activeClassName="active"
                  className={isEvent ? 'active' : ''}
                  exact
                  to="/"
                >
                  Events
                </StyledNavLink>
              </li>
              <li className="my-5">
                <StyledNavLink
                  activeClassName="active"
                  className={isArtist ? 'active' : ''}
                  exact
                  to="/artists"
                >
                  Artists
                </StyledNavLink>
              </li>
              <li className="my-5">
                <StyledNavLink activeClassName="active" to="/places">
                  Places
                </StyledNavLink>
              </li>
              <li className="my-5">
                <StyledNavLink activeClassName="active" to="/hosts">
                  Hosts
                </StyledNavLink>
              </li>
              <li className="my-5 lg:hidden">
                <StyledNavLink activeClassName="active" to="/login">
                  Login
                </StyledNavLink>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <Link
              to="/login"
              className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl "
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
