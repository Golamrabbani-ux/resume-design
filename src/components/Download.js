import { PDFDownloadLink } from '@react-pdf/renderer'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import MyDocument from './MyDocument'
import ProgressSteps from './ProgressSteps'

const Download = () => {
    const history = useHistory();
    const [resumeInfo, setResumeInfo] = useState({});

    useEffect(()=>{
        setResumeInfo(JSON.parse(localStorage.getItem('resumeInfo')));
    },[]);

    return (
        <section className='download-section'>
            <ProgressSteps step1 step2 step3 step4 />
            <div className='form'>
                <h2> 
                    <i className="fas fa-file-pdf icon"></i>
                    RESUME DOWNLOAD
                </h2>
                <div className='download-content'>
                    <h2>Your <span>RESUME</span> is ready and published  Publicly</h2>
                    <div
                        style={{
                            display: 'flex', 
                            justifyContent: 'center',
                            alignItems:'center',
                        }}
                    >
                        <button 
                            type="button" 
                            className="btn btn-prev"
                            onClick={()=> history.push('/')}
                        >
                            <i className="fas fa-home icon"></i>
                            <span>HOME</span>
                        </button>
                        <div
                            style={{marginTop:'10px'}}
                        >
                            <PDFDownloadLink
                                document={<MyDocument resumeInfo={resumeInfo} />}
                                fileName={`${resumeInfo?.personalInfo?.firstName} ${resumeInfo?.personalInfo?.lastName}.pdf`}
                                className='btn'
                                style={{
                                    textDecoration:'none',
                                    padding: "9.9px 18px",
                                    color: "white",
                                    backgroundColor: "#00C2FF",
                                }}
                            >
                                <i className="fas fa-download"></i>
                                <span>DOWNLOAD</span>
                            </PDFDownloadLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download
