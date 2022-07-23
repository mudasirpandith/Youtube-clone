import React from "react";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 10px;
  background-color: transparent;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;
const More = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
`;
const Links = styled.span`
  margin-left: 40px;
`;
const Link = styled.span`
  margin-left: 30px;
`;
const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to kTupe</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>Sign In</Button> <Title>or</Title>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link> <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};
export default Signin;
