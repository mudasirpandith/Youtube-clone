import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Assignment2 } from "./Pages/Assignment2";
import { Assignment1 } from "./Pages/HomePage";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <>
      {" "}
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Assignment1 />} />
              <Route path="2" element={<Assignment2 />} />
            </Route>
          </Routes>
          <Link style={{ display: "inline-block" }} to="/">
            Asssignment1
          </Link>
          <Link style={{ display: "inline-block" }} to="2">
            Asssignment2
          </Link>
        </BrowserRouter>
      </Container>
    </>
  );
}
