import React, { Component} from 'react';
import Search from './components/search';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import JobList from './components/jobList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar" variant="dark" >
          <Container>
            <Navbar.Brand href="/"><b>GitHub</b> Jobs</Navbar.Brand>
          </Container>
        </Navbar>
        <Search/>
        <JobList/>
      </div>
    );
  }
}

export default App;
