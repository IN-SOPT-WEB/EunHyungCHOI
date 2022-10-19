import React, { useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Score = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    background-color: #c2c2c2;
`;

const Test = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 300px;
    height: 300px;

    margin: 20px;

    border-radius: 20px;
`

const Buttons = styled.div`
    margin: 10px;
`

const Button = styled.button`
    margin: 10px;
`;

export default function Content() {
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState([1, 2, 3, 4, 5]);
  return (
    <Section>
        <Score>{score}</Score>
        <Test>
            <Image src='images/은형.jpg'/>
            <Buttons>
                {options.map((option) => (
                    <Button>{option}</Button>
                ))}
            </Buttons>
        </Test>
        <Button>다시하기</Button>
    </Section>
  )
}
