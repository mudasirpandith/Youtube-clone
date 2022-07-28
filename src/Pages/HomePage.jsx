import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import HomeImage from "../Images/homeImage.png";
import { Button } from "@mui/material";
import SmallCards from "../components/smallCards";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  color: #354259;
  background-color: #cfd2cf;
`;

const LeftPart = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;
  text-align: center;
  margin: auto 20px;
`;
const ImagePart = styled.div`
  display: flex;
`;
const Heading = styled.h2`
  font-size: 24px;
`;
const TopHeading = styled.h2`
  font-size: 30px;
`;
const SubHeading = styled.h4`
  font-size: 14px;
`;
const Image = styled.img`
  width: ${window.innerWidth};
`;

const NewTests = styled.div`
  padding: 10px;
`;
const NewTestCards = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  flex-direction: horizontal;
`;

const Hr = styled.div`
  margin: 15px 0;
  color: red;

  background-color: grey;
  height: 1px;
  border: none;
  max-width: 100%;
`;
const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <ImagePart>
          <Image src={HomeImage} />
        </ImagePart>
        <LeftPart>
          <TopHeading>
            We are <strong>Leaders</strong>
          </TopHeading>
          <SubHeading>
            We are the <strong>Revolution</strong>
          </SubHeading>

          <Heading>
            Do you know all concepts but still can not solve problems? We are
            here for you...
          </Heading>
          <SubHeading>
            We provide Test series for National Level competitive exams like
            NEET ,JEE Mains and for State Level Examinations.
          </SubHeading>
          <SubHeading>
            After exam we provide detailed solution in the both video as well as
            pdf form
          </SubHeading>
          <Button
            color="inherit"
            variant="contained"
            endIcon={<ArrowForwardIos />}
          >
            {" "}
            Take a Tour
          </Button>
        </LeftPart>
      </Wrapper>
      <NewTests>
        <Hr />

        <Heading>New Tests 2023</Heading>
        <NewTestCards>
          <SmallCards /> <SmallCards /> <SmallCards /> <SmallCards />{" "}
        </NewTestCards>
      </NewTests>
    </Container>
  );
};

export default HomePage;
