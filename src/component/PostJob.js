import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import "../css/post_job.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function Jobpost() {

    const[isSubmit,setSubmit]=useState(false);
    const [company_name, setCompanyName] = useState("");
    const [job_name, setJobName] = useState("");
    // const [jobimg, setJobImg] = useState("");
    const [department_name, setDepartmentName] = useState("");
    const [job_type, setJobType] = useState("");
    const [job_location, setJobLocation] = useState("");
    const [education_level, setEducation] = useState("");
    const [experience, setExperience] = useState("");
    const [experience_years, setExperienceYears] = useState("");
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState("");
    const [skill_one, setSkillOne] = useState("");
    const [skill_two, setSkillTwo] = useState("");
    const [skill_three, setSkillThree] = useState("");
    const [skill_four, setSkillFour] = useState("");
    const [requirement_one, setRquirementOne] = useState("");
    const [requirement_two, setRquirementTwo] = useState("");
    const [requirement_three, setRquirementThree] = useState("");
    const [requirement_four, setRquirementFour] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const companyNameHandel = (e)=>{setCompanyName(e.target.value)}
    const jobNameHandel = (e)=>{setJobName(e.target.value)}
    const departmentNameHandel = (e)=>{setDepartmentName(e.target.value)}
    const jobTypeHandel = (e)=>{setJobType(e.target.value)}
    const jobLocationHandel = (e)=>{setJobLocation(e.target.value)}
    const educationHandel = (e)=>{setEducation(e.target.value)}
    const experienceHandel = (e)=>{setExperience(e.target.value)}
    const experienceYearsHandel = (e)=>{setExperienceYears(e.target.value)}
    const salaryHandel = (e)=>{setSalary(e.target.value)}
    const descriptionHandel = (e)=>{setDescription(e.target.value)}    
    const skillOneHandel = (e)=>{setSkillOne(e.target.value)}
    const skillTwoHandel = (e)=>{setSkillTwo(e.target.value)}
    const skillThreeHandel = (e)=>{setSkillThree(e.target.value)}
    const skillFourHandel = (e)=>{setSkillFour(e.target.value)}
    const rquirementOneHandel = (e)=>{setRquirementOne(e.target.value)}
    const rquirementTwoHandel = (e)=>{setRquirementTwo(e.target.value)}
    const rquirementThreeHandel = (e)=>{setRquirementThree(e.target.value)}
    const rquirementFourHandel = (e)=>{setRquirementFour(e.target.value)}
    const emailHandel = (e)=>{setEmail(e.target.value)}
    const phoneHandel = (e)=>{setPhone(e.target.value)}

    const clickHandel = ()=>{
        
        /************************ */
        axios.post('http://localhost/job_hooks/API/postJob.php?company_name='+company_name+'&job_name='+job_name+'&department_name='+department_name+'&job_type='+job_type+'&job_location='+job_location+'&education_level='+education_level+'&experience='+experience+'&experience_years='+experience_years+'&salary='+salary+'&description='+description+'&skill_one='+skill_one+'&skill_two='+skill_two+'&skill_three='+skill_three+'&skill_four='+skill_four+'&requirement_one='+requirement_one+'&requirement_two='+requirement_two+'&requirement_three='+requirement_three+'&requirement_four='+requirement_four+'&email='+email+'&email='+email+'&phone='+phone)
        .then((data) => {
            // console.log('localhost/api-crud/php_crud/update.php?id='+id+'&name='+name+'&email='+email+'&age='+age+'&salary='+salary);
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    // const Background = "https://d341ezm4iqaae0.cloudfront.net/indeedjobs/wp-content/uploads/2020/12/hero-home.svg";
    
    const location = useLocation();
    console.log(location.pathname);

    return (

        <div>
       <div className='text-center message' style={{ display:isSubmit?"block":"none"}}>
        <p>Your job advertisement has been published successfully</p>
       </div>
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
                        <input type="text" className='inp' onChange={companyNameHandel} />
                    </span>
                    <span className='d1'>
                        <label htmlFor="" className='label2'>Vacancy Name<span className='red'>*</span></label>
                        <input type="text" className='inp' onChange={jobNameHandel} />
                    </span>
                    <span className='d1'>
                        <label htmlFor="" className='label2'>Department Name<span className='red'>*</span></label>
                        <select className='inp' onChange={departmentNameHandel}>
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
                                <input type="text" className='inp' onChange={emailHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Phone<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={phoneHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Country<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={jobLocationHandel} />
                            </span>
                            
                        </div>
                        <div style={{ marginTop: "10px" }}>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Education<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={educationHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Experience Level<span className='red'>*</span></label>
                                <select className='inp' onChange={experienceHandel}>
                                    <option value="empty" disabled selected>— Make a Selection —<span className='red'>*</span></option>
                                    <option value="Senior">Senior</option>
                                    <option value="MidLevel">Mid-Level</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Fresh">Fresh</option>
                                </select>
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Minimum Years of Experience<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={experienceYearsHandel} />
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
                                <textarea type="text" className='inp' onChange={descriptionHandel} />
                        </span>
                        <span className='d1'>
                            <label htmlFor="" className='label2'>Job Type<span className='red'>*</span></label>
                            <select className='inp' onChange={jobTypeHandel}>
                                <option value="empty" disabled selected>— Make a Selection —<span className='red'>*</span></option>
                                <option value="Full-Time">Full Time</option>
                                <option value="Part-Time">Part Time</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </span>
                        <span className='d1'>
                                <label htmlFor="" className='label2'>Salary<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={salaryHandel} />
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
                            <input type="text" className='inp' onChange={skillOneHandel} />
                        </span>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Second Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={skillTwoHandel} />
                        </span>
                    </div>
                    <div>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Third Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={skillThreeHandel} />
                        </span>
                        <span className='d1 skills'>
                            <label htmlFor="" className='label2'>Fourth Skill<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={skillFourHandel} />
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
                            <input type="text" className='inp' onChange={rquirementOneHandel} />
                        </span>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Second Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={rquirementTwoHandel} />
                        </span>
                    </div>
                    <div>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Third Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={rquirementThreeHandel} />
                        </span>
                        <span className='d1 requirements'>
                            <label htmlFor="" className='label2'>Fourth Requirement<span className='red'>*</span></label>
                            <input type="text" className='inp' onChange={rquirementFourHandel} />
                        </span>
                    </div>
                </div>
            </div>


            <div style={{ width: "60%", margin: "auto", margin: "70px auto" }}>
                <a  href="#" className='butt' onClick={clickHandel}>Post Job</a>
                {/* <label htmlFor="file2" className='file'>Chose a file</label> */}
            </div>
        </div>
    );
}

export default Jobpost;