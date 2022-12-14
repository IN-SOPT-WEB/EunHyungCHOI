import React, { useEffect, useState } from 'react'
import styled, {css, keyframes} from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const pop = keyframes`
    0% {
    transform: translateY(0);
    }
    50% {
    transform: translateY(-30px);
    }
    100% {
    transform: translateY(0);
    }
`

const getAnimationCssByScore = (score) => {
    return (
        css`
        background-color: ${
            score === 1? '#f29087' :
            score === 2? '#ffd175' :
            score === 3? '#fffb79' :
            score === 4? '#b6ff79' :
            score === 5? '#89c8ff' : 'white'
        };
        animation: ${pop} .2s;
        `
    )
}

const Score = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 50px;

    ${props => getAnimationCssByScore(props.score)}

    font-size: 20px;
    font-weight: 700;

    border-radius: 30px;
`;

const TestArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const EndArticle = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;

    height: 300px;
`;

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
    padding: 10px 30px;

    border: 0;
    border-radius: 20px;

    cursor: pointer;
`;

const members = [
    "남준", "림", "명지", "명헌", "서연", "서현", "서영", "서현",
    "서희", "성경", "예원", "우영", "유진", "은형", "재욱", "주함",
    "준상", "지수", "지영", "하윤", "현수", "현욱", "현지", "형겸", "혜은"
];

export default function Content({modalOpen, setModalMessage}) {
    const [score, setScore] = useState(0);
    // 프로필 셔플 -> 옵션 -> 옵션 중 랜덤하나로 answer
    const [profiles, setProfiles] = useState(members.map((member) => (
        {
            name: member,
            image : `images/${member}.jpg`
        }
    )));
    const [answer, setAnswer] = useState(profiles.slice(0, 5)[parseInt(Math.random() * 5)]);

    useEffect(() => {
        setAnswer(profiles.slice(0, 5)[parseInt(Math.random() * 5)]);
    }, [profiles]);

    const onClickOption = (e) => {
        if(e.currentTarget.innerText === answer.name) {
            // 정답일 경우
            setScore((prev) => prev + 1);
            setProfiles((prev) => [...prev].sort(() => Math.random() - 0.8));
            setModalMessage("정답!");
        } else {
            // 땡
            setModalMessage("틀렸어... 실망이야.");
        }
        modalOpen();
    }

    const onClickRestart = () => {
        window.location.reload();
    }

    const EndContent = () => {
        return (
            <EndArticle>
                <h2>🥳🥳🥳🥳🥳</h2>
                <h2>내가 해냄~~</h2>
            </EndArticle>
        );
    }

    const PlayContent = () => {
        return (
            <TestArticle>
            <Image src={answer.image}/>
            <Buttons>
                {profiles.slice(0, 5).map((option) => (
                    <Button onClick={onClickOption}>{option.name}</Button>
                ))}
            </Buttons>
        </TestArticle>
        );
    }
    
  return (
    <Section>
        <Score score={score}>{score}</Score>
        {score >= 5 ?
        <EndContent/>
        : <PlayContent/>}
        <Button onClick={onClickRestart}>다시하기</Button>
    </Section>
  )
}
