import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Button, FormInput, ErrorMessage } from '../../components';

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const SigninSchema = Yup.object().shape({
  password: Yup.string().max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

class SingInForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentError: props.error,
    };
  }

  hideError() {
    this.setState({ currentError: null });
  }

  showError() {
    this.setState({ currentError: this.props.error });
    setTimeout(() => {
      this.hideError();
      this.props.clearError();
    }, 8000);
  }

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      this.showError();
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={values => {
          this.props.onLogin(values);
        }}
      >
        <Form>
          <Field
            name="email"
            placeholder="Enter your username"
            inputProps={{
              placeholder: 'Enter your username',
              type: 'email',
            }}
            component={FormInput}
          />
          <Field
            name="password"
            placeholder="Enter your password"
            inputProps={{
              placeholder: 'Enter your password',
              type: 'password',
            }}
            component={FormInput}
          />
          {this.state.currentError && <ErrorMessage>{this.state.currentError}</ErrorMessage>}
          <StyledButton type="submit" large>
            Sign in
          </StyledButton>
        </Form>
      </Formik>
    );
  }
}

export default SingInForm;
