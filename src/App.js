import React, { Component} from 'react';
import Search from './components/search';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import JobList from './components/jobList';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
          jobList: []
        }
    }

    async componentDidMount() {
        const result = await fetch("http://localhost:5000/");
        const jobs = await result.json()
        this.setState({
            jobList: jobs
        });
        // console.log(this.state.jobList)
    }
  

    render() {
        return (
            <div>
                <Navbar className='navbar' variant='dark' >
                    <Container>
                        <Navbar.Brand href='/'><b>GitHub</b> Jobs</Navbar.Brand>
                    </Container>
                </Navbar>
                <Search/>
                <JobList jobs={this.state.jobList}/>
            </div>
        );
    }
}

export default App;
