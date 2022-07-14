import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import '../css/index.css';




function Home() {

    const [user, setUsers] = useState([]);
    const [Login, setLogin] = useState(false);

    useEffect(()=>{
     
     axios.get(`http://localhost/job_hooks/API/loginuser.php`)
     .then((res)=>{
         const data=res.data;
         setLogin(data[0].isLogin);
        // console.log(Login)                 
         });

     axios.get(`http://localhost/job_hooks/API/showUserInfo.php`)

     .then((res)=>{
    //  console.log(res)
     const data=res.data;
     setUsers(data);
     
    //  this.setState({
    //     is_login:false,
    //   })
      
     });
    },[user])

    
    return ( 
            <>

    <main>

        {/* slider Area Start*/}
        <div className="slider-area ">
            {/* Mobile Menu */}
            <div className="slider-active ">
                <div className="single-slider slider-height d-flex align-items-center" >
                {/* background="../public/assets/img/hero/h_hero.png" */}
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-9 col-md-10">
                                <div className="hero__caption">
                                    <h1>Find the most exciting startup jobs</h1>
                                </div>
                            </div>
                        </div>
                        {/* Search Box */}
                        <div className="row">
                            <div className="col-xl-8">

                                {/* form */}
                                 {/* <form action="#" className="search-box"> */}
                                  {/*  <div className="input-form">
                                        <input type="text" placeholder="Job Tittle or keyword" /> 
                                    </div>*/}
                                    <div className="search-form">
                                        <Link to="/Joblist" eventKey="link-1" className="border-btn2 find" >Find job Now</Link>
                                    </div>	
                                {/* </form>	 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* slider Area End*/}
        {/* Our Services Start */}
        <div className="our-services section-pad-t30 w-100">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            {/* <span>FEATURED TOURS Packages</span> */}
                            <h2> Top Categories </h2>
                        </div>
                    </div>
                </div>
                {/* {cate.map((data)=> */}

                    <>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Teaching - Coaching</h5>
                                <span>(353)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-cms"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Translating </h5>
                                <span>(428)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-report"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Accounting - Marketing</h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>                    
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <span className="flaticon-high-tech"></span>
                            </div>
                            <div className="services-cap">
                               <h5>Information Technology</h5>
                                <span>(828)</span>
                            </div>
                        </div>
                    </div>
                   
                    </div>
                   </> 
                   {/* )} */}
                </div>
                {/* More Btn */}
                {/* Section Button */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                           
                             <Link to="/Job_listing" eventKey="link-1" className="border-btn2">Browse All </Link> 
                            
                            {/* <a href="job_listing.html" className="border-btn2">Browse All Sectors</a> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
        {/* Our Services End */}
        {/* Online CV Area Start */}
         <div className="online-cv cv-bg section-overly pt-90 pb-120 mb-5"  data-background="assets/img/gallery/cv_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="cv-caption text-center">
                          <p className="pera1">FEATURED TOURS Packages</p>
                          <p className="pera2"> Make a Difference with Your Online Resume!</p>

             
   <Link to= {sessionStorage.getItem("user_id")==0 ? "/Login" : "/Apply"}  eventKey="link-1" className="border-btn2 border-btn4" name="loginCV"  onClick={''}>Upload your cv</Link>
  

 


                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Online CV Area End*/}
        {/* Featured_job_start */}
        <section className="featured-job-area mt-5">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            {/* <span>Recent Job</span> */}
                            <h2 className="mb-0">Future  Jobs</h2>
                            <span>The top professions of the future that are already trending!</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_9_Cybersecurity_Tools.jpg" alt="" className="f-job"/>
                                </div>
                                <div className="job-tittle">
                                <Link to="/CS" eventKey="link-10"><h4>Cyber security</h4></Link>
                                    <ul style={{ marginRight:'-17%'}}>
                                        <li>Computer Information</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <span >Full Time</span>
                            </div>
                        </div>
                        {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <img src="https://elearningindustry.com/wp-content/uploads/2021/02/why-online-teaching-is-replacing-offline-classes.png" alt="" className="f-job"/>
                                </div>
                                <div className="job-tittle">
                                    <h4>Online teacher</h4>
                                    <ul style={{ marginRight:'-16%'}}>
                                        <li>Teaching - Coaching</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                            <span >Online</span>

                            </div>
                        </div>
                         {/* single-job-content */}
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                   <img src="https://careeralley.com/wp-content/uploads/Blah-4.png" alt="" className="f-job"/>
                                </div>
                                <div className="job-tittle">
                                <Link to="/HE" eventKey="link-20"><h4>Hospital engineer</h4></Link>
                                    <ul style={{ marginRight:'-17%'}}>
                                        <li>Hospital and Healthcare</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                             <span >Full Time</span>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
        {/* Featured_job_end */}
        {/* How  Apply Process Start*/}
        <div className="apply-process-area apply-bg pt-150 pb-150" data-background="assets/img/gallery/how-applybg.png">
            <div className="container">
                {/* Section Tittle */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle white-text text-center">
                        </div>
                    </div>
                </div>
                {/* Apply Process Caption */}
                <div className="row">
                            <h3 className="cent">Apply process<br/> How it works</h3>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-search"></span>
                            </div>
                            <div className="process-cap">
                               <h5>1. Search a job</h5>
                               <p>Doing a job search can turn out well with the right skills. Listen and learn.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-curriculum-vitae"></span>
                            </div>
                            <div className="process-cap">
                               <h5>2. Apply for job</h5>
                               <p>Determine what you want to do· Identify your qualifications· Establish how many jobs fit ·</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-process text-center mb-30">
                            <div className="process-ion">
                                <span className="flaticon-tour"></span>
                            </div>
                            <div className="process-cap">
                               <h5>3. Get your job</h5>
                               <p>Focus on building a relationship instead of simply asking about a job.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        {/* How  Apply Process End*/}
        
         {/* Support Company Start*/}
         <div className="support-company-area support-padding fix mb-5 mt-5">
            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="right-caption">
                            {/* Section Tittle */}
                            <div className="section-tittle section-tittle2">
                                <span>Let Us Be Your Competitive Advantage</span>
                                <h2>20k Talented people are getting Jobs</h2>
                            </div>
                            <div className="support-caption">
                                <p className="pera-top">
                                With expertise in business transformation, cyber security, Information Technology, and enterprise applications, we   deliver the powerful combination of in-demand skilled talent with outcome-based solutions that is critical for business success. </p>
                                <p>By leveraging our capabilities in talent and skill development we tailor solutions to meet changing workforce needs today and for tomorrow.</p>
                                {/* <a href="about.html" className="btn post-btn">Post a job</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="support-location-img">
                            <img src="https://imageio.forbes.com/specials-images/imageserve/5fce71245c7f26c56e89bbd5/0x0.jpg?format=jpg&width=1200" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <div className='App mt-5 '>
              <div className="container mt-5 mb-5">
            <h1 className='center'>Career Advice and Tips</h1>
  <div className="row mt-5 ">
    <div className="col border py-2">
    01 | <Link to="/Tip"  target="_blank">Interview Tips for Success </Link> Jul 2021  </div>
    <div className="col border py-2">
    02 | <Link to="/Tip2"  target="_blank">5 Must-Read Books for Accountants</Link> Jun 2021
    </div>
  </div>
  <div className="row ">
    <div className="col border py-2">
    03 | <a href="https://www.youtube.com/watch?v=EcKg8Eb1faA"  target="_blank">Tips for Fresh Graduates to Find a Mechanical Engineering Job in the UAE </a> May 2021
    </div>
    <div className="col border py-2">
    04 | Tips to Help Freshers Kickstart Their Career Confidently May 2021
    </div>
  </div>
  <div className="row mb-5 ">
    <div className="col border py-2">
    05 | Top Tips to Get a Nursing Job in the Middle East Feb 2021
    </div>
    <div className="col border py-2">
    06 | The 5 Most Important Logistics Jobs in Dubai Feb 2021

    </div>
  </div>
</div>
        
        </div>

    </main>
 

            
            
             </>
        );
    }
export default Home;