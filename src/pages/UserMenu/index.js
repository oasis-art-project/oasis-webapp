import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popover, Icon, Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import useChat from "../../helpers/useChat";

const UserBtn = styled.div`
  cursor: pointer;
  position: absolute;
  margin-top: 10px;
  margin-right: 20px;
  right: 0;
  padding: 0 30px !important;
`;

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
//   const UserMenu = ({ user }) => (
const UserMenu = (user) => {
    const { messages, sendMessage } = useChat("default", user.user.id);

    return (
        <UserBtn>
          <Popover content={UserOptions}>
            <div>
              <Icon iconSize={30} icon="user" />
            </div>
          </Popover>
        </UserBtn>        
    );
};

export default UserMenu;