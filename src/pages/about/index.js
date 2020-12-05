import React from 'react';
import styled from 'styled-components';
import { Seo } from '../../components';

const Container = styled.div`
  @media only screen and (max-width: 1300px) {
    padding: 0 20px;
  }
`;

const About = () => (
  <>
    <Seo title="About" />
    <Container>
      <p>
        OASIS is a decentralized art platform designed to connect artists with
        space providers and audiences in the local community. The main goals of
        this platform are (i) to make more spaces available to artists to show
        their work, (ii) to give space providers a unique channel to announce
        the availability of their spaces and the type of work they are looking
        for, and (iii) to provide audiences and patrons the means to find and
        experience the artworks currently on display near them and to connect
        with local creators.
      </p>
      <p>
        OASIS’ most immediate goal is to facilitate the interactions between
        creators, hosts, and audiences at the juncture of online and local
        communities. It does so by opening up existing interstitial spaces
        suitable for art exhibition throughout the urban fabric and facilitating
        the movements of “micro-publics” towards these spaces. This aspect of
        OASIS is fundamental; even though the web app is an important component
        of OASIS, the platform should not be seen simply as a “Social Network
        for the Arts”, but rather as a physical-digital nexus that taps on the
        potential of mobile technologies to enable new possibilities of dialog,
        interaction, and creation within our communities.
      </p>
      <p>
        OASIS is currently in beta testing stage. If you are a local artist or
        space provider and are interested in participating in the beta testing,
        please create an OASIS account:
      </p>
      <ol>
        <li>
          Artist accounts contain basic biographic information, representative
          images of work, and links to social media accounts (instagram,
          twitter, facebook).
        </li>
        <li>
          Space host accounts allow to enter the list of spaces that a host is
          currently managing. For each space, brief description of the space,
          location, and descriptive images are required.
        </li>
      </ol>
      <p>
        OASIS’ most immediate goal is to facilitate the interactions between
        creators, hosts, and audiences at the juncture of online and local
        communities. It does so by opening up existing interstitial spaces
        suitable for art exhibition throughout the urban fabric and facilitating
        the movements of “micro-publics” towards these spaces. This aspect of
        OASIS is fundamental; even though the web app is an important component
        of OASIS, the platform should not be seen simply as a “Social Network
        for the Arts”, but rather as a physical-digital nexus that taps on the
        potential of mobile technologies to enable new possibilities of dialog,
        interaction, and creation within our communities.
      </p>
      <p>
        OASIS enables communication between artists and hosts to organize new
        exhibition events. These events will populate OASIS' public homepage so
        visitors can find the current and upcoming exhibitions.
      </p>      
      <p>
        OASIS has received support from Cambridge Arts Council through its
        Artists Grant program
      </p>
    </Container>
  </>
);

export default About;
