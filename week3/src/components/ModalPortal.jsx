import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from "react-dom";
import styled from 'styled-components';

const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 300px;
  padding: 10px 0px;
  border: 0;
  border-radius: 5px;
  background: white;
`;

const ModalContentClose = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
`;

const ModalContentMain = styled.div`
  display: flex;

  padding: 1rem;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`

const Button = styled.div`
    padding: 5px 20px;

    border: 0;
    border-radius: 5px;
    background-color: orange;

    cursor: pointer;
`

export default function ModalPortal({children, closePortal}) {
    const ref = useRef(null);
    const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
    if(document) {
        const dom = document.getElementById('root-modal');
        ref.current = dom; // ref에 dom 값 전달
    }
  },[]);

  if(ref.current&&mounted) { // mounted 됬고 dom이 존재하는 경우 모달 랜더링 진행
    return createPortal(
        <Modal>
            <ModalBackground
            role="presentation"
            onClick={closePortal}
            />
            <ModalContent>
            <ModalContentMain>{children}</ModalContentMain>
            <ModalContentClose>
                <Button onClick={closePortal}>닫기</Button>
            </ModalContentClose>
            </ModalContent>
      </Modal>,
      ref.current
    )
  }

  return null;
}
