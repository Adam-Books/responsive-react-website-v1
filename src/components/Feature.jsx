import React from "react";
import styled from "styled-components";
import App from "../img/app2.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 1120px) {
    padding: 30px 20px;
    text-align: center;
  }
`;

const Left = styled.div`
  width: 55%;
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const Image = styled.img`
  margin-left: -50px;
  width: 68%;
  transform: scale(0.9);
`;

const Right = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 1120px) {
    font-size: 45px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;

  @media only screen and (max-width: 1120px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: 20px;
  color: #777;
  @media only screen and (max-width: 1120px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  color: white;
  margin-top: 20px;
  background: darkblue;
  border-radius: 20px;
  padding: 15px 20px;
  width: 150px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={App} alt="app-image" />
      </Left>
      <Right>
        <Title>
          <p>
            <b>Good</b> design
          </p>
          <p>
            <b>Good</b> business
          </p>
        </Title>
        <SubTitle>We Know that good design means good business</SubTitle>
        <Description>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Description>
        <Description>
          {" "}
          We care your business and guarantee you to achieve marketing goals.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
