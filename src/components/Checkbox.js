// import React from "react";
import { Checkbox } from "@blueprintjs/core";
import styled from "styled-components";

const StyledCheckbox = styled(Checkbox)`

  .bp3-control-indicator {
    border: 2px solid ${props => props.theme.colors.orange} !important;
    width: 20px !important;
    height: 20px !important;
  }
  input {
    outline: none !important;
  }
  input:checked ~ .bp3-control-indicator {
    /* outline: none !important; */
    background-color: ${props => props.theme.colors.orange} !important;
  }
`;

export default StyledCheckbox;
