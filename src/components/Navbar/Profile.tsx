/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import React from 'react';
import Popper from 'popper.js';
// import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
// import useChat from '../../hooks/useChat';

const Dropdown = () => {
  const auth: any = useAuth();
  const history = useHistory();
  // useChat('default', auth.user.identity);
  const logout = () => {
    auth.signout(() => {
      history.replace('/');
    });
  };
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef: any = React.createRef();
  const popoverDropdownRef: any = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className=" rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none"
              style={{ transition: 'all .15s ease' }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
              }}
            >
              <FaRegUserCircle className="text-4xl text-darkGray" />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                'text-base z-50 cursor-pointer float-left py-2 list-none text-left rounded shadow-md mt-1'
              }
              style={{ minWidth: '10rem', transform: 'translate(-53px, 35px)' }}
            >
              <li
                onClick={() => logout()}
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
              >
                Sign out
              </li>
              {/* <Link
                to="/profile"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent '
                }
              >
                Profile
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
