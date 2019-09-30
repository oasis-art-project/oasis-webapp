import React from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import Link from './Link';
import Button from './Button';
import Like from './Like';
import NoImage from '../../assets/no-image.svg';
import { Tag, TagsContainer } from './Tags';

const Container = styled.div`
  flex: 0 1 300px;
  margin: 10px;
  @media only screen and (max-width: 660px) {
    flex: 0 1 100%;
    margin-bottom: 60px;
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

const Card = ({ intent, title, image, description, id, tags, theme }) => (
  <Container>
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
    <Link to={`/event/${id}`}>
      <Button intent="secundary">Event Detail</Button>
    </Link>
  </Container>
);

export default Card;
