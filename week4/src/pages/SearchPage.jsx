import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { API_URL } from "../api/config";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
`;

export default function SearchPage() {
  const [userId, setUserId] = useState("ilmerry");
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

  useEffect(() => {
    axios.get(`${API_URL}/${userId}`).then((res) => {
      console.log(res);
    });
  }, [userId]);

  return (
    <Wrapper>
      <SearchBar />
      <Result userInfo={userInfo} />
    </Wrapper>
  );
}
