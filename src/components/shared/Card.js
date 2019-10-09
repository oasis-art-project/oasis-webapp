import React from 'react';
import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
import Link from './Link';
import Like from './Like';
import NoImage from '../../assets/no-image.svg';
import { Tag, TagsContainer } from './Tags';

const StyledLink = styled(Link)`
  color: inherit;
  display: block;
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
  }
`;

const ImageContainer = styled.div`
  height: ${props => props.small ? '100px' : '200px'};
  ${props => props.small && 'width: 100%'};
  background: url(${props => (props.src ? props.src : NoImage)});
  background-size: cover;
  background-position: center;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  ${props => props.small && 'margin-bottom: 5px !important'}
`;

const Header = styled.div`
  display: flex;
  position: relative;
`;

const StarContainer = styled.div`
  position: absolute;
  right: 0;
`;

const Description = styled.p`
  ${props => props.small && 'margin: 5px 0 !important'}
`;

const Card = ({ small, intent, title, image, description, id, tags, theme, noStar, noLink }) => (
  <Container>
    <StyledLink noLink={noLink} to={`/event/${id}`} intent={intent}>
    {/* <Card interactive={true} elevation={2}> */}
    <ImageContainer small={small} src={image} />
    <Header>
      <Title small={small}>{title}</Title>
      {!noStar && <StarContainer>
        <Like />
      </StarContainer>}
    </Header>
    <Description small={small}>{description}</Description>
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

export default Card;
