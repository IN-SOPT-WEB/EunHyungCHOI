import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 20%;
  background-color: #6c00b9a3;
  border-radius: 25px;
`;

const Title = styled.h1`
  color: white;
  font-size: 35px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TextInput = styled.input`
  margin-top: 20px;
  padding-left: 10px;
  height: 30px;
  width: 50%;
  border: 0;
  border-radius: 5px;

  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(74, 15, 92, 0.3);
  }
`;

export default function SearchBar() {
  return (
    <Box>
      <Title>🐈‍ Github Profile Cat</Title>
      <Form>
        <TextInput type="text" placeholder="Github Username..." />
      </Form>
    </Box>
  );
}
