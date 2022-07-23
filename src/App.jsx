import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/menu";
import { Navbar } from "./components/navbar";
import { HomePage } from "./Pages/HomePage";
import VideoPage from "./Pages/VideoPage";
import { darkTheme, lightTheme } from "./utils/theme";
import Signin from "./Pages/Signin";
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;
export default function App() {
  const [darkMode, setDarkMode] = useState(1);
  return (
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
  );
}