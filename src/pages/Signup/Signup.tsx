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
      <SectionHeader title="About" />
      <SignupContainer>
      <h3 className="font-header text-2xl my-4">How to signup?</h3>

      <p>
        OASIS is a decentralized art platform designed to connect artists with space providers and
        audiences in the local community. The main goals of this platform are (1) to make more
        spaces available to artists to show their work, (2) to give space providers a unique
        channel to announce the availability of their spaces and the type of work they are looking
        for, and (3) to provide audiences and patrons the means to find and experience the
        artworks currently on display near them and to connect with local creators.
      </p>
      <ol className="list-disc list-inside my-4">
        <li>
          Artist accounts contain basic biographic information, representative images of work, and
          links to social media accounts (instagram, twitter, facebook).
        </li>
        <li>
          Space host accounts allow to enter the list of spaces that a host is currently managing.
          For each space, brief description of the space, location, and descriptive images are
          required.
        </li>
      </ol>

    </SignupContainer>
    </div>
  );
}

export default Signup;
