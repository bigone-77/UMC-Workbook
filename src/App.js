import MovieContents from "./components/MovieContents";
import styled from "styled-components";

function App() {
  return (
    <BackGround>
      <MovieContents />
    </BackGround>
  );
}

export default App;

const BackGround = styled.div`
  background-color: #303F9F;
  height: max-content;
`