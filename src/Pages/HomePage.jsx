import React from "react";
import styled from "styled-components";
import Card from "../components/card";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
 
`;

export const HomePage = () => {
  return (
    <Container>
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
      <Card /> <Card /> <Card /> <Card />
      <Card />
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
      <Card /> <Card /> <Card /> <Card />  
       
    </Container>
  );
};
