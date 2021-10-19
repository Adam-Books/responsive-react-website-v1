import React, { useState } from "react";
import styled from "styled-components";
import "../style.css";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  @media only screen and (max-width: 1120px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  background: crimson;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  z-index: 3;
`;

const Register = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 15% auto;

  @media only screen and (max-width: 1280px) {
    margin: calc(20%) auto;
  }

  @media only screen and (max-width: 780px) {
    width: 80%;
    margin: calc(50% - 90px) auto;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 4px 0;
  outline: none;
  font-size: 17px;
`;

const Buttonn = styled.button`
  padding: 10px;
  border-radius: 10px;
  margin: 4px 0;
  background: crimson;
  outline: #fff;
  border: 2px solid #fff;
  font-size: 17px;
  color: #fff;
  cursor: pointer;
`;

const Navbar = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Services</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button id="join" onClick={toggleModal}>
          JOIN TODAY
        </Button>
        {modal && (
          <Register>
            <Form>
              <Input type="text" placeholder="First Name" required></Input>
              <Input type="text" placeholder="Last Name" required></Input>
              <Input
                type="email"
                placeholder="user@example.com"
                required
              ></Input>
              <Input type="password" placeholder="password" required></Input>

              <Buttonn id="reg" onClick={toggleModal}>
                Register
              </Buttonn>
            </Form>
          </Register>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
