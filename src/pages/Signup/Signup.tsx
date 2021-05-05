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
        Thank you for your interest in joining the OASIS community! Right now the platform is still 
        being developed and tested, with some functions are not yet ready, including account creation. 
        However, we can create an account for you if you send us an email providing some very basic
        information about you and why you are interested in OASIS.
      </p>

      <br/>
      <p>
        Please note that there are three kinds of accounts in OASIS, and you have to pick one (at least initially):
      </p>

      <ol className="list-disc list-inside my-4">
        <li>
          Artist accounts. These accounts contain basic biographic information, representative images of seleted artworks, and
          links to porfolio page and social media accounts (Instagram, YouTube).
        </li>
        <li>
          Host accounts. Hosts are people who manage or own art spaces where events can be take place (physical or 
          virtual). Under one of these accounts, hosts can enter their hosted spaces and the events at each space.
        </li>
        <li>
          Visitor accounts. These accounts are meant for people primarily interested in attending the events. Currently, these accounts 
          simply allow users to connect with artists and hosts by using the chat function in the OASIS website.
        </li>

        <br/>
        <p>
        If you would like to have an account during the testing stage of OASIS, either as an artist, host, or visitor, please 
        send us an email to: <b>info@oasis.art</b>
        </p>
        <br/>
        <p>
        Finally, all the information about artworks and events in the OASIS website is publicly available for vieweing without requiring an account ❤️
        </p>

      </ol>

    </SignupContainer>
    </div>
  );
}

export default Signup;
