import { Button } from "@mui/material";
import styled from "styled-components";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Notifications, SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index:1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 50px;
  padding:10px 0  0 0;
  opacity:99%;
`;
const Wrapper = styled.div`
  display: flex;
  align-item: center;
  height: 100%;
  padding: 0 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlined />
        </Search>
        <Notifications />
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button startIcon={<AccountCircleOutlinedIcon />} variant="outlined">
            Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
