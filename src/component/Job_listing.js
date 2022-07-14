import React, { useEffect, useState } from 'react';
import '../css/Job_listing.css';
import axios from 'axios';
import Job_details from './Job_details';
import {Link} from 'react-router-dom';
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
      axios.get(`http://localhost/job_hooks/API/bringJobs.php`)
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
        data-background="assets/img/hero/about.jpg">
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
                            <option value="Fresh">1-2 Years</option>
                            <option value="Junior">2-3 Years</option>
                            <option value="MidLevel">3-5 Years</option>
                            <option value="Senior">5-more..</option>
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
                             {/* <img src="assets/img/icon/job-list1.png" alt="" /> */}
                             <img src={jobData.img} alt="" className='img-size'/>
                             
                           </a>
                         </div>
                           <h4>{jobData.job_name}</h4>
                            <ul><br />
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
                        <a href={'/Job_details/'+jobData.id}>More Details</a>
                        <span>{jobData.created_at}</span>
                      </div> 
                </div>
                
              {/* job post company End */}
                </>
                    ):  (jobs.filter(el=>(el.department_name==displayDiv)||(el.job_location==jobLocation)||(el.job_type==jobType)||(el.experience==jobExperience)).map((jobData)=>
                    <>
                             <div className="single-job-items mb-30">
                       <div className="job-items">
                         <div className="company-img">
                           <a href="#">
                           <img src={jobData.img} alt="" className='img-size'/>
                           </a>
                         </div>
                         
                           <h4>{jobData.job_name}</h4>
                            <ul><br/>
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
                        <a href={'/Job_details/'+jobData.id}>More Details</a>
                        <span>{jobData.created_at}</span>
                      </div> 
                </div>
              </>
                    ))}
            </section>
            {/* Featured_job_end */}
          </div>
        </div>
      </div>
  </main>
  
</>
    );
    
}

export default Joblist;