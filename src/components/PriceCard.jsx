import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100%; */

  background: white;
  border: 10px;

  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.85);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.85);

  @media only screen and (max-width: 1180px) {
    margin: 10px;
    padding: 10px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;

  @media only screen and (max-width: 780px) {
    font-size: 20px;
    /* width: 50px; */
  }
`;

const Type = styled.button`
  /* cursor: pointer; */
  padding: 10px;
  margin: 10px 0;
  border: 1.5px solid crimson;
  color: crimson;
  background: #fff;
  border-radius: 20px;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;

  @media only screen and (max-width: 780px) {
    margin: 10px;
    font-size: 13px;
    /* text-align: center; */
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
  border: none;

  @media only screen and (max-width: 780px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>{" "}
      </List>
      <Button>Join now</Button>
    </Container>
  );
};

export default PriceCard;
