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
    imageUrl: "이미지",
    userName: "USERNAME",
    userId: "userid",
    githubUrl: "github 주소",
    details: {
      followers: 0,
      followings: 0,
      repos: 0,
    },
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/${userId}`)
      .then((res) => {
        console.log(res.data);
        const {
          avater_url,
          name,
          login,
          html_url,
          followers,
          following,
          public_repos,
        } = res.data;

        setUserInfo({
          imageUrl: avater_url,
          userName: name,
          userId: login,
          githubUrl: html_url,
          details: {
            followers: followers,
            followings: following,
            repos: public_repos,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <Wrapper>
      <SearchBar />
      <Result userInfo={userInfo} />
    </Wrapper>
  );
}
