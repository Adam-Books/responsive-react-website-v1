import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background: #111;
  color: lightgray;

  @media only screen and (max-width: 430px) {
    height: 20%;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  @media only screen and (max-width: 430px) {
    flex-direction: column;
    margin-top: -4px;
  }
`;

const ListItem = styled.li`
  margin-right: 20px;

  @media only screen and (max-width: 430px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const CoprRight = styled.span`
  @media only screen and (max-width: 430px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guid</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <CoprRight>&copy; Adam Dev</CoprRight>
      </Wrapper>
    </Container>
  );
};

export default Footer;
