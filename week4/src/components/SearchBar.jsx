import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 20%;
  padding: 20px;
  background-color: #6c00b9a3;
  border-radius: 25px;
`;

const Title = styled.h1`
  color: white;
`;

export default function SearchBar() {
  return (
    <Box>
      <Title>🐈‍ Github Profile Cat</Title>
      <form>
        <input type="text" placeholder="Github Username..." />
      </form>
    </Box>
  );
}
