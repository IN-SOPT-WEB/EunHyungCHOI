import React, { useState } from "react";
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function SearchPage() {
  const [userId, setUserId] = useState("");

  return (
    <Wrapper>
      <SearchBar />
      <Result />
    </Wrapper>
  );
}
