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
        being developed and tested and some functions are not yet ready, inclulding account creation. 
        However, we can create an account for you manually if you send us an email providing some very basic
        information about you and why you are interested in OASIS.
      </p>

      <br/>
      <p>
        Please note that there are three kinds of account in OASIS, and you have to pick one (at least initially):
      </p>

      <ol className="list-disc list-inside my-4">
        <li>
          Artist accounts. They contain basic biographic information, representative images of work, and
          links to social media accounts (instagram, porfolio page, vimeo).
        </li>
        <li>
          Host accounts. Hosts are people who manage or own art spaces where events can be take place (in physical or 
          virtual space). Under one of these accounts, you can enter the hosted spaces, and the events at each space.
        </li>
        <li>
          Visitor accounts. This accounts are meant for people interested in attending the events. At this point, they 
          simply allow users to connect with artists and hosts by using the chat in the OASIS website.
        </li>

        <br/>
        <p>
        If you would like to have an account during the testing stage of OASIS, either as artists, host, or visitor, please 
        send an email to: <b>info@oooasis.art</b>
        </p>
        <br/>
        <p>
        Finally, all the information about artworks and events in the OASIS website is publicly available for vieweing without requiring an account :-)
        </p>

      </ol>

    </SignupContainer>
    </div>
  );
}

export default Signup;
