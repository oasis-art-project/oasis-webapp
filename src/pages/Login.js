import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { FormGroup } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { TextInput, Checkbox, Button } from "../components/shared";

import BackgroundPNG from "../assets/login-background.png";
import LogoPNG from "../assets/logo.png";

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
  filter: blur(8px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  z-index: 10;
  background: #fff;
  border-radius: 22px;
  padding: 65px 45px 25px;
`;

const StyledLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
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

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 15px;
  text-transform: uppercase;
`;

const LinkContainer = styled.div`
  width: 100%;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.grey};
  text-decoration: underline;
`;

const SingInForm = ({ onChange }) => (
  <Fragment>
    <StyledTextinput placeholder="Enter your username" />
    <StyledTextinput placeholder="Enter your password" />
    <Checkbox label="Remember me" />
  </Fragment>
);

const SingUpForm = ({ onChange }) => (
  <Fragment>
    <StyledTextinput placeholder="Enter your username" />
    <StyledTextinput placeholder="Enter your email" />
    <StyledTextinput placeholder="Enter your password" />
    <StyledTextinput placeholder="Confirm your password" />
  </Fragment>
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogIn = this.onLogIn.bind(this);
  }

  isSignUp() {
    const { hash } = this.props.location;
    return hash === "#sign_up";
  }

  formInputs() {
    if (this.isSignUp()) return <SingUpForm />;
    return <SingInForm />;
  }

  onLogIn(e) {
    console.log("hi");
  }

  render() {
    const isSignUp = this.isSignUp();
    const caText = isSignUp ? <FormattedMessage id="login.signUp" /> : <FormattedMessage id="login.signIn" />;
    return (
      <Layout>
        <Background />
        <Link to="/"><StyledLogo src={LogoPNG} /></Link>
        <Header>{caText}</Header>
        <Container>
          <FormGroup>
            {this.formInputs()}
            <StyledButton large>{caText}</StyledButton>
          </FormGroup>
          <LinkContainer>
            {!isSignUp && (
              <StyledLink to="/login#sign_up">Create an account</StyledLink>
            )}
            {isSignUp && <StyledLink to="/login">Sign in</StyledLink>}
          </LinkContainer>
        </Container>
      </Layout>
    );
  }
}

export default Login;
