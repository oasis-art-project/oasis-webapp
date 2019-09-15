import React from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import Link from './Link';
import Button from './Button';
import Like from './Like';
import NoImage from '../../assets/no-image.svg';

const Container = styled.div`
  flex: 0 1 300px;
  margin: 10px;
  @media only screen and (max-width: 660px) {
    flex: 0 1 80%;
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

const TagsContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  & > li {
    margin-right: 5px;
    &:not(:first-child) {
      margin-right: 0px;
    }
  }
`;

const Tag = styled.li`
  background: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 3px 15px;
  font-size: 12px;
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
