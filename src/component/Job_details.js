import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../css/job_details.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const google=window.google
function Details() {
const {id} = useParams(); 
  const [jobs,bringJobs]=useState([]);
  const [newJob,newBringJobs]=useState([]);
 console.log({jobs});
  useEffect(()=>{
    axios.get(`http://localhost/job_hooks/API/jobDetails.php/?id=`+id)
    .then((res)=>{
    console.log(res)
    const jobData=res.data;
// console.log(jobData);
bringJobs(jobData);
    // console.log(jobsSecond)
    });
    
   },[newJob])  ;
   
   console.log({id});
    return (
        <>
<main>
    {/* Hero Area Start*/}
    <div className="slider-area ">
      <div
        className="single-slider section-overly slider-height2 d-flex align-items-center"
        data-background="assets/img/hero/about.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>{jobs.job_name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Area End */}
    {/* job post company Start */}
    <div className="job-post-company pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Content */}
          <div className="col-xl-7 col-lg-8">
            {/* job single */}
            <div className="single-job-items mb-50">
              <div className="job-items">
                <div className="company-img company-img-details">
                  <a href="#">
                  <img src={jobs.img} alt="" className='img-size'/>
                    {/* <img src="../../assets/img/icon/job-list1.png" height= "85px" width= "85px" alt="" /> */}
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>{jobs.job_name}</h4>
                  </a>
                  <ul>
                    <li style={{marginLeft:'70px'}}>{jobs.company_name}</li>
  
                  </ul>
                </div>
              </div>
            </div>
            {/* job single End */}
            <div className="job-post-details">
              <div className="post-details1 mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Job Description</h4>
                </div>
                <p>
                  {jobs.description}
                </p>
              </div>
              <div className="post-details2  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Required Knowledge, Skills, and Abilities</h4>
                </div>
                <ul>
                  <li>{jobs.skill_one}</li>
                  <li>{jobs.skill_two}</li>
                  <li>{jobs.skill_three}</li>
                  <li>{jobs.skill_four}</li>
                </ul>
              </div>
              <div className="post-details2  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Education & Experience</h4>
                </div>
                <ul>
                  <li>{jobs.education_level}</li>
                  <li>{jobs.experience} level ({jobs.experience_years} years at least)</li>
                  <li>{jobs.requirement_one}</li>
                  <li>{jobs.requirement_two}</li>
                  <li>{jobs.requirement_three}</li>
                  <li>{jobs.requirement_four}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="col-xl-4 col-lg-4">
            <div className="post-details3  mb-50">
              {/* Small Section Tittle */}
              <div className="small-section-tittle">
                <h4>Job Overview</h4>
              </div>
              <ul>
                <li>
                  Posted at : <span>{jobs.created_at}</span>
                </li>
                <li>
                  Location : <span>{jobs.job_location}</span>
                </li>
                <li>
                  Vacancy Number : <span>{jobs.id}</span>
                </li>
                <li>
                  Job nature : <span>{jobs.job_type}</span>
                </li>
                <li>
                  Salary : <span>{jobs.salary} JOD</span>
                </li>
              </ul>
              <div className="apply-btn2">
                <a href="/Apply" className="btn">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="post-details4  mb-50">
              {/* Small Section Tittle */}
              <div className="small-section-tittle">
                <h4>Facility Information</h4>
              </div>
          
              <ul>
                <li>
                  Name: <span>{jobs.company_name} </span>
                </li>
                <li>
                  Email : <span> {jobs.email}</span>
                </li>
                <li>
                  Phone: <span>{jobs.phone}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
     
    {/* job post company End */}
  </main>
  
   
        </>

    )  

}

export default Details;