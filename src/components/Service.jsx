import React, { useState } from "react";
import styled from "styled-components";
import Man2 from "../img/man2226.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  transform: scale(0.8);
  margin-left: -300px;
  margin-top: 72px;
  /* width: 100%; */
  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    position: relative;
    top: calc(50% - 150px);
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1``;

const Description = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media only screen and (max-width: 480px) {
    font-size: 13px;
    margin-top: 10px;
    justify-content: center;
    margin: 10px 90px;
    width: 60%;
  }
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  z-index: 5;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 30%;
  background: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
`;

const Service = () => {
  const [open, setOpen] = useState(false);

  const smallScreen = window.screen.width <= `480` ? true : false;
  return (
    <Container>
      <Left>
        <Image open={open} src={Man2} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Description>
            {" "}
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
          </Description>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it Works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
