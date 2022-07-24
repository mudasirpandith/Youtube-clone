import styled from "styled-components";
import React from "react";

import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";

import {
  ArrowDropDown,
  DarkModeOutlined,
  LightModeOutlined,
  PlayCircleFilledWhiteOutlined,
  ShortcutSharp,
  ThumbUpSharp,
} from "@mui/icons-material";
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-family: Roboto;
  height: 90%;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 10px 10px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-size: 24px;
  gap: 5px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  cursor: pointer;
  gap: 5px;
  padding: 7.5px 0;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.div`
  margin: 15px 0;
  color: ${({ theme }) => theme.text};
  border: 0.5px solid ${({ theme }) => theme.textSoft};
`;
export const Menu = ({ darkMode, setDarkMode }) => {
  localStorage.setItem("mode", darkMode);
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            {" "}
            <PlayCircleFilledWhiteOutlined />{" "}
            <span
              style={{
                fontFamily: "cursive",
                marginRight: "-12px",
                fontSize: "30px",
              }}
            >
              k
            </span>{" "}
            <span
              style={{
                fontSize: "25px",
              }}
            >
              {" "}
              Tupe
            </span>
          </Logo>
        </Link>
        <Item title="Home">
          <HomeOutlinedIcon /> Home
        </Item>{" "}
        <Item title="Explore">
          <ExploreOutlinedIcon /> Explore
        </Item>{" "}
        <Item title="Shorts ">
          <ShortcutSharp /> Shorts
        </Item>{" "}
        <Item title=" Subscriptions">
          <SubscriptionsOutlinedIcon /> Subscriptions
        </Item>{" "}
        <Hr />
        Sign in to like videos, comment and subscribe.
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Button startIcon={<AccountCircleOutlinedIcon />} variant="outlined">
            Sign In
          </Button>
        </Link>
        <Hr />
        <Item title=" Libraray">
          <VideoLibraryOutlinedIcon /> Library
        </Item>{" "}
        <Item title="Histroy ">
          <HistoryOutlinedIcon /> History
        </Item>{" "}
        <Item title="Your Videos">
          <SmartDisplayOutlinedIcon /> Your Videos
        </Item>{" "}
        <Item title="Watch Later ">
          <AccessTimeOutlinedIcon /> Watch Later
        </Item>{" "}
        <Link
          to="likedvedios"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <Item title="Linked Videos ">
            <ThumbUpSharp /> Liked Videos
          </Item>{" "}
        </Link>
        <Item title="Show More ">
          <ArrowDropDown /> Show More
        </Item>{" "}
        <Hr />
        <Item title="Setting ">
          <SettingsOutlinedIcon /> Setting
        </Item>{" "}
        <Item
          title="Mode"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Item>{" "}
      </Wrapper>
    </Container>
  );
};
