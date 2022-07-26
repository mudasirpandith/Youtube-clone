import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Container = styled.div`
  width: 260px;
  height:300px
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 8px;
  &:hover {
    box-shadow: 0 0.5px ${({ theme }) => theme.textSoft};
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Image = styled.img`
  width: 100%;
  height:100px;
  gap:10px
  
  flex:1;
`;
const Details = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  flex-direction: horizontal;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: ${(props) => props.type === "subscrip" && "none"};
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
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const SubscriptionAndLibraryCard = ({ type, title }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FWKJxp5J3bFWot4VzCgNbSX6yu6XFC49Gw&usqp=CAU"
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
            <Info>125K views ⋅ 2 mins ago </Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default SubscriptionAndLibraryCard;
