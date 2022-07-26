import { MoreHorizSharp, ShuffleOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import ModifiedCard from "../components/ModifiedCard";
import Card from "../components/card";
const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.text};

  font-family: "Roboto", sans-serif;
  margin-top: 40px;
`;
const PlayALL = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-family: "Roboto", sans-serif;
  margin-top: -94px;
  padding: 10px 0;
  position: absolute;
  width: 100%;
  opacity: 70%;
  background-color: black;
`;
const Details = styled.p`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;
const Collection = styled.div`
  position: sticky;
  top: 53px;
  height: 200px;

  flex: 1;
`;
const AllVedios = styled.div`
  flex: 4;
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 10px;
  outline: none;

  border: 0;
  border-radius: 2px;
`;
const Shuffle = styled.div`
  display: flex;
  gap: 20px;
`;
const Hr = styled.div`
  margin: 15px 0;
  border: 0.01px solid ${({ theme }) => theme.textSoft};
`;

const UserDetails = styled.div`
  display: flex;
  gap: 20px;
  flex-dirextion: horizontal;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
const Username = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
const LikedVideos = (props) => {
  var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 5, 4, 3, 3, 5, 6, 2, 3, 5]; //for parsing liked videos and get their index
  return (
    <Container>
      <Wrapper>
        <Collection>
          <Card type="liked" />
          <PlayALL>Play All</PlayALL>
          <Title>Liked Videos</Title>
          <Details>13 videos ⋅ No views ⋅ Updated today</Details>
          <Button>🔒Private</Button> <br />
          <Shuffle>
            {" "}
            <ShuffleOutlined />
            <MoreHorizSharp />
          </Shuffle>
          <Hr />
          <UserDetails>
            <Image src="https://yt3.ggpht.com/ytc/AKedOLSH14_tdB5bN4_3WJxDcljIXgHjLIKuVfDVHdnl3w=s88-c-k-c0x00ffffff-no-rj" />
            <Username> Mudasir Pandith</Username>
          </UserDetails>
        </Collection>
        <AllVedios>
          {c.map((row, index) => {
            return (
              <>
                <ModifiedCard
                  serial={index}
                  type="sm"
                  liked="yes"
                  title="All adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
                />{" "}
              </>
            );
          })}
        </AllVedios>
      </Wrapper>
    </Container>
  );
};
export default LikedVideos;
