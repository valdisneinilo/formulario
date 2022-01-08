import Form from "./components/Form";
import Header from "./components/Header";
import styled from 'styled-components'

function App() {
  return (
    <Container >
      <Header />
      <Form />
    </Container>
  );
}


const Container = styled.section`

  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

`;

export default App;
