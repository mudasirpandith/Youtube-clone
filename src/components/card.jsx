import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "140px" : "202px")};
  gap:10px
  background-color: #999;
  flex:1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0" : "16px")};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
  background-color: #999;
`;
const Text = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margim: 2px 0;
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          loading="lazy"
          src="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png"
          />
          <Text>
            <Title>Test Video</Title>
            <ChannelName>
              Ktupe <CheckCircleIcon sx={{ fontSize: 12 }} />
            </ChannelName>
            <Info>125 views ⋅ 2 mins ago </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
