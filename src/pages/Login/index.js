import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Toast, Position } from '@blueprintjs/core';
import { TextInput, Seo } from '../../components/shared';
import SignInForm from './SignInForm';

import BackgroundPNG from '../../assets/login-background.png';
import LogoPNG from '../../assets/logo.png';

const Layout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  background: url(${BackgroundPNG});
  background-size: cover;
  filter: blur(4px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -10;
`;

const Container = styled.div`
  background: #fff;
  border-top-left-radius: 22px;
  border-top-right-radius: ${props => (props.isSignUp ? '0px' : '22px')};
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  padding: 65px 45px 25px;
  position: relative;
  z-index: initial;
`;

const LogoContainer = styled(Link)`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const StyledLogo = styled.img`
  width: 100px;
`;

const StyledTextinput = styled(TextInput)`
  width: 280px;
  margin-bottom: 25px;
`;

const Header = styled.div`
  z-index: 12;
  color: ${props => props.theme.colors.orange};
  font-size: 100px;
  margin-bottom: -29px;
  font-weight: 600;
`;

const LinkContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.grey};
  text-decoration: underline;
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

const SingUpForm = ({ onChange }) => (
  <Fragment>
    <StyledTextinput placeholder="Enter your name" />
    <StyledTextinput placeholder="Enter your last name" />
    <StyledTextinput placeholder="Enter your email" />
    <StyledTextinput placeholder="Enter your password" />
    <StyledTextinput placeholder="Confirm your password" />
  </Fragment>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogIn = this.onLogIn.bind(this);
    this.state = { role: 0 };
  }

  isSignUp() {
    const { hash } = this.props.location;
    return hash === '#sign_up';
  }

  formInputs() {
    if (this.isSignUp()) return <SingUpForm />;
    return (
      <SignInForm
        onLogin={this.props.login}
        error={this.props.loginError}
        clearError={this.props.clearError}
      />
    );
  }

  onLogIn(e) {
    this.props.createUser({
      email: 'test@te.scom',
      password: 'osngor',
      firstName: 'Fred',
      lastName: 'Flintstone',
      role: 4,
    });
  }

  render() {
    const isSignUp = this.isSignUp();
    const caText = isSignUp ? (
      <FormattedMessage id="login.signUp" />
    ) : (
      <FormattedMessage id="login.signIn" />
    );
    return (
      <Layout>
        <Seo title={isSignUp ? 'Sign Up' : 'Log in'} />
        <Background />
        <LogoContainer to="/">
          <StyledLogo src={LogoPNG} />
        </LogoContainer>
        <Header>{caText}</Header>
        <Container isSignUp={this.isSignUp()}>
          {this.isSignUp() && (
            <RoleInputs>
              <RoleItem active>Artist</RoleItem>
              <RoleItem>Host</RoleItem>
              <RoleItem>Visitor</RoleItem>
            </RoleInputs>
          )}
          {this.formInputs()}
          <LinkContainer>
            {!isSignUp && (
              <StyledLink to="/login#sign_up">Create an account</StyledLink>
            )}
            {isSignUp && <StyledLink to="/login">Sign in</StyledLink>}
          </LinkContainer>
        </Container>
        {false && (
          <Toast
            position={Position.TOP}
            icon="warning-sign"
            intent="danger"
            message={this.props.loginError}
          />
        )}
      </Layout>
    );
  }
}

export default Login;
