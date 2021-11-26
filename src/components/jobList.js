import React, { Component } from 'react';
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
            <div className="job-list">
                <h2>Job List</h2>
                {this.state.jobs.map((job, id) => 
                    { return ([
                    <div className='list'>
                        <div className="left">
                            <a href="/">{job.title}</a>
                            <p>{job.company}</p>
                        </div>
                        <div className="right">
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