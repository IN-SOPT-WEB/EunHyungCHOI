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
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}/${userId}`)
      .then((res) => {
        console.log(res.data);
        const {
          avatar_url,
          name,
          login,
          html_url,
          followers,
          following,
          public_repos,
        } = res.data;

        setUserInfo({
          imageUrl: avatar_url,
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
      <SearchBar setUserId={setUserId} />
      {userInfo && <Result userInfo={userInfo} />}
    </Wrapper>
  );
}
