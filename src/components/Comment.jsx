import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`

  font-size: 12px;
  font-weight: 400;
  color: color: ${({ theme }) => theme.textSoft};
  margin-left:5px;
`;
const Text = styled.span`
  font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png" />
      <Details>
        <Name>
          Mudasir Pandith <Date>Jun 01</Date>
        </Name>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dolorum dignissimos culpa id, voluptatem fugit laboriosam? Impedit,
          provident. Porro earum corporis animi fugit iure quae necessitatibus
          similique modi quasi eveniet!
        </Text>
      </Details>
    </Container>
  );
};
export default Comment;
