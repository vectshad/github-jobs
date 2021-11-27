import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/jobList.css'

class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.jobs != this.props.jobs) {
            console.log(this.props.jobs)
            this.setState({
                jobs: this.props.jobs
            })
        }
    }
    render () {
        return (
            <div className='job-list'>
                <h2>Job List</h2>
                {this.state.jobs.map((job) => 
                    { return ([
                    <div key ={job.id} className='list'>
                        <div className='left'>
                            <Link to={`/detail/${job.id}`}>{job.title}</Link>
                            <p>{job.company}</p>
                        </div>
                        <div className='right'>
                            {job.location}
                            <p>{job.created_at}</p>
                        </div>
                    </div>
                    ])
                })}

            </div>
        )
    }
}

export default JobList;