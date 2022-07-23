import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Input = styled.input`
 border: none;
border-bottom:1px solid   ${({ theme }) => theme.textSoft};
background-color:transparent;
color: ${({ theme }) => theme.text};
outline:none;
width:100%;
padding:20px
  `;
const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://www.techsmith.com/blog/wp-content/uploads/2019/06/YouTube-Thumbnail-Sizes.png" />
        <Input placeholder="Add a new comment..." />
        
        <Send />
      </NewComment>
    </Container>
  );
};
export default Comments;
