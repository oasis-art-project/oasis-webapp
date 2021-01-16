import logo from '../../assets/img/logo-v2.png';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &.active {
    color: ${props => props.theme.colors.darkGray};
  }
`;

function Navbar() {
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Oasis logo" width="80px" />
        </Link>
        <div>
          <ul className="flex justify-between space-x-8 font-header font-bold text-3xl text-lightGray">
            <li>
              <StyledNavLink activeClassName="active" to="/">
                Events
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink activeClassName="active" to="/artist">
                Artist
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
          <button className="border-solid border-4 border-darkGray px-3 py-1 font-header font-bold text-xl ">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
