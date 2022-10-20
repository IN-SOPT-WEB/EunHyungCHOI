import Header from "./components/Header";
import Content from "./components/Content";
import styled from "styled-components";
import { useState } from "react";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleOpen = () => {
    setModalOpened(true);
  }

  const handleClose = () => {
    setModalOpened(false);
  }

  return (
    <div className="App">
      <Header/>
      <Content modalOpen={handleOpen}/>
      {modalOpened && (
        <ModalPortal closePortal={handleClose}>
          <Modal/>
        </ModalPortal>
      )}
      <div id="root-modal"></div>
    </div>
  );
}

export default App;
