import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ProgressSteps from './ProgressSteps';

const Skills = () => {
    const history = useHistory();
    const [coreSkills, setCoreSkills] = useState('');
    const [softSkills, setSoftSkills] = useState('');
    const [familiarSkills, setFamiliarSkills] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const skills = {
            coreSkills,
            softSkills,
            familiarSkills,
        }

       history.push({
           pathname: '/salary-and-about-you',
           state:{
                ...history.location?.state,
                skills,
           }
       })

    } 

    return (
        <section className='skills-section'>
            <ProgressSteps step1 step2 />
            <form 
                className='form'
                onSubmit={handleSubmit}
            >
                <h2> 
                    <i className="fas fa-users-cog icon"></i>
                    Skills
                </h2>
                <div className='form-content'>
                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='coreSkill'>Core Skills</label><br />
                            <input 
                                id='coreSkill'
                                type='text' 
                                name='coreSkill'
                                placeholder='Skills mached the best with you. Separate with comma'
                                onChange={(e) => setCoreSkills(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='softSkills'>Soft Skills</label><br />
                            <input 
                                id='softSkills'
                                type='text' 
                                name='softSkills'
                                placeholder='Skills that you often work with. Separate with comma'
                                onChange={(e) => setSoftSkills(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='familiar'>Familiar</label><br />
                            <input 
                                id='familiar'
                                type='text' 
                                name='familiar'
                                placeholder='Skills that you started learning and never work with'
                                onChange={(e) => setFamiliarSkills(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                
                <div style={{textAlign: 'right'}}>
                    <button
                        type='button'
                        className='btn btn-prev'
                        onClick={()=> history.goBack()}
                    >
                        <i className="fas fa-chevron-left"></i>
                        <span>PREV</span>
                    </button>
                    <button
                        type='submit'
                        className={
                            !coreSkills || !softSkills || !familiarSkills ?
                            'btn btn-next disabled' : 'btn btn-next'
                        }
                        disabled={!coreSkills || !softSkills || !familiarSkills}
                    >
                        <span>NEXT</span>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default Skills
