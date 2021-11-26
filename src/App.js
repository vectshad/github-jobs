import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Navbar className="navbar" variant="dark" >
        <Container>
          <Navbar.Brand href="/"><b>GitHub</b> Jobs</Navbar.Brand>
        </Container>
      </Navbar>
      <Search/>
    </div>
  );
}

export default App;
