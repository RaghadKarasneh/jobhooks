import React, { useEffect, useState } from 'react';
import './css/Job_listing.css';
import axios from 'axios';
import Job_details from './Job_details'
import {Link} from 'react-router-dom'
const UserContext = React.createContext();
function Joblist() { 
  
     const [jobs,bringJobs]=useState([]);
     //For filter by location 
     const [jobLocation,setJobLocation]=useState("");
     // For displaying the div
     const [displayContainer,setDisplayContainer]=useState("block");
     // For filter by name
     const [displayDiv,setDisplay]=useState("");
     //For filter by job type
     const [jobType,setJobType]=useState("");
     //For Filter by experience
     const [jobExperience,setJobExperience]=useState("");
     //ForRead More
     const [isToggle,handleClick]=useState(false);
     
     useEffect(()=>{
      axios.get(`http://localhost/jobhooks/API/bringJobs.php`)
      .then((res)=>{
      // console.log(res)
      const jobsData=res.data;
      bringJobs(jobsData);
      // console.log(jobsSecond)
      
      });
      
     })
    //  Filter by Department's name
    const filterJobDepartment=(e)=>{
      const checked=e.target.value;
      if(checked){
        setDisplayContainer("none");
        setDisplay(checked)
        
      }else if(!checked){
        setDisplayContainer("block");
       
      }
    }
    //Filter by job type
    const filterJobType=(e)=>{
      const selectJobType=e.target.value;
      if(selectJobType){
        setDisplayContainer("none");
        setJobType(selectJobType)
      }else if(!selectJobType){
        setDisplayContainer("block");
       
      }
    }
    // Filter by job location
    const filterJobLocation=(e)=>{
      const selected=e.target.value;
      if(selected){
        setDisplayContainer("none");
        setJobLocation(selected)
        
      }else if(!selected){
        setDisplayContainer("block");
       
      }
    }
    //Filter by experience
    const filterJobExperience=(e)=>{
      const selectedExperience=e.target.value;
      if(selectedExperience){
        setDisplayContainer("none");
        setJobExperience(selectedExperience)
        
      }else if(!selectedExperience){
        setDisplayContainer("block");
       
      }
    }
    const handelDetalis=()=>{
      window.location='./Job_details'
    }
    const ReadMore=(event)=>{
      
      handleClick(!isToggle)
     
     
  }
    return(
  

      
<>

{/* Preloader Start  */}
    {/* <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/logo.png" alt="" />
                </div>
            </div>
        </div>
    </div> */}
    {/* Preloader Start  */}

  <main>
    {/* Hero Area Start*/}
    <div className="slider-area ">
      <div
        className="single-slider section-overly slider-height2 d-flex align-items-center"
        data-background="assets/img/hero/about.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <p className='hero-text'>Get your job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Area End */}
    {/* Job List Area Start */}
    <div className="job-listing-area pt-120 pb-120">
      <div className="container">
        <div className="row job-category-listing mb-50">
          {/* Left content */}
          <div className="col-xl-3 col-lg col-md-4">
            
              <div className="col-lg-12">
                <div className="small-section-tittle2 mb-45">
                  <div className="ion">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="20px"
                      height="12px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(27, 207, 107)"
                        d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                      />
                    </svg>
                  </div>
                  <h4>Filter Jobs</h4>
                  <span>please use filters to reach your job wisely and specifically</span>
                </div>
              </div>
            
            {/* Job Category Listing start */}
            
              {/* single three */}     
              {/* select-Categories start */}
              {/* <div className="single-listing">
           
                <div className="select-Categories pb-50">
                  <div className="small-section-tittle2">
                    <h4>Posted Within</h4>
                  </div>
                  <label className="container">
                    Any
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Today
                    <input type="checkbox" defaultChecked="checked active" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 2 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 3 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 5 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="container">
                    Last 10 days
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                
              </div> */}
            {/* select-Categories End */}
         
            {/* Job Category Listing End */}
          </div>
          {/* Right content */}
          <div className="container col-lg-9">
                {/* Count of Job list Start */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="count-job mb-35">
                  {/* Department name filter */}
                     <div className="col-lg-3">
                      <div className="single-listing">
                        <div className="small-section-tittle2">
                          <h4>Department Name</h4>
                        </div>
                        {/* Select job category start */}
                        <div className="select-job-items2">
                          <select name="select"onChange={filterJobDepartment}>
                            <option value="">Choose Department</option>
                            <option value="IT">IT</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Accounting">Accounting</option>

                          </select>
                        </div>
                         {/* Select job category end */}
                      </div>
                     </div>
                     {/* Job type filter */}
                     <div className='col-lg-3'>
                      <div className="single-listing">
                          <div className="small-section-tittle2">
                              <h4>Job Type</h4>
                            </div>
                             {/* Select job type start */}
                          <div className="select-job-items2">
                            <select name="select"onChange={filterJobType}>
                              <option value="">Choose Job Type</option>
                              <option value="Full-Time">Full Time</option>
                              <option value="Part-Time">Part Time</option>
                              <option value="Hybrid">Hybrid</option>
                              <option value="Remote">Remote</option>
                              <option value="Freelance">Freelance</option>

                            </select>
                          </div>
                           {/* Select job category end */}
                        </div>
                     </div>
                     {/* Location filter */}
                    <div className='col-lg-3'>
                      <div className="single-listing">
                        <div className="small-section-tittle2">
                            <h4>Job Location</h4>
                        </div>
                        {/* Select job location start */}
                      <div className="select-job-items2">
                        <select name="select" onChange={filterJobLocation}>
                          <option value="">Choose location</option>
                          <option value="Jordan">Jordan</option>
                          <option value="UAE">Arab Gulf</option>
                          <option value="US">United States</option>
                          <option value="France">France</option>
                        </select>
                      </div>
                      {/* Select job location end */}
                      </div>
                    </div>
                    {/* Experience filter  */}
                    <div className='col-lg-3'>
                      <div className="single-listing">
                        <div className="small-section-tittle2">
                            <h4>Experience</h4>
                        </div>
                        {/* Select job experience start */}
                        <div className="select-job-items2">
                          <select name="select" onChange={filterJobExperience}>
                            <option value="">Choose experience</option>
                            <option value="fresh">1-2 Years</option>
                            <option value="junior">2-3 Years</option>
                            <option value="midLevel">3-5 Years</option>
                            <option value="senior">5-more..</option>
                          </select>
                        </div>
                          {/* Select job experience start */}
                        </div>
                    </div>
                    {/*  */}
                    </div>
                  </div>
                </div>
                </div>
                </div>
          <div className="col-xl-12 col-lg-12 col-md-8">
            {/* Featured_job_start */}
            
                {/* Count of Job list End */}
                {/* single-job-content */}
                <section className="featured-job-area">
                    {displayContainer=="block"?jobs.map((jobData)=>
                     <>
                     <div className="single-job-items mb-30">
                       <div className="job-items">
                         <div className="company-img">
                           <a href="#">
                             <img src="assets/img/icon/job-list1.png" alt="" />
                           </a>
                         </div>
                         
                           <h4>{jobData.job_name}</h4>
                         
                         {/* <h1>hello</h1> */}
                         {/* <button onClick={<Job_details jobData={jobData}/>}>
                           Read More
                         </button> */}
                         <ul>
                           <li>{jobData.company_name}</li>
                           <li>
                             <i className="fas fa-map-marker-alt" />
                             {jobData.job_location}
                           </li>
                           <li>{jobData.job_type}</li>
                           <li>{jobData.salary} JOD</li>
                         </ul>
                       </div>
                   
                     <div className="items-link items-link2 f-right">
                       {/* <button onClick={handelDetalis}>More Details</button> */}
                       <button onClick={ReadMore} id={jobData.id}>More Details</button>
                       <span>{jobData.created_at}</span>
                     </div> 
                    
                     {/* job post company Start */}
    <div className="job-post-company pt-120 pb-120" id={jobData.id} style={{display:(isToggle?"block":"none")}}>
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Content */}
          <div className="col-xl-7 col-lg-8">

           
            <div className="job-post-details">
              <div className="post-details1 mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Job Description</h4>
                </div>
                <p>
                  {jobData.description}
                </p>
              </div>
              <div className="post-details2  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Required Education & Experience</h4>
                </div>
                <ul>
                  <li>{jobData.requirements}</li>
                  <li>
                  {jobData.experience_years} years of experience
                  </li>
                  <li>{jobData.requirements}</li>
                  <li>Direct response email experience</li>
                  <li>SExperience using Invision a plus</li>
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
                  Posted at : <span>{jobData.created_at}</span>
                </li>
                <li>
                  Location : <span>{jobData.job_location}</span>
                </li>
                <li>
                  Vacancy number : <span>{jobData.id}</span>
                </li>
                <li>
                  Job nature : <span>{jobData.job_type}</span>
                </li>
                <li>
                  Salary : <span>{jobData.salary} JOD</span>
                </li>
                
              </ul>
              <div className="apply-btn2">
                <a href="#" className="btn">
                  Apply Now
                </a>
              </div>
            </div>
            {/* <div className="post-details4  mb-50">
              
              <div className="small-section-tittle">
                <h4>Facility Information</h4>
              </div>
              
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <ul>
                <li>
                  Name: <span>{jobData.company_name} </span>
                </li>
                <li>
                  Web : <span> colorlib.com</span>
                </li>
                <li>
                  Email: <span>{jobData.company_name}@gmail.com</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* job post company End */}
              </>
                    ):  jobs.filter(el=>(el.department_name==displayDiv)&&(el.job_location==jobLocation)&&(el.job_type==jobType)&&(el.experience==jobExperience)).map((jobData)=>
                    <>
                     <div className="single-job-items mb-30">
                       <div className="job-items">
                         <div className="company-img">
                           <a href="#">
                             <img src="assets/img/icon/job-list1.png" alt="" />
                           </a>
                         </div>
                         
                           <h4>{jobData.job_name}</h4>
                         
                         {/* <h1>hello</h1> */}
                         {/* <button onClick={<Job_details jobData={jobData}/>}>
                           Read More
                         </button> */}
                         <ul>
                           <li>{jobData.company_name}</li>
                           <li>
                             <i className="fas fa-map-marker-alt" />
                             {jobData.job_location}
                           </li>
                           <li>{jobData.job_type}</li>
                           <li>{jobData.salary} JOD</li>
                         </ul>
                       </div>
                   
                     <div className="items-link items-link2 f-right">
                       {/* <button onClick={handelDetalis}>More Details</button> */}
                       <button onClick={ReadMore} id={jobData.id}>More Details</button>
                       <span>{jobData.created_at}</span>
                     </div> 
                    
                     {/* job post company Start */}
    <div className="job-post-company pt-120 pb-120" id={jobData.id} style={{display:(isToggle?"block":"none")}}>
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Content */}
          <div className="col-xl-7 col-lg-8">

           
            <div className="job-post-details">
              <div className="post-details1 mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Job Description</h4>
                </div>
                <p>
                  {jobData.description}
                </p>
              </div>
              <div className="post-details2  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Required Education & Experience</h4>
                </div>
                <ul>
                  <li>{jobData.requirements}</li>
                  <li>
                  {jobData.experience_years} years of experience
                  </li>
                  <li>{jobData.requirements}</li>
                  <li>Direct response email experience</li>
                  <li>SExperience using Invision a plus</li>
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
                  Posted at : <span>{jobData.created_at}</span>
                </li>
                <li>
                  Location : <span>{jobData.job_location}</span>
                </li>
                <li>
                  Vacancy number : <span>{jobData.id}</span>
                </li>
                <li>
                  Job nature : <span>{jobData.job_type}</span>
                </li>
                <li>
                  Salary : <span>{jobData.salary} JOD</span>
                </li>
                
              </ul>
              <div className="apply-btn2">
                <a href="#" className="btn">
                  Apply Now
                </a>
              </div>
            </div>
            {/* <div className="post-details4  mb-50">
              
              <div className="small-section-tittle">
                <h4>Facility Information</h4>
              </div>
              
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <ul>
                <li>
                  Name: <span>{jobData.company_name} </span>
                </li>
                <li>
                  Web : <span> colorlib.com</span>
                </li>
                <li>
                  Email: <span>{jobData.company_name}@gmail.com</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* job post company End */}
              </>
                    )}
                 
                    
             
            </section>
            {/* Featured_job_end */}
          </div>
        </div>
      </div>
    
    {/* Job List Area End */}
    {/*Pagination Start  */}
   
    {/*Pagination End  */}
  </main>
  
</>





    );
    
}

export default Joblist;