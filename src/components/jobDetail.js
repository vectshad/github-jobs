import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../style/jobDetail.css';

function JobDetail() {
    const [state, setState] = useState({ detail: {} });
    let params = useParams();

    useEffect(async () => {
        const result = await fetch(`http://localhost:5000/detail/${params.id}`);
        const detail = await result.json()
        setState(detail);
        console.log(detail)
    }, []);

    return (
        <div>
            <Navbar className='navbar' variant='dark' >
                <Container>
                    <Navbar.Brand href='/'><b>GitHub</b> Jobs</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='job-detail'>
                <p className='light'>{state.type} / {state.location}</p>
                <h2>{state.title}</h2>
                <div className='d-flex justify-content-center'>
                    <div dangerouslySetInnerHTML={{__html:state.description}} >
                    </div>
                    <div>
                        <div className='company'>
                            <p className='border-bottom'><strong>{state.company}</strong></p>
                            <img src={state.company_logo} alt='company logo'></img>
                            <br/>
                            <a href={state.company_url}>{state.company_url}</a>
                        </div>
                        <div className='apply'>
                            <p className='border-bottom'><strong>How to apply</strong></p>
                            <div dangerouslySetInnerHTML={{__html:state.how_to_apply}} >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail;