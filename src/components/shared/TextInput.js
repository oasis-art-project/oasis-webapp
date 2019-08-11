// import React from "react";
import { InputGroup } from "@blueprintjs/core";
import styled from "styled-components";

const StyledInput = styled(InputGroup)`
  input {
    background-color: ${props => props.theme.colors.green};
    border-radius: 35px;
    padding-top: 25px !important;
    padding-bottom: 25px !important;
    padding-left: 20px !important;
    box-shadow: none;
    &::placeholder{
      color: ${props => props.theme.colors.white};
    }
  }
`;

export default StyledInput;
