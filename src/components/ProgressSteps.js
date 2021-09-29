import React from 'react'

const ProgressSteps = ({step1, step2, step3, step4}) => {

    return (
        <div className="progress-steps">

            <div className={step1 ? 'step step-active' : 'step'}>
                {
                    step1 ? <span className="step-text"><i className="fas fa-check"></i></span>
                    : <span className="step-text">1</span>
                }
                <div className={step1 ? 'step-line step-line-active' : 'step-line'}></div>
            </div>

            <div className={step2 ? 'step step-active' : 'step'}>
                {
                    step2 ? <span className="step-text"><i className="fas fa-check"></i></span>
                    : <span className="step-text">2</span>
                }
                <div className={step2 ? 'step-line step-line-active' : 'step-line'}></div>
            </div>

            <div className={step3 ? 'step step-active' : 'step'}>
                {
                    step3 ? <span className="step-text"><i className="fas fa-check"></i></span>
                    : <span className="step-text">3</span>
                }
                <div className={step3 ? 'step-line step-line-active' : 'step-line'}></div>
            </div>

            <div className={step4 ? 'step step-active' : 'step'}>
                {
                    step4 ? <span className="step-text"><i className="fas fa-check"></i></span>
                    : <span className="step-text">4</span>
                }
            </div>

        </div>
    )
}

export default ProgressSteps
