import React from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import { Card } from '@blueprintjs/core';
import Link from './Link';
import Button from './Button';
import Like from './Like';
import NoImage from '../../assets/no-image.svg';
import { Tag, TagsContainer } from './Tags';

const StyledLink = styled(Link)`
  color: inherit;
`;

const Container = styled.div`
  flex: 0 1 300px;
  margin: 10px;
  @media only screen and (max-width: 660px) {
    flex: 0 1 100%;
    margin-bottom: 60px;
  }
  &:hover {
    cursor: pointer;
    /* box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), */
      /* 0 8px 24px rgba(16, 22, 26, 0.2); */
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  background: url(${props => (props.src ? props.src : NoImage)});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  position: relative;
`;

const StarContainer = styled.div`
  position: absolute;
  right: 0;
`;

const CardR = ({ intent, title, image, description, id, tags, theme }) => (
  <Container>
    <StyledLink to={`/event/${id}`}>
    {/* <Card interactive={true} elevation={2}> */}
    <ImageContainer src={image} />
    <Header>
      <Title>{title}</Title>
      <StarContainer>
        <Like />
      </StarContainer>
    </Header>
    <p>{description}</p>
    {tags && (
      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag}>{capitalize(tag)}</Tag>
        ))}
      </TagsContainer>
    )}
    {/* </Card> */}
    </StyledLink>
  </Container>
);

export default CardR;
