import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Form = styled.div`
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

const HistoryUl = styled.ul`
  position: absolute;
  transform: translateY(52px);

  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  padding: 10px 0px;
  background-color: rgba(255, 255, 255, 0.386);
`;

const HistoryLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  line-height: 30px;
  color: gray;
  & > p {
    width: 100%;
    cursor: pointer;
  }
  & > button {
    height: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    color: gray;
    cursor: pointer;
  }
`;

export default function SearchBar() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [historyArr, setHistoryArr] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      // :userId로 이동
      navigate(`${inputValue}`);
      // history 배열에 추가
      !historyArr.includes(inputValue) &&
        inputValue.length > 0 &&
        setHistoryArr((prev) => [...prev, inputValue]);

      setInputValue("");
    }
  };

  return (
    <Box>
      <Title>🐈‍ Github Profile Cat</Title>
      <Form>
        <TextInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleOnKeyPress}
          onFocus={() => setHistoryOpen(true)}
          onBlur={(e) => e.relatedTarget === null && setHistoryOpen(false)}
          type="text"
          placeholder="Github Username..."
        />
        {historyArr.length > 0 && historyOpen && (
          <HistoryUl tabIndex={0}>
            {historyArr.map((history, index) => (
              <HistoryLi key={index}>
                <p
                  onClick={(e) => {
                    navigate(`${e.currentTarget.innerHTML}`);
                    setHistoryOpen(false);
                  }}
                >
                  {history}
                </p>
                <button
                  onClick={(e) => {
                    let index = historyArr.indexOf(
                      e.target.parentNode.firstChild.innerHTML
                    );

                    setHistoryArr((prev) =>
                      prev.filter(
                        (history) =>
                          history !== e.target.parentNode.firstChild.innerHTML
                      )
                    );
                  }}
                >
                  x
                </button>
              </HistoryLi>
            ))}
          </HistoryUl>
        )}
      </Form>
    </Box>
  );
}
