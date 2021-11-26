import React, { Component } from 'react';
import "../style/search.css"
class Search extends Component {
    // super(props);

    
    render() {
        return (
            <div className="container">
                <div className="box">
                    <form>
                        <label>
                            <b>Job Description</b>
                        </label>
                        <input type="text" name="description" />
                    </form>
                </div>
                <div className="box">
                    <form>
                        <label>
                            <b>Location</b>
                        </label>
                        <input type="text" name="description" />
                    </form>
                </div>
                <div className="box">
                    <form className="checkbox">
                        <input type="checkbox" name="full-time" />
                        <label>
                            <b>Full-Time</b>
                        </label>
                    </form>
                </div>
                <div className="box">
                    <button>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;