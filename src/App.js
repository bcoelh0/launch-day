import React from "react";
import ListLaunches from "./components/list-launches";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

function App() {
  return (
    <Container>
      <ListLaunches />
    </Container>
  );
}

export default App;
