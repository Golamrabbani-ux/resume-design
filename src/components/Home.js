import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {
    const history = useHistory();
    return (
        <section className='home-section'>
            <div className="content-group">
                <div className="content-title">
                    <h4>Submit your information to 5000+ company and<br /> 
                        download the pdf <span>RESUME</span></h4>
                </div>
                <div className='content-btn'>
                    <button 
                        className='resume-btn'
                        onClick={()=> history.push('/personal-infromation')}
                    >
                        <i className="far fa-file-alt"></i>
                        <span className="btn-title">CREATE RESUME</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home
