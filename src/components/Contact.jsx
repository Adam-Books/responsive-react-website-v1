import React from "react";
import styled from "styled-components";
import Send from "../img/send.png";
import Map from "../img/map.png";
import Phone from "../img/phone.png";

const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");

  @media only screen and (max-width: 480px) {
    height: 80%;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    margin-bottom: -90px;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 0 50px 50px 40px;

  @media only screen and (max-width: 1180px) {
    text-align: center;
    font-size: 25px;
    margin: 10px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 20px;

  @media only screen and (max-width: 580px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 580px) {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;

  @media only screen and (max-width: 580px) {
    padding: 5px;
    margin-top: 10px;
  }
`;

const TextArea = styled.textarea`
  border-radius: 10px;
  width: 200px;
  height: 60%;
  padding: 20px;
  font-size: 16px;

  @media only screen and (max-width: 580px) {
    padding: 5px;
    margin: 20px -45px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
  background: darkblue;
  border-radius: 10px;
  margin-top: 30px;
  border: none;

  @media only screen and (max-width: 580px) {
    padding: 5px;
    margin: 10px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 6% 0 0 10%;

  @media only screen and (max-width: 1180px) {
    width: 100%;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 580px) {
    width: 100%;
    margin: 10px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 580px) {
    margin-right: 10px;
    width: 17px;
  }
`;

const Text = styled.span`
  font-size: 22px;
  margin-right: 25px;

  @media only screen and (max-width: 580px) {
    padding: 5px;
    margin: 0;
    font-size: 12px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question?<p>Let's get in touch</p>
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message"></TextArea>
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>2021 Tahreer Street, Cairo, Egypt</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>(002) 0000111111111</Text>
            <Text>(002) 0000222222222</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@adam.dev</Text>
            <Text>sales@adam.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
