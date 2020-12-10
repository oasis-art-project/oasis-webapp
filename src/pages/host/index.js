import React, { useEffect } from 'react';
import capitalize from 'lodash/capitalize';
import { find, propEq } from 'ramda';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import { Loader, Seo, Tag, TagsContainer, Tabs, Tab } from '../../components';
import { IMGS_URL } from '../../helpers/index';

import PlaceSection from './PlaceSection';

const formatName = (first, last) => `${capitalize(first)} ${capitalize(last)}`;

const Container = styled.div`
  padding: 10px;
`;

const HostImage = styled.img`
  width: 256px;
  margin-left: 0px;
  margin-top: 20px;
`;

const HostName = styled.h3`
  font-weight: 400;
  margin-right: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const HostBio = styled.p``;

const PlaceContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

const Host = ({
  current,
  users,
  loading,
  places,
  getHost,
  setCurrentHost,
  getPlacesFromHost,
  match: {
    params: { id },
  },
}) => {
  // This is the same as componentDidMount
  useEffect(() => {
    initHosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initHosts = () => {
    if (!users && !current && loading === false) {
      getHost(id);
      getPlacesFromHost(id);
    }
    if (current == null && users) {
      setHost();
    }
    if (current && current.id !== id) {
      setHost();
    }
  };

  const setHost = () => {
    const fromUsers = users ? find(propEq('id', id))(users) : false;
    if (fromUsers) {
      setCurrentHost(fromUsers);
      getPlacesFromHost(id);
    } else {
      getHost(id);
      getPlacesFromHost(id);
    }
  };

  if (current) {
    const tags = current.tags.split(';');

    return (
      <div>
        <Seo title={`${formatName(current.firstName, current.lastName)}`} />
        <Grid halign="center">
          <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
            <Container>
              <div>
                <HostImage src={`${IMGS_URL}/${current.images[0]}`} />
              </div>
              <Header>
                <HostName>{`${formatName(current.firstName, current.lastName)}`}</HostName>
              </Header>

              <HostBio>{current.bio}</HostBio>
              {tags && (
                <TagsContainer>
                  {tags.map(tag => (
                    <Tag key={tag}>{capitalize(tag)}</Tag>
                  ))}
                </TagsContainer>
              )}
            </Container>
          </Grid.Unit>

          <Grid.Unit size={{ mobile: 1, desktop: 1 }}>
            <h3>Places</h3>
            <PlaceContainer>
              {places && places.map(p => <PlaceSection place={p} />)}
            </PlaceContainer>
          </Grid.Unit>


        </Grid>
      </div>
    );
  }
  return <Loader />;
};

export default Host;
