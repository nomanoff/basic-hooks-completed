import React from "react";
import styled from "styled-components";
// import Effect from "../hooks/Effect";
// import Memo from "../hooks/Memo";
import Ref from "../hooks/Ref";

const Container = styled.div`
  width: 100% auto;
  height: 100vh;
  margin: 0 auto;
  padding: 10px 15px;
  background-color: #eee;
  border: 15px solid #333;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Ref />
    </Container>
  );
}

export default App;
