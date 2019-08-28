import React from 'react';
import styled from 'styled-components';
import NoImage from '../../assets/no-image.svg';
import { Link } from 'react-router-dom';
import Button from './Button';

const Container = styled.div`
  margin: 0 5px 20px;
  width: 300px;
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

const Card = ({ intent, title, img, description, id }) => (
  <Container>
    <ImageContainer src={img} />
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
