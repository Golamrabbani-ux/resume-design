import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ProgressSteps from './ProgressSteps'

const PersonalInformation = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const personalInfo = {
            firstName,
            lastName,
            email,
            mobile,
            country,
            city,
            address,
            zipCode
        }
        history.push({
            pathname: '/educational-qualification',
            state:{
                personalInfo
            }
        });
    }

    return (
        <section className='personal-info-section'>
            <ProgressSteps />
            <form 
                className='form'
                onSubmit={handleSubmit}
            >
                <h2> 
                    <i className="fas fa-user icon"></i>
                    Personal Information
                </h2>
                <div className='form-content'>
                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label><br />
                            <input 
                                id='firstName'
                                type='text' 
                                name='firstName'
                                placeholder='First Name'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label><br />
                            <input 
                                id='lastName'
                                type='text' 
                                name='lastName'
                                placeholder='Last Name'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='email'>E-mail</label><br />
                            <input 
                                id='email'
                                type='email' 
                                name='email'
                                placeholder='E-mail'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='mobile'>Mobile Number</label><br />
                            <input 
                                id='mobile'
                                type='text' 
                                name='mobile'
                                placeholder='Personal Mobile Number'
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='country'>Country</label><br />
                            <input 
                                id='country'
                                type='text' 
                                name='country'
                                placeholder='Country'
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='city'>City</label><br />
                            <input 
                                id='city'
                                type='text' 
                                name='city'
                                placeholder='Current City'
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='text-field'>
                        <div className='form-group'>
                            <label htmlFor='address'>Address</label><br />
                            <input 
                                id='address'
                                type='text' 
                                name='address'
                                placeholder='Address'
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='zipCode'>Zip Code</label><br />
                            <input 
                                id='zipCode'
                                type='text' 
                                name='zipCode'
                                placeholder='Zip Code'
                                onChange={(e) => setZipCode(e.target.value)}
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
                            !firstName || !lastName || !email || !mobile ||
                            !country || !city || !zipCode || !address ? 'btn btn-next disabled' : 'btn btn-next'
                        }
                        disabled={
                            !firstName || !lastName || !email || !mobile ||
                            !country || !city || !zipCode || !address
                        }
                    >
                        <span>NEXT</span>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default PersonalInformation
