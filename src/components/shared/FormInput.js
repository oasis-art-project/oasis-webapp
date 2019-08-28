import React from 'react';
import styled from 'styled-components';
import { FormGroup } from '@blueprintjs/core';
import TextInput from './TextInput';

const StyledTextinput = styled(TextInput)`
  width: 280px;
  margin-bottom: 15px;
`;

const FromInput = ({ field, inputProps, props, form: { touched, errors } }) => (
  <FormGroup
    {...props}
    helperText={touched[field.name] && errors[field.name] && errors[field.name]}
    intent={touched[field.name] && errors[field.name] && 'danger'}
  >
    <StyledTextinput
      intent={touched[field.name] && errors[field.name] && 'danger'}
      {...field}
      {...inputProps}
    />
  </FormGroup>
);

export default FromInput;
