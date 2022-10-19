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
    const [profiles, setProfiles] = useState(members.map((member) => (
        {
            name: member,
            image : `images/${member}.jpg`
        }
    )));
    const [answer, setAnswer] = useState(profiles[parseInt(Math.random() * profiles.length)]);
    const [options, setOptions] = useState(members.slice(0, 5));

    const shuffleOptions = () => {
        setProfiles((prev) => {
            prev.sort(() => Math.random() - 0.5);
        })
    };

    const onClickOption = (e) => {
        if(e.currentTarget.innerText === answer) {
            // 정답일 경우
            // 점수 + 1
            setScore((prev) => prev + 1);
            // 정답 애니메이션

            // 다음 문제로 넘어가기
            shuffleOptions();
        } else {
            // 땡
            //리팩토링하기~~~~~~~~~~~~~~~~~~
        }
    }
    
  return (
    <Section>
        <Score>{score}</Score>
        <Test>
            <Image src={answer.image}/>
            <Buttons>
                {options.map((option) => (
                    <Button key={option} onClick={onClickOption}>{option}</Button>
                ))}
            </Buttons>
        </Test>
        <Button>다시하기</Button>
    </Section>
  )
}
