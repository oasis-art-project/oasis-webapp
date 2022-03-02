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

const AboutContainer = styled.div`
  padding: 0 20px;
`;

function About() {

  return (
    <div className="leading-relaxed">
      <SectionHeader title="About" />
      <AboutContainer>
      <h3 className="font-header text-2xl my-4">What is OASIS?</h3>
      <p>
        OASIS is an art platform designed to connect artists with space providers and
        audiences in the local community. The main goals of this platform are (1) to make more
        spaces available to artists to show their work, (2) to give space providers a unique
        channel to announce the availability of their spaces and the type of work they are looking
        for, and (3) to provide audiences the means to find and experience the
        artworks currently on display and to connect with local creators.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">A physical-digital nexus</h3>
      <p>
        With OASIS, we are seeking to support interactions between artists, hosts, and
        audiences at the juncture between online and local communities. We hope that OASIS will open up existing
        interstitial spaces suitable for art exhibition throughout the urban fabric and facilitating
        the movements of “micro-publics” towards these spaces. This aspect of OASIS is fundamental;
        even though the web app is an important component of OASIS, the platform should not be seen
        as (yet another) “Social Network for the Arts”, but rather as a physical-digital nexus that taps
        on the potential of mobile and web technologies to enable new possibilities for dialog, interaction,
        and creation within our communities.
      </p>
      <h3 className="font-header text-2xl mt-6 mb-4">Interested in participating?</h3>
      <p>
        OASIS is currently in the testing stage. If you are a local artist, space provider, or 
        simply a member of the community and are interested in participating in the testing of the platform, 
        please <a className="text-gray-400 underline" href={`/register`}>register</a> to create an OASIS account.
      </p>
      <br/>
      <p>
        OASIS aims to facilitate communication between artists and hosts to organize and promote exhibition events (both physical and virtual).
        These events will populate OASIS' public homepage so visitors can find the current and upcoming exhibitions.
      </p>
      
      <h3 className="font-header text-2xl mt-6 mb-4">Virtual events and spaces</h3>
      <p>
        We are very aware that the reality of art exhibitions has been dramatically affected by the ongoing COVID-19 pandemic. 
        In view of this situation, we have implemented new functionality in the OASIS website that enables the creation of virtual events and spaces
        using the <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://hubs.mozilla.com/">Mozilla Hubs</a> and <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://matterport.com/">Matterport</a> platforms. 
        Each event in OASIS can be optionally linked to a custom Hubs room where the artwork will be displayed in an interactive 3D environment where artists, hosts, 
        and visitors can meet each other safely and experience the art and the community. And places have the option to link a Matterport space from their pages,
        which gives visitors the opportunity to easily navigate the physical venue and see the artworks in high-res from their computers or phones. If you are 
        interested in creating virtual events or spaces please send us an email to <a href="mailto:info@oasis.art"><b>info@oasis.art</b></a>.
      </p>

      <h3 className="font-header text-2xl mt-6 mb-4">Support</h3>
      <p>
        OASIS has received support from Cambridge Arts Council through its <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="https://www.cambridgema.gov/arts/programs/grants">Artists Grant program</a>, 
        Boston University's <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="http://www.bu.edu/spark/">Spark! technology incubator</a>, 
        and Signal Culture's <a className="text-gray-400 underline" target="_blank" rel="noreferrer" href="http://signalculture.org/residency.html">residence for researchers and toolmakers</a>.
      </p>
    </AboutContainer>      
    </div>
  );
}

export default About;
