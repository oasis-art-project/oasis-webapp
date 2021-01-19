import logo from '../../assets/img/logo-v2.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.darkGray};
  }
`;

function Navbar() {
  const { pathname } = useLocation();
  const isEvent = pathname.includes('events');
  return (
    <nav className="p-4 flex justify-between items-center mb-6">
      <Link to="/">
        <img src={logo} alt="Oasis logo" width="80px" />
      </Link>
      <div>
        <ul className="flex justify-between space-x-8 font-header font-bold text-3xl text-lightGray">
          <li>
            <StyledNavLink
              activeClassName="active"
              className={isEvent ? 'active' : ''}
              exact
              to="/"
            >
              Events
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="active" to="/artists">
              Artists
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="active" to="/places">
              Places
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="active" to="hosts">
              Hosts
            </StyledNavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link
          to="/login"
          className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl "
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
