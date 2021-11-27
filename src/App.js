import React, { Component} from 'react';
import './App.css';
import "./style/search.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import JobList from './components/jobList';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
          jobList: [],
          description: '',
          location: '',
          fulltime: false
        }

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    
    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }
    
    handleChangeCheckBox(event) {
        this.setState({fulltime: event.target.checked});
    }

    handleSearch(event) {
        event.preventDefault();
        
        console.log(this.state.description);
        console.log(this.state.location);
        this.fetchData(this.state.description, this.state.location, this.state.fulltime)
    }

    async fetchData(description='', location='', fulltime='') {
        if(description !== '' || location !== '' || fulltime !== '') {
            const result = await fetch(`http://localhost:5000/${description}&${location}&${fulltime}`);
            const jobs = await result.json()
            this.setState({
                jobList: jobs
            });
            console.log(jobs)
        }
        else {
            const result = await fetch("http://localhost:5000/");
            const jobs = await result.json()
            this.setState({
                jobList: jobs
            });
        }
    }
    componentDidMount() {
        this.fetchData();
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
                <div className="container">
                    <div className="box">
                            <label>
                                <b>Job Description</b>
                            </label>
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChangeDescription}/>
                    </div>
                    <div className="box">
                            <label>
                                <b>Location</b>
                            </label>
                            <input type="text" name="location" value={this.state.location} onChange={this.handleChangeLocation}/>
                    </div>
                    <div className="box">
                        <div className="checkbox">
                            <input type="checkbox" name="fulltime" checked={this.state.fulltime} onChange={this.handleChangeCheckBox}/>
                            <label>
                                <b>Full Time Only</b>
                            </label>
                        </div>
                    </div>
                    <div className="box">
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
            </div>
                <JobList jobs={this.state.jobList}/>
            </div>
        );
    }
}

export default App;
