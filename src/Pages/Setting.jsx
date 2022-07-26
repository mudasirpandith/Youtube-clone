import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 100px;
`;
const Accounts = styled.div`
  display: flex;
`;

const AccountsDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`;
const Image = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
`;
const Title = styled.h1`
  font-size: 15px;
`;
const Details = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
  margin-top: -5px;
`;
const Hr = styled.hr`
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.soft};
  height: 1px;
  border: none;
  max-width: 100%;
  margin-top: 20px;
`;
const YourChannel = styled.div``;
const YourChannelGrid = styled.div`
  display: flex;
  flex: 2;
`;
const YourChannelTitle = styled.h1`
  display: flex;

  flex: 2;
  font-size: 15px;
`;
const YourChannelAccount = styled.div`
  display: flex;
  flex-direction: column;
  flex: 6;
`;
const UserDetails = styled.div`
  display: flex;
  gap: 20px;
  flex-dirextion: horizontal;
`;
const AvatarImage = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
const Username = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
const ColoredText = styled.h3`
  font-size: 14px;
  color: #3ea6ff;
  margin-bottom: -2px;
  cursor: pointer;
`;
const YourAccount = styled.div``;
const Setting = () => {
  return (
    <Container>
      <Accounts>
        <AccountsDetail>
          <Title>Accounts</Title>
          <h3>Choose how you appear and what you see on YouTube</h3>
          <Details>Signed in as mudasirpandith789@gmail.com</Details>
        </AccountsDetail>
        <Image src="https://media.istockphoto.com/photos/still-a-bit-unsteady-on-my-feet-picture-id187205677?k=20&m=187205677&s=612x612&w=0&h=PUe0MQvokkZKasGU70Diwxd2V_4Ox0SsmZuJzjxmdOA=" />
      </Accounts>
      <Hr />
      <YourChannel>
        <Title>Your YouTube channel</Title>
        <Details>
          This is your public presence on YouTube. You need a channel to upload
          your own videos, comment on videos or create playlists.
        </Details>
        <YourChannelGrid>
          <YourChannelTitle>Your Channel</YourChannelTitle>
          <YourChannelAccount>
            {" "}
            <UserDetails>
              <AvatarImage src="https://yt3.ggpht.com/ytc/AKedOLSH14_tdB5bN4_3WJxDcljIXgHjLIKuVfDVHdnl3w=s88-c-k-c0x00ffffff-no-rj" />
              <Username> Mudasir Pandith</Username>
            </UserDetails>
            <ColoredText>Channel status and features</ColoredText>
            <ColoredText>Add or manage your channel(s)</ColoredText>{" "}
            <ColoredText>View advanced settings</ColoredText>
          </YourChannelAccount>
        </YourChannelGrid>
      </YourChannel>
      <Hr />
      <YourAccount>
        <Title>Your account</Title>
        <Details>You sign in to YouTube with your Google Account</Details>
        <YourChannelGrid>
          <YourChannelTitle>Google Account</YourChannelTitle>

          <YourChannelAccount>
            {" "}
            <ColoredText>
              View or change your Google Account settings
            </ColoredText>
            <br />
            <Details>
              You will be redirected to your Google Account page
            </Details>{" "}
          </YourChannelAccount>
        </YourChannelGrid>
        <YourChannelGrid>
          <YourChannelTitle>Membership</YourChannelTitle>

          <YourChannelAccount>
            {" "}
            <ColoredText>Get YouTube Premium</ColoredText> <br />
            <Details>
              YouTube Premium offers uninterrupted music, ad-free videos and
              more
            </Details>
          </YourChannelAccount>
        </YourChannelGrid>
      </YourAccount>
    </Container>
  );
};

export default Setting;
