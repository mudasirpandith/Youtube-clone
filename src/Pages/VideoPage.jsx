import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShareIcon from "@mui/icons-material/Share";
import { ThumbUpSharp } from "@mui/icons-material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Card from "../components/card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comment from "../components/Comment";
import Comments from "../components/comments";
const Container = styled.div`
display:flex;
gap:24px:`;
const Content = styled.div`
  flex: 5;
`;
const Recommendation = styled.div`
  flex: 2;
  margin-left: 20px;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubscribeButton = styled.button`
  background-color: red;
  border-radius: 4px;
  color: white;
  border: none;
  height: max-content;
  padding: 10px 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const ChannelDescription = styled.p`
  font-size: 14px;
`;
const Hr = styled.div`
  margin: 15px 0;
  border: 0.5px solid #373737;
`;
const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="545"
            src="https://www.youtube.com/embed/WGlFrt9FiJE"
            title="Sab Aajao - ALPHA Launched 🔥| Big Announcement for students"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>First Video</Title>
        <Details>
          <Info>2,433,22 Views Jun 22 2022</Info>
          <Buttons>
            <Button color="inherit" startIcon={<ThumbUpSharp />}>
              {" "}
              1.2K
            </Button>
            <Button color="inherit" startIcon={<ThumbDownIcon />}>
              {" "}
              DisLike
            </Button>
            <Button startIcon={<ShareIcon />} color="inherit">
              Share
            </Button>
            <Button color="inherit" startIcon={<ContentCutIcon />}>
              {" "}
              Clip
            </Button>
            <Button color="inherit" startIcon={<FlagOutlinedIcon />}>
              {" "}
              Report
            </Button>
            <Button color="inherit" startIcon={<MoreHorizIcon />}>
              {" "}
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png" />
            <ChannelDetail>
              <ChannelName>Apna College</ChannelName>
              <ChannelCounter>11.1M Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae aliquid sequi quasi aperiam, cupiditate culpa
                quisquam. Unde, officia totam! Voluptate dicta eaque debitis
                iste deserunt. Dolore nobis temporibus expedita hic?
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeButton>Subscribe</SubscribeButton>
        </Channel>
        <Hr />
        <Comments />
        <Comment />
        <Comment /> <Comment />
      </Content>
      <Recommendation>
        {" "}
        Watch Similar Videos
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default VideoPage;
