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

const AboutContainer = styled.div`
  padding: 0 20px;
`;

function About() {

  return (
    <div className="leading-relaxed">
      <SectionHeader title="About" />
      <AboutContainer>
      <h3 className="font-header text-2xl my-4">What is it?</h3>
      <p>
        OASIS is a decentralized art platform designed to connect artists with space providers and
        audiences in the local community. The main goals of this platform are (1) to make more
        spaces available to artists to show their work, (2) to give space providers a unique
        channel to announce the availability of their spaces and the type of work they are looking
        for, and (3) to provide audiences and patrons the means to find and experience the
        artworks currently on display near them and to connect with local creators.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">The goals of OASIS</h3>
      <p>
        OASIS’ most immediate goal is to facilitate the interactions between creators, hosts, and
        audiences at the juncture of online and local communities. It does so by opening up existing
        interstitial spaces suitable for art exhibition throughout the urban fabric and facilitating
        the movements of “micro-publics” towards these spaces. This aspect of OASIS is fundamental;
        even though the web app is an important component of OASIS, the platform should not be seen
        simply as a “Social Network for the Arts”, but rather as a physical-digital nexus that taps
        on the potential of mobile technologies to enable new possibilities of dialog, interaction,
        and creation within our communities.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">Interested in participating?</h3>
      <p>
        OASIS is currently in alpha testing stage. If you are a local artist, space provider, or 
        simply a member of the community and are interested in participating in the beta testing, 
        please signup to create an OASIS account
      </p>
      <p>
        OASIS enables communication between artists and hosts to organize and promote new exhibition events (in both physical and virtual spaces).
        These events will populate OASIS' public homepage so visitors can find the current and upcoming exhibitions.
      </p>      
      <h3 className="font-header text-2xl mt-6 mb-4">Support</h3>
      <p>
        OASIS has received support from Cambridge Arts Council through its <a href="https://www.cambridgema.gov/arts/programs/grants" target="_blank" rel="noreferrer">Artists Grant program</a>, 
        Boston University's <a href="http://www.bu.edu/spark/" target="_blank" rel="noreferrer"> Spark! technology incubator</a>, 
        and Signal Culture's <a href="http://signalculture.org/residency.html" target="_blank" rel="noreferrer">residence for researchers and toolmakers</a>.
      </p>
    </AboutContainer>      
    </div>
  );
}

export default About;
