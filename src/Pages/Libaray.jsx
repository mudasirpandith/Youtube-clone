import { HistoryOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";

import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SubscriptionAndLibraryCard from "../components/SubscriptionAndLibraryCard";
const Container = styled.div`
  margin: 0 90px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  flex: 7;
  flex-direction: horizontal;
  gap: 20px;
`;
const Text = styled.p`
  display: flex;

  font-size: 16px;
`;
const Icon = styled.div`
  margin-top: 12px;
  display: flex;

  font-size: 18px;
`;
const ColoredText = styled.p`
  font-size: 14px;
  color: #3ea6ff;
  display: inline-block;
  cursor: pointer;
`;
const Detail = styled.p`
  margin-top: -18px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;
const Hr = styled.div`
  color: ${({ theme }) => theme.Text};
  background-color: ${({ theme }) => theme.soft};
  height: 1px;
  border: none;
  max-width: 100%;
`;

const WatchLaterContainer = styled.div`
  display: flex;
  flex-direction: horizontal;
  flex: 1;
`;
const WatchLaterHeading = styled.div`
  display: flex;
  flex-direction: horizontal;
  flex: 1;
`;

const WatchLaterVideos = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
`;
const WatchLaterUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  flex: 2;
  margin-bottom: 20px;
`;
const WatchLaterCards = styled.div`
  display: flex;
  flex-direction: horizontal;
  gap: 10px;
  margin-bottom: 20px;
`;
const Username = styled.h2`
  display: flex;
  margin: 15px auto;
  font-size: 16px;
`;
const Image = styled.img`
  margin: 0 auto;
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
const UsDetails = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  margin: 6px 0;
`;
const P = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
  display: inline-block;
  position: relative;
  margin-top: 0px;
  float: right;
`;
const LikedContainer = styled.div`
  display: flex;
  flex-direction: horizontal;
  flex: 7;
`;
const Libaray = () => {
  return (
    <Container>
      <Heading>
        <Title>
          {" "}
          <Icon>
            <HistoryOutlined />
          </Icon>{" "}
          <Text>History</Text>
        </Title>
        <Detail>
          Videos that you watch will be shown here.{" "}
          <ColoredText>Browse videos</ColoredText>{" "}
        </Detail>
      </Heading>

      <WatchLaterContainer>
        <WatchLaterVideos>
          {" "}
          <Hr />
          <WatchLaterHeading>
            <Title>
              <Icon>
                <WatchLaterOutlinedIcon />
              </Icon>{" "}
              <Text>Watch Later </Text>{" "}
            </Title>
            <Button>SEE ALL</Button>
          </WatchLaterHeading>
          <WatchLaterCards>
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
          </WatchLaterCards>
          <Hr />
        </WatchLaterVideos>
        <WatchLaterUser>
          <Image src="https://yt3.ggpht.com/ytc/AKedOLSH14_tdB5bN4_3WJxDcljIXgHjLIKuVfDVHdnl3w=s88-c-k-c0x00ffffff-no-rj" />
          <Username>Mudasir Pandith</Username>
          <Hr />
          <UsDetails>
            Subscriptions <P>140</P>
          </UsDetails>{" "}
          <Hr />
          <UsDetails>
            Uploads <P>67</P>
          </UsDetails>{" "}
          <Hr />
          <UsDetails>
            Likes <P>12.2K</P>
          </UsDetails>{" "}
          <Hr />
        </WatchLaterUser>
      </WatchLaterContainer>
      <LikedContainer>
        <WatchLaterVideos>
          {" "}
          <WatchLaterHeading>
            <Title>
              <Icon>
                <ThumbUpAltOutlined />
              </Icon>{" "}
              <Text>Liked Videos </Text>{" "}
            </Title>
            <Button>SEE ALL</Button>
          </WatchLaterHeading>
          <WatchLaterCards>
            <SubscriptionAndLibraryCard
              title="Lorem ea deserunt ipsa modi iure ex reprehenderit.
"
              type="subscrip"
            />{" "}
          </WatchLaterCards>
          <Hr />
        </WatchLaterVideos>
        <WatchLaterUser> </WatchLaterUser>
      </LikedContainer>


      <WatchLaterHeading>
        <Title>
          <Icon>
            <ContentCutOutlinedIcon />
          </Icon>{" "}
          <Text>Your Clips </Text>{" "}
        </Title>
      </WatchLaterHeading>
      <br />
      <Detail>
        Clip and share your favourite moments. Your list will be shown right
        here.
      </Detail>
    </Container>
  );
};
export default Libaray;
