import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  &:hover {
    box-shadow: 0 0.5px ${({ theme }) => theme.textSoft};
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Image = styled.img`
  width: ${(props) => (props.rem !== "yes" ? "100%" : "10%")};
  height: ${(props) => (props.type === "sm" ? "140px" : "202px")};
  gap:10px
  background-color: #999;
  flex:1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0" : "16px")};
  display: ${(props) => props.type === "liked" && "none"};
  gap: 12px;
  flex: 1;
  flex-direction: horizontal;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-top: 12px;
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
  display: ${(props) => props.rem === "yes" && "none"};
`;

const Card = ({ type, rem, title }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type} rem={rem}>
        <Image
          type={type}
          rem={rem}
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7mjcd09SDJPeHZ3Eol8msAG0jE7EH1ee8g&usqp=CAU"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/ytc/AKedOLSH14_tdB5bN4_3WJxDcljIXgHjLIKuVfDVHdnl3w=s88-c-k-c0x00ffffff-no-rj"
          />
          <Text>
            <Title>{title}</Title>
            <ChannelName>
              Ktupe <CheckCircleIcon sx={{ fontSize: 12 }} />
            </ChannelName>
            <Info rem={rem}>125 views ⋅ 2 mins ago </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
