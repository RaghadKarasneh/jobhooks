import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import "./css/post_job.css";
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function Apply() {


    const [profile, setProfile] = useState(1);
    const [pro_type, setPro_type] = useState('test-name');
    const [address, setAddress] = useState('test-email');
    const [address2, setAddress2] = useState(999);
    const [city, setCity] = useState(111);
    const [state, setState] = useState(1);
    const [postal, setPostal] = useState('test-name');
    const [country, setCountry] = useState('test-email');
    const [letter, setLetter] = useState(999);
    const [resume, setResume] = useState(111);
    const [language, setLanguage] = useState(1);
    const [write, setWrite] = useState('test-name');
    const [spoken, setSpoken] = useState('test-email');
    const [user_id, setUser_id] = useState(999);
    const [company_id, setCompany_id] = useState(111);


    const profileHandel = (e)=>{setProfile(e.target.value)}
    const pro_typeHandel = (e)=>{setPro_type(e.target.value)}
    const addressHandel = (e)=>{setAddress(e.target.value)}
    const address2Handel = (e)=>{setAddress2(e.target.value)}
    const cityHandel = (e)=>{setCity(e.target.value)}
    const stateHandel = (e)=>{setState(e.target.value)}
    const postalHandel = (e)=>{setPostal(e.target.value)}
    const countryHandel = (e)=>{setCountry(e.target.value)}
    const letterHandel = (e)=>{setLetter(e.target.value)}
    const resumeHandel = (e)=>{setResume(e.target.value)}    
    const languageHandel = (e)=>{setLanguage(e.target.value)}
    const writeHandel = (e)=>{setWrite(e.target.value)}
    const spokenHandel = (e)=>{setSpoken(e.target.value)}
    const user_idHandel = (e)=>{setUser_id(e.target.value)}
    const company_idHandel = (e)=>{setCompany_id(e.target.value)}

    const clickHandel = ()=>{
        axios.post('http://localhost/Project7/API/insert.php?profile='+profile+'&pro_type='+pro_type+'&address='+address+'&address2='+address2+'&city='+city+'&state='+state+'&postal='+postal+'&country='+country+'&letter='+letter+'&language='+language+'&write='+write+'&spoken='+spoken+'&user_id='+user_id+'&company_id='+company_id+'&resume='+resume)
        .then((data) => {
            // console.log('localhost/api-crud/php_crud/update.php?id='+id+'&name='+name+'&email='+email+'&age='+age+'&salary='+salary);
            console.log("success!");
        })
        .catch((error) => {
            console.error(error);
        });
    }
    const Background = "https://d341ezm4iqaae0.cloudfront.net/indeedjobs/wp-content/uploads/2020/12/hero-home.svg";
    
    const location = useLocation();
    console.log(location.pathname);

    return (
        <>
       
        <div className="slider-area ">
            <div className="single-slider section-overly slider-height2 d-flex align-items-center"data-background="assets/img/hero/about.jpg">
            <div className="container">
            <div className="row">
                <div className="col-xl-12">
                <div className="hero-cap text-center">
                    <p className='hero-text'>Post A New Job</p>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>

            {/* <div className='t1'>
                <span style={{ padding: '10px' }}><FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon></span>
                Candidate Profile
                <hr />
            </div> */}

            <div className="c2">
                <div className="cHead">
                    <h2 className='label small-section-tittle'>Enter Your Job Details:</h2>
                </div>

                <div className="cBody">
                <div className="small-section-tittle">
                  <h4>Overview</h4>
                </div>
                <span className='d1'>
                        <label htmlFor="" className='label2'>Facility Name<span className='red'>*</span></label>
                        <input type="text" className='inp' onChange={addressHandel} />
                    </span>
                    <span className='d1'>
                        <label htmlFor="" className='label2'>Vacancy Name<span className='red'>*</span></label>
                        <input type="text" className='inp' onChange={address2Handel} />
                    </span>
                    <span className='d1'>
                        <label htmlFor="" className='label2'>Department Name<span className='red'>*</span></label>
                        <select className='inp' onChange={pro_typeHandel}>
                            <option value="empty" disabled selected>— Make a Selection —<span className='red'>*</span></option>
                            <option value="Teaching">Teaching</option>
                            <option value="IT">IT</option>
                            <option value="Accounting">Accounting</option>
                        </select>
                    </span>
                
                    {/* <label htmlFor="">Address (1)</label> */}
                    <div>
                        <div style={{}}>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={postalHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Phone<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={postalHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Country<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={address2Handel} />
                            </span>
                            
                        </div>
                        <div style={{ marginTop: "10px" }}>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Education<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={cityHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Experience Level<span className='red'>*</span></label>
                                <select className='inp' onChange={pro_typeHandel}>
                                    <option value="empty" disabled selected>— Make a Selection —<span className='red'>*</span></option>
                                    <option value="Senior">Senior</option>
                                    <option value="MidLevel">Mid-Level</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Fresh">Fresh</option>
                                </select>
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Minimum Years of Experience<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={postalHandel} />
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Job Details </h5>
                </div>
                <div className="cBody">
                    <div>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Job Description<span className='red'>*</span></label>
                                <textarea type="text" className='inp' onChange={countryHandel} />
                        </span>
                        <span className='d1'>
                            <label htmlFor="" className='label2'>Job Type<span className='red'>*</span></label>
                            <select className='inp' onChange={pro_typeHandel}>
                                <option value="empty" disabled selected>— Make a Selection —<span className='red'>*</span></option>
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </span>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Salary<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={countryHandel} />
                            </span>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Requirements and Skills</h5>
                </div>
                <div className="cBody">
                    
                    <div>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>First Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Second Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                    </div>
                    <div>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Third Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Fourth Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Requirements </h5>
                </div>
                <div className="cBody">
                    
                    <div>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>First Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Second Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                    </div>
                    <div>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Third Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Fourth Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={countryHandel} />
                        </span>
                    </div>
                </div>
            </div>


            <div style={{ width: "60%", margin: "auto" }}>
                <button className='butt' onClick={clickHandel}>Post Job</button>
                {/* <label htmlFor="file2" className='file'>Chose a file</label> */}
            </div>
        </>
    );
}

export default Apply;