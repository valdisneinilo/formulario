import Form from "./components/Form";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  *,
  button,
  input {
    border: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    color: var(--black);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  max-width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 150px;
`;

export default App;
