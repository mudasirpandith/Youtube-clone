import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/menu";
import { Navbar } from "./components/navbar";
import { HomePage } from "./Pages/HomePage";
import VideoPage from "./Pages/VideoPage";
import { darkTheme, lightTheme } from "./utils/theme";
import Signin from "./Pages/Signin";
import LikedVideos from "./Pages/LikedVideos";
import Mobile from "./Pages/Mobile";
import Explore from "./Pages/Explore";
import Setting from "./Pages/Setting";
import Subscriptions from "./Pages/Subscriptions";
import Libaray from "./Pages/Libaray";
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 22px 20px;
`;

export default function App() {
  const [darkMode, setDarkMode] = useState(1);

  return window.innerWidth > 1200 ? (
    <>
      {" "}
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="likedvedios" element={<LikedVideos />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="setting" element={<Setting />} />
                    <Route path="subscriptions" element={<Subscriptions />} />
                    <Route path="library" element={<Libaray />} />
                    <Route path="/video">
                      <Route path=":id" element={<VideoPage />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  ) : (
    <Mobile />
  );
}
