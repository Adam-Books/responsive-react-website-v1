import React from "react";
import styled from "styled-components";
import Man from "../img/man.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 1120px) {
   width: 100%;
   text-align: center;
   font-size: 45px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    text-align: center;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: darkblue;
  padding: 15px;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 1120px) {
    margin: -20px 0 30px 0;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  @media only screen and (max-width: 1120px) {
   color: #111;
  }
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
  @media only screen and (max-width: 1120px) {
   color: #111;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  /* width: 90%;
  margin-right: -60px;
  margin-top: 10px;
  border-radius: 30px;
  overflow: hidden; */
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </Description>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call Us (002) 01111111111</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Man}></Image>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
