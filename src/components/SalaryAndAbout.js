import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useHistory } from 'react-router'
import MyDocument from './MyDocument';
import ProgressSteps from './ProgressSteps'


const SalaryAndAbout = () => {
    const history = useHistory();
    const { state } = history?.location;
    const [presentSalary, setPresentSalary] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [description, setDescription] = useState('');

    const educationalInfo = state?.educationalInfo || [];
    const personalInfo = state?.personalInfo || {};
    const skills = state?.skills || {};

    const resumeInfo = {
        educationalInfo,
        personalInfo,
        skills,
        salaryAndAboutInfo:{
            presentSalary,
            expectedSalary,
            description,
        }
    }

    const handleFormReset = () =>{
        setPresentSalary('');
        setExpectedSalary(''); 
        setDescription('');
    }

    const handleNotification = () =>{
        setPresentSalary('');
        setExpectedSalary(''); 
        setDescription('');
        if(educationalInfo.length <= 0 || !personalInfo?.email || !skills.coreSkills){
            toast.error("Please filling  all form");
            history.push('/');
        }else{
            toast.success('Your resume is save. Now you can download.');
            localStorage.setItem('resumeInfo', JSON.stringify(resumeInfo));
            history.push('/download');
        }
    }

    return (
        <>
            <section className='skills-section'>
                <ProgressSteps step1 step2 step3/>
                <form 
                    className='form'
                >
                    <h2> 
                        <i className="fas fa-user-plus icon"></i>
                        Salary and About you
                    </h2>
                    <div className='form-content'>
                        <div className='text-field'>
                            <div className='form-group'>
                                <label htmlFor='presentSalary'>Present Salary</label><br />
                                <input 
                                    id='presentSalary'
                                    type='text' 
                                    name='presentSalary'
                                    value={presentSalary}
                                    placeholder='Present Salary your job' 
                                    onChange={(e) => setPresentSalary(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='expectedSalary'>Expected Salary</label><br />
                                <input 
                                    id='expectedSalary'
                                    type='text' 
                                    name='expectedSalary'
                                    value={expectedSalary}
                                    placeholder='Expected Salary for upcoming job'
                                    onChange={(e) => setExpectedSalary(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='text-field'>
                            <div className='form-group'>
                                <label htmlFor='description'>Why you are special? </label><br />
                                <textarea 
                                    id='description'
                                    type='text' 
                                    name='description'
                                    value={description}
                                    placeholder='Why you are best for this type of job' 
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div style={{
                            display:'flex',
                            justifyContent: 'flex-end',
                            alignItems:'center',
                        }}
                    >
                        <button
                            type='button'
                            className='btn btn-prev'
                            onClick={()=> history.goBack()}
                        >
                            <i className="fas fa-chevron-left"></i>
                            <span>PREV</span>
                        </button>


                        {
                            !presentSalary || !expectedSalary || !description  ?
                                <button
                                    type='button'
                                    className='btn btn-next disabled'
                                >
                                    <i className="fas fa-download"></i>
                                    <span>SAVE & DOWNLOAD</span>
                                    
                                </button>
                            :
                            <div
                                style={{marginTop:'10px'}}
                                onClick={handleFormReset}
                            >
                                <PDFDownloadLink
                                    document={<MyDocument resumeInfo={resumeInfo} />}
                                    fileName={`${personalInfo.firstName} ${personalInfo.lastName}.pdf`}
                                    className='btn'
                                    style={{
                                        textDecoration:'none',
                                        padding: "9.9px 18px",
                                        color: "white",
                                        backgroundColor: "#00C2FF",
                                    }}
                                >
                                    <i className="fas fa-download"></i>
                                    <span>SAVE & DOWNLOAD</span>
                                </PDFDownloadLink>
                            </div>
                        }

                        <button
                            type='button'
                            className={
                                !presentSalary || !expectedSalary || !description ? 
                                'btn btn-next disabled' :'btn btn-next'
                            }
                            disabled = {
                                !presentSalary || !expectedSalary || !description 
                            }
                            onClick={handleNotification}
                        >
                            <i className="far fa-file-pdf"></i>
                            <span>SAVE</span>
                        </button>
                    </div>
                    
                </form>
            </section>
        </>
    )
}

export default SalaryAndAbout
