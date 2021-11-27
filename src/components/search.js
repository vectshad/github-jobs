import React, { Component } from 'react';
import "../style/search.css"
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            location: '',
            fulltime: false
        }

        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChangeDescription(event) {
        this.setState({description: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }
    

    handleSearch(event) {
        event.preventDefault();
        
        console.log(this.state.description);
        console.log(this.state.location);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.description !== this.state.description || prevState.location !== this.state.location) {
            console.log(this.state.description);
            console.log(this.state.location);
        }
    }

    
    render() {
        return (
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
                            <input type="checkbox" name="fulltime" />
                            <label>
                                <b>Full Time Only</b>
                            </label>
                        </div>
                    </div>
                    <div className="box">
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
            </div>
        )
    }
}

export default Search;