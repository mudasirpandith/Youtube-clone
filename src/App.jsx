import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
const Container = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <>
      {" "}
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
