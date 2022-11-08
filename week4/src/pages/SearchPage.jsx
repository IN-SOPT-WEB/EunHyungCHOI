import React, { useState } from "react";
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

export default function SearchPage() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState({
    image: "이미지",
    userName: "USERNAME",
    userId: "userid",
    url: "github 주소",
    details: {
      followers: 0,
      followings: 0,
      repos: 0,
    },
  });

  return (
    <Wrapper>
      <SearchBar />
      <Result userInfo={userInfo} />
    </Wrapper>
  );
}
