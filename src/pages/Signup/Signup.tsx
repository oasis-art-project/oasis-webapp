/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import styled from 'styled-components';

const Title = styled.div`
  letter-spacing: 2px;
`;

const SectionHeader = ({ title = '' }) => {
    return (
      <div className="w-full mb-10 mt-5">
        <div className="w-full border border-gray-300"></div>
        <Title className="m-2 uppercase font-header text-darkGray">{title}</Title>
      </div>
    );
  };

const SignupContainer = styled.div`
  padding: 0 20px;
`;

function Signup() {

  return (
    <div className="leading-relaxed">
      <SectionHeader title="Signup" />
      <SignupContainer>
      <h3 className="font-header text-2xl my-4">How to create an OASIS account?</h3>

      <p>
        In order to signup for an OASIS account, you need to fill in a <a className="text-gray-400 underline" href={`/register`}>registration form</a>. 
        Please note that artist profiles and events are publicly available for vieweing without requiring an account ❤️
      </p>


    </SignupContainer>
    </div>
  );
}

export default Signup;
