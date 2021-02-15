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
    <div className="">
      <SectionHeader title="About" />
      <AboutContainer>
      <h3>What is it?</h3>
      <p>
        OASIS is a decentralized art platform designed to connect artists with space providers and
        audiences in the local community. The main goals of this platform are (i) to make more
        spaces available to artists to show their work, (ii) to give space providers a unique
        channel to announce the availability of their spaces and the type of work they are looking
        for, and (iii) to provide audiences and patrons the means to find and experience the
        artworks currently on display near them and to connect with local creators.
      </p>
      <h3>The goals of OASIS</h3>
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
      <h3>Interested in participating?</h3>
      <p>
        OASIS is currently in beta testing stage. If you are a local artist or space provider and
        are interested in participating in the beta testing, please create an OASIS account:
      </p>
      <ol>
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
      <p>
        OASIS enables communication between artists and hosts to organize new exhibition events.
        These events will populate OASIS' public homepage so visitors can find the current and
        upcoming exhibitions.
      </p>      
      <h3>Support</h3>
      <p>
        OASIS has received support from Cambridge Arts Council through its Artists Grant program 
        <a href="https://www.cambridgema.gov/arts/programs/grants" target="_blank" rel="noreferrer">Artists Grant program</a>, 
        Boston University's <a href="http://www.bu.edu/spark/" target="_blank" rel="noreferrer"> Spark! program</a>, 
        and Signal Culture's <a href="http://signalculture.org/residency.html" target="_blank" rel="noreferrer">residence program</a>.
      </p>
    </AboutContainer>      
    </div>
  );
}

export default About;