import React from "react";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

export default function SearchPage() {
  return (
    <Wrapper>
      <SearchBar />
      <Outlet />
    </Wrapper>
  );
}
