import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 60%;
  padding: 20px;
  background-color: #6c00b9a3;
  border-radius: 25px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;

  background-color: black;
`;

const Button = styled.button``;

const Circles = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100px;
  height: 100px;
  border: 2px solid white;
  border-radius: 50%;

  color: white;
`;

export default function Result({ userInfo }) {
  return (
    <Box>
      <Image />
      <p>{userInfo.userName}</p>
      <p>{userInfo.userId}</p>
      <Button>Visit {userInfo.userName}</Button>
      <Circles>
        <Circle>
          <div>Followers</div>
          <div>{userInfo.details.followers}</div>
        </Circle>
        <Circle>
          <div>Followings</div>
          <div>{userInfo.details.followings}</div>
        </Circle>
        <Circle>
          <div>Repos</div>
          <div>{userInfo.details.repos}</div>
        </Circle>
      </Circles>
    </Box>
  );
}
