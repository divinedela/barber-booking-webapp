import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Button variant="primary">Hello</Button>
      </Container>
    </>
  );
}

export default App;
