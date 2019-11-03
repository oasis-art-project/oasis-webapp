import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
`;

// --- TODO ---
// the initial state of active should come from props
// the toggleActive should trigger an action
const StarInput = props => {
  const [isActive, setActive] = useState(false);
  const [isHover, setHovered] = useState(false);
  const fillStar = () => setHovered(true);
  const emptyStar = () => (!isActive ? setHovered(false) : null);
  const toggleActive = () => setActive(!isActive);

  return (
    <Container onMouseEnter={fillStar} onMouseLeave={emptyStar} onClick={toggleActive}>
      <Icon icon={isHover ? 'star' : 'star-empty'} color="#F48438" />
    </Container>
  );
};

export default StarInput;
