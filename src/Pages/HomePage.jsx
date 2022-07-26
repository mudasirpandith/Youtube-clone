import React from "react";
import styled from "styled-components";
import Card from "../components/card";
const Container = styled.div`
  display: flex;

  flex-direction: column;
`;
const VideosCard = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const Nav = styled.div`
  position: sticky;
  top: 56px;
  z-index: 1;
  margin-left: -20px;
  margin-bottom: 20px;
  margin-top: -22px;
  display: flex;
  flex: 1;
  gap: 15px;
  background-color: ${({ theme }) => theme.bgLighter};
  width: 1280px;
  height: 60px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavButtons = styled.button`
  background-color: ${({ theme }) => theme.soft};
  height: 30px;
  width: 100%;
  //text-align: center;
  margin: 15px 0;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 20px;
  padding: 10px;
`;

export const HomePage = () => {
  return (
    <Container>
      <Nav>
        <NavButtons>All</NavButtons> <NavButtons>Comedy</NavButtons>{" "}
        <NavButtons>Action</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Live</NavButtons> <NavButtons>Gaming</NavButtons>{" "}
        <NavButtons>Cricket</NavButtons> <NavButtons>Football</NavButtons>{" "}
        <NavButtons>Cartoon</NavButtons> <NavButtons>React</NavButtons>{" "}
        <NavButtons>HTML</NavButtons> <NavButtons>News</NavButtons>{" "}
        <NavButtons>Home</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Home</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Home</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Home</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Home</NavButtons> <NavButtons>Home</NavButtons>{" "}
        <NavButtons>Home</NavButtons>
      </Nav>

      <VideosCard>
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />{" "}
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
        <Card title="How to use styled components to develop react App" />
      </VideosCard>
    </Container>
  );
};
