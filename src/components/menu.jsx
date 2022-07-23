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
  height: 100%;
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
  border: 0.5px solid #373737;
`;
export const Menu = ({ darkMode, setDarkMode }) => {
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
        <Item>
          <HomeOutlinedIcon /> Home
        </Item>{" "}
        <Item>
          <ExploreOutlinedIcon /> Explore
        </Item>{" "}
        <Item>
          <ShortcutSharp /> Shorts
        </Item>{" "}
        <Item>
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
        <Item>
          <VideoLibraryOutlinedIcon /> Library
        </Item>{" "}
        <Item>
          <HistoryOutlinedIcon /> History
        </Item>{" "}
        <Item>
          <SmartDisplayOutlinedIcon /> Your Videos
        </Item>{" "}
        <Item>
          <AccessTimeOutlinedIcon /> Watch Later
        </Item>{" "}
        <Item>
          <ThumbUpSharp /> Liked Videos
        </Item>{" "}
        <Item>
          <ArrowDropDown /> Show More
        </Item>{" "}
        <Hr />
        <Item>
          <SettingsOutlinedIcon /> Setting
        </Item>{" "}
        <Item
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          <LightModeOutlined /> Light Mode
        </Item>{" "}
        <Hr />
      </Wrapper>
    </Container>
  );
};
