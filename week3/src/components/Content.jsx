import React, { useEffect, useState } from 'react'
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

    margin: 20px;

    border-radius: 20px;
`

const Buttons = styled.div`
    margin: 10px;
`

const Button = styled.button`
    margin: 10px;
`;

const members = [
    "남준", "림", "명지", "명헌", "서연", "서현", "서영", "서현",
    "서희", "성경", "예원", "우영", "유진", "은형", "재욱", "주함",
    "준상", "지수", "지영", "하윤", "현수", "현욱", "현지", "형겸", "혜은"
];

export default function Content() {
    const [score, setScore] = useState(0);
    // 프로필 셔플 -> 옵션 -> 옵션 중 하나로 answer
    const [profiles, setProfiles] = useState(members.map((member) => (
        {
            name: member,
            image : `images/${member}.jpg`
        }
    )));
    const [options, setOptions] = useState(profiles.slice(0, 5));
    const [answer, setAnswer] = useState(options[parseInt(Math.random() * 5)]);

    useEffect(() => {
        setAnswer(options[parseInt(Math.random() * 5)]);
    }, [options]);

    useEffect(() => {
        setOptions(profiles.slice(0, 5));
    }, [profiles]);

    const onClickOption = (e) => {
        if(e.currentTarget.innerText === answer.name) {
            // 정답일 경우
            setScore((prev) => prev + 1);
            setProfiles((prev) => [...prev].sort(() => Math.random() - 0.5));
        } else {
            // 땡
        }
    }
    
  return (
    <Section>
        <Score>{score}</Score>
        <Test>
            <Image src={answer.image}/>
            <Buttons>
                {options.map((option) => (
                    <Button onClick={onClickOption}>{option.name}</Button>
                ))}
            </Buttons>
        </Test>
        <Button>다시하기</Button>
    </Section>
  )
}
