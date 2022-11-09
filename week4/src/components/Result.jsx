import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 60%;
  margin: 20px 0px;
  background-color: #6c00b9a3;
  border-radius: 25px;
`;

const Image = styled.img`
  width: 150px;
`;

const Names = styled.div`
  text-align: center;
  line-height: 30px;
  & > h1 {
    font-size: 20px;
    margin-top: 5px;
    color: white;
  }
  & > h2 {
    font-size: 18px;
    color: wheat;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: 2px solid white;
  border-radius: 20px;

  &:hover {
    color: #6c00b9a3;
    background-color: white;
    transition-duration: 0.2s;
    cursor: pointer;
  }
`;

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
  margin-top: 10px;
  width: 100px;
  height: 100px;
  border: 2px solid white;
  border-radius: 50%;

  color: white;

  & > h3 {
    font-size: 14px;
  }
  & > p {
    font-size: 24px;
    margin-top: 5px;
  }
`;

export default function Result({ userInfo }) {
  return (
    <Box>
      <Image src={userInfo.imageUrl} alt="프로필 이미지" />
      <Names>
        <h1>{userInfo.userName}</h1>
        <h2>{userInfo.userId}</h2>
      </Names>
      <Button onClick={() => (window.location.href = userInfo.githubUrl)}>
        Visit {userInfo.userId}
      </Button>
      <Circles>
        {["Followers", "Followings", "Repos"].map((category, index) => (
          <Circle key={index}>
            <h3>{category}</h3>
            <p>{userInfo.details[category.toLowerCase()]}</p>
          </Circle>
        ))}
      </Circles>
    </Box>
  );
}
