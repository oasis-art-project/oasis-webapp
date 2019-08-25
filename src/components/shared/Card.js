import React from "react";
import styled from "styled-components";
import NoImage from "../../assets/no-image.svg";

const ImageContainer = styled.div`
  width: 300px;
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

const Container = styled.div`
  margin: 0 5px;
`;

const Card = ({ intent, title, img, description }) => (
  <Container>
    <ImageContainer src={img} />
    <Header>
      <Title>{title}</Title>
    </Header>
    <p>{description}</p>
  </Container>
);

export default Card;
