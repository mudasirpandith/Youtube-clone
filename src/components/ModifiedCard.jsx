import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Container = styled.div`
  margin-top: 0px;
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.liked === "yes" ? "0" : "10px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  background-color: ${(props) =>
    props.liked === "yes"
      ? ({ theme }) => theme.bgLigher
      : ({ theme }) => theme.bgLigher};
  &:hover {
    box-shadow: 0 0.5px ${({ theme }) => theme.textSoft};
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Image = styled.img`
width: ${(props) => (props.liked === "yes" ? "150px" : "90px")};
height: ${(props) => (props.liked === "yes" ? "80px" : "130px")};
flex: ${(props) => (props.liked === "yes" ? "1" : "2")};

  gap:10px
  background-color: #999;

`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => (props.type === "sm" ? "0" : "16px")};
  display: ${(props) => props.type === "liked" && "none"};
  gap: 12px;
  flex: ${(props) => (props.liked === "yes" ? "7" : "6")};
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
const Title = styled.h2`
  font-size: 14px;
  font-family:Roboto;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margim: 2px 0;
`;
const Info = styled.div`
  display: ${(props) => (props.liked === "yes" ? "none" : "inline-block")};
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const Number = styled.div`
  flex: 0.3;
  text-center: center;
  margin: auto 0 auto 10px;
  display: ${(props) => props.liked !== "yes" && "none"};
  padiding: 0 5px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 17px;
`;
const ModifiedCard = ({ type, liked, title, serial }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type} liked={liked}>
        <Number liked={liked}>{serial + 1}</Number>
        <Image
          type={type}
          liked={liked}
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7mjcd09SDJPeHZ3Eol8msAG0jE7EH1ee8g&usqp=CAU"
        />
        <Details type={type} liked={liked}>
          <ChannelImage
            type={type}
            src="https://yt3.ggpht.com/ytc/AKedOLSH14_tdB5bN4_3WJxDcljIXgHjLIKuVfDVHdnl3w=s88-c-k-c0x00ffffff-no-rj"
          />
          <Text>
            <Title>{title}</Title>
            <ChannelName>
              Ktupe <CheckCircleIcon sx={{ fontSize: 12 }} />{" "}
              <Info liked={liked}>125 views ⋅ 2 mins ago </Info>
            </ChannelName>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default ModifiedCard;
