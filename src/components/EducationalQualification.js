/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ProgressSteps from './ProgressSteps'

const EducationalQualification = () => {
    const history = useHistory();
    const [instituteName, setInstituteName] = useState('');
    const [subjectGroup, setSubjectGroup] = useState('');
    const [result, setResult] = useState('');
    const [passingYear, setPassingYear] = useState('');
    const [educationalArray, setEducationArray] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const educationalInfo = {
            instituteName,
            subjectGroup,
            result,
            passingYear,
        }
        setEducationArray([...educationalArray, educationalInfo]);
        setInstituteName('');
        setSubjectGroup('');
        setResult('');
        setPassingYear('');
    };

    const handleNextPage = () =>{
        history.push({
            pathname: '/skills',
            state:{
                personalInfo: history?.location?.state?.personalInfo,
                educationalInfo: educationalArray
            }
        })
    }

    

    return (
        <section className='educational-section'>
            <ProgressSteps step1 />
            <form 
                className='form'
                onSubmit={handleSubmit}
            >
                <h2> 
                    <i className="fas fa-graduation-cap icon"></i>
                    Educational Qualification
                </h2>

                {
                    educationalArray.length > 0 &&
                    educationalArray.map((item, index) =>
                        <div key={index} className='educational-output'>
                            <div className='educational-output-group'>
                                <h6>Institute Name</h6>
                                <h3>{item.instituteName}</h3>
                            </div>
                            <div className='educational-output-group'>
                                <h6>Major Subject/Group</h6>
                                <h3>{item.subjectGroup}</h3>
                            </div>
                            <div className='educational-output-group'>
                                <h6>Result Division/GPA</h6>
                                <h3>{item.result}</h3>
                            </div>
                            <div className='educational-output-group'>
                                <h6>Passing Year</h6>
                                <h3>{item.passingYear}</h3>
                            </div>
                        </div>
                    ) 
                }

                <div className='form-content'>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='instituteName'>Institute Name</label><br />
                            <input 
                                id='instituteName'
                                type='text' 
                                name='instituteName'
                                value={instituteName}
                                placeholder='Educational Institution Name'
                                onChange={(e) => setInstituteName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='subjectGroup'>Major Subject/Group</label><br />
                            <input 
                                id='subjectGroup'
                                type='text' 
                                name='subjectGroup'
                                value={subjectGroup}
                                placeholder='Subject Name/Group Name'
                                onChange={(e) => setSubjectGroup(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='result'>Result Division/GPA</label><br />
                            <input 
                                id='result'
                                type='text' 
                                name='result'
                                value={result}
                                placeholder='Eg. First Division or 4.5/5'
                                onChange={(e) => setResult(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='passingYear'>Passing Year</label><br />
                            <input 
                                className='input50'
                                id='passingYear'
                                type='text' 
                                name='passingYear'
                                value={passingYear}
                                placeholder='Result Publication year'
                                onChange={(e) => setPassingYear(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={
                            !instituteName || !subjectGroup ||
                            !result || !passingYear ? 'educational-btn disabled' : 'educational-btn'
                        }
                        disabled = {
                            !instituteName || !subjectGroup ||
                            !result || !passingYear
                        }
                    >
                        <i className="fas fa-plus-circle"></i>
                        <span className="btn-title">Add Another </span>
                    </button>

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
                        type='button'
                        className={educationalArray.length === 0 ? 'btn btn-next disabled' : 'btn btn-next'}
                        disabled={educationalArray.length === 0 }
                        onClick={handleNextPage}
                    >
                        <span>NEXT</span>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default EducationalQualification
