import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Toast, Position } from '@blueprintjs/core';
import { Seo } from '../../components';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

import BackgroundPNG from '../../assets/login-background.png';
import LogoPNG2 from '../../assets/logo_2.png';

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
  width: 60px;
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { role: 0 };
  }

  isSignUp() {
    const { hash } = this.props.location;
    return hash === '#sign_up';
  }

  formInputs() {
    if (this.isSignUp())
      return <SignUpForm onSignUp={this.props.signup} clearError={this.props.clearError} />;
    return (
      <SignInForm
        onLogin={this.props.login}
        error={this.props.loginError}
        clearError={this.props.clearError}
      />
    );
  }

  componentDidMount() {
    this.props.logOut();
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
          <StyledLogo src={LogoPNG2} />
        </LogoContainer>
        <Header>{caText}</Header>
        <Container isSignUp={this.isSignUp()}>
          {this.formInputs()}
          <LinkContainer>
            {!isSignUp && <StyledLink to="/login#sign_up">Create an account</StyledLink>}
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
