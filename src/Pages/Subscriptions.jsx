import React from "react";
import styled from "styled-components";

import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import SubscriptionAndLibraryCard from "../components/SubscriptionAndLibraryCard";
const Container = styled.div`
  margin: 0 90px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Heading = styled.div`
  display: flex;
  flex: 1;
`;
const Title = styled.h1`
  display: flex;
  font-size: 16px;
  flex: 7;
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textSoft};
  border: none;
`;
const ColoredText = styled.h3`
  font-size: 14px;
  color: #3ea6ff;

  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
const Hr = styled.hr`
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  height: 1px;
  border: none;
  max-width: 100%;
  margin-top: 20px;
`;
const Subscriptions = () => {
  return (
    <Container>
      <Heading>
        <Title>Today</Title>
        <Buttons>
          <Button>
            <ColoredText>MANAGE</ColoredText>
          </Button>

          <Button>
            <AppsIcon />
          </Button>
          <Button>
            <ListIcon />
          </Button>
        </Buttons>
      </Heading>
      <Wrapper>
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
      </Wrapper>
      <Hr />
      <Heading>
        <Title>Yesterday</Title>
      </Heading>
      <Wrapper>
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
        <SubscriptionAndLibraryCard
          title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
          type="subscrip"
        />{" "}
      </Wrapper>
    </Container>
  );
};

export default Subscriptions;
