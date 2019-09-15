import React from 'react';
import styled from 'styled-components';
import NoImage from '../../assets/no-image.svg';
import { Link } from 'react-router-dom';
import Button from './Button';

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
`;

const Card = ({ intent, title, image, description, id }) => (
  <Container>
    <ImageContainer src={image} />
    <Header>
      <Title>{title}</Title>
    </Header>
    <p>{description}</p>
    <Link to={`/event/${id}`}>
      <Button intent="secundary">Event Detail</Button>
    </Link>
  </Container>
);

export default Card;
