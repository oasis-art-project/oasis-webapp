import React, { Component } from 'react';
import Grid from 'styled-components-grid';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import moment from 'moment';
import { Loader, Seo, Like, Tag, TagsContainer, Carousel } from '../shared';
import { IMGS_URL } from '../../helpers/index';

import ArtistSection from './ArtistSection';

const filterArray = (array, id) => {
  if (!array) return null;
  return array.filter(el => el.id === parseInt(id))[0];
};

const DateFormater = date => moment(date).format('MMM Do YY');

const formatName = (name, lastName) =>
  `${capitalize(name)} ${capitalize(lastName)}`;

const formatDates = (start, end) =>
  `${DateFormater(start)} - ${DateFormater(end)}`;

const Container = styled.div`
  padding: 10px;
`;

const EventImage = styled.img`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const EventName = styled.h3`
  font-weight: 400;
  margin-right: 20px;
`;

const EventInfoCont = styled.div`
  margin-bottom: 20px;
`;

const EventInfoItem = styled.h3`
  font-weight: 400;
  margin: 3px 0;
`;

const EventDesc = styled.p``;

class Event extends Component {
  state = {
    currentEvent: filterArray(this.props.events, this.props.match.params.id),
  };

  componentDidMount() {
    if (this.state.currentEvent === null) {
      this.props.getEvent(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.events !== prevProps.events) {
      this.setState({
        currentEvent: filterArray(
          this.props.events,
          this.props.match.params.id
        ),
      });
    }
  }

  render() {
    const { currentEvent } = this.state;
    if (currentEvent) {
      const tags = currentEvent.tags.split(';');
      const artisName = `${formatName(
        currentEvent.artists[0].firstName,
        currentEvent.artists[0].lastName
      )}`;
      return (
        <div>
          <Seo title={currentEvent.name} />
          <Grid halign="center">
            <Grid.Unit size={{ mobile: 1, desktop: 0.5 }}>
              <Container>
                <Carousel>
                  <div>
                    <EventImage
                      src={`${IMGS_URL}/events/${currentEvent.id}/event.jpg`}
                    />
                  </div>
                </Carousel>
                <Header>
                  <EventName>{currentEvent.name}</EventName>
                  <Like />
                </Header>
                <EventInfoCont>
                  <EventInfoItem>{artisName}</EventInfoItem>
                  <EventInfoItem>
                    {capitalize(currentEvent.place.description)}
                  </EventInfoItem>
                  <EventInfoItem>
                    {formatDates(currentEvent.startTime, currentEvent.endTime)}
                  </EventInfoItem>
                </EventInfoCont>
                <EventDesc>{currentEvent.description}</EventDesc>
                {tags && (
                  <TagsContainer>
                    {tags.map(tag => (
                      <Tag key={tag}>{capitalize(tag)}</Tag>
                    ))}
                  </TagsContainer>
                )}
              </Container>
            </Grid.Unit>
            <Grid.Unit size={{ mobile: 1, desktop: 0.4 }}>
              <Container>
                <ArtistSection
                  artist={currentEvent.artists[0]}
                  fullName={artisName}
                />
              </Container>
            </Grid.Unit>
          </Grid>
        </div>
      );
    }
    return <Loader />;
  }
}

export default Event;
