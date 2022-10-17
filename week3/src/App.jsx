import Header from "./components/Header";
import Nav from "./components/Nav";
import Time from "./components/Time";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Header data={"오늘"}/>
      <Nav/>
      <Time/>
      <Title>
        Hello World
      </Title>
    </div>
  );
}

export default App;
