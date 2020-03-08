import React, { PureComponent, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, FormInput, ErrorMessage } from '../../components';

// default selected user type
//1 - Admin. 2 - Host, 3 - Artist, 4 - Visitor
const DEFAULT_USER_TYPE = 3;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const RoleInputs = styled.ul`
  transform: rotate(90deg);
  position: absolute;
  right: -188px;
  top: 129px;
  padding: 0;
  z-index: 0;
`;

const shadow = css`
  box-shadow: inset 0px -8px 16px -15px rgba(28, 28, 28, 1);
`;

const RoleItem = styled.li`
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  background: ${props => (props.active ? '#fff' : props.theme.colors.orange)};
  color: ${props => (props.active ? props.theme.colors.grey : '#fff')};
  font-size: 20px;
  display: inline-block;
  padding: 10px 30px;
  margin-right: 5px;
  cursor: pointer;
  ${props => !props.active && shadow}
`;

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too short')
    .max(50, 'Too Long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .test('passwords-match', 'Passwords must match', function(value) {
      return this.parent.password === value;
    }),
});

class SingUpForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentError: props.error,
      activeUserRole: DEFAULT_USER_TYPE,
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

  setUserRole(role) {
    this.setState({ activeUserRole: role });
  }

  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error) {
      this.showError();
    }
  }

  render() {
    const { activeUserRole } = this.state;
    return (
      <Fragment>
        <RoleInputs>
          <RoleItem
            onClick={() => this.setUserRole(3)}
            active={activeUserRole === 3}
          >
            Artist
          </RoleItem>
          <RoleItem
            onClick={() => this.setUserRole(2)}
            active={activeUserRole === 2}
          >
            Host
          </RoleItem>
          <RoleItem
            onClick={() => this.setUserRole(4)}
            active={activeUserRole === 4}
          >
            Visitor
          </RoleItem>
        </RoleInputs>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignUpSchema}
          onSubmit={values => {
            const { firstName, lastName, email, password } = values;
            this.props.onSignUp({
              firstName,
              lastName,
              email,
              password,
              role: activeUserRole,
            });
          }}
        >
          <Form>
            <Field
              name="firstName"
              placeholder="Enter your name"
              inputProps={{
                placeholder: 'Enter your name',
                type: 'text',
              }}
              component={FormInput}
            />
            <Field
              name="lastName"
              placeholder="Enter your last name"
              inputProps={{
                placeholder: 'Enter your last name',
                type: 'text',
              }}
              component={FormInput}
            />
            <Field
              name="email"
              placeholder="Enter your email"
              inputProps={{
                placeholder: 'Enter your email',
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
              secureTextEntry
            />
            <Field
              name="confirmPassword"
              secureTextEntry
              placeholder="Confirm your password"
              inputProps={{
                placeholder: 'Confirm your password',
                type: 'password',
              }}
              component={FormInput}
            />
            {this.state.currentError && (
              <ErrorMessage>{this.state.currentError}</ErrorMessage>
            )}
            <StyledButton type="submit" large>
              Sign Up
            </StyledButton>
          </Form>
        </Formik>
      </Fragment>
    );
  }
}

export default SingUpForm;
