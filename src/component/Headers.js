import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios  from 'axios';
import '../css/header.css';


function Headers(props) {
    // const [id, setId] = useState(0);

    let id =props.user_id;
    console.log(id , 'nav');
    let state = false ;
  
    if( id != 0)
    {
      state = true;
     }else if( id == null || id == 0) {
  
      state = false;
    } 
  
        const [login,set_logged] = useState(state);
        const logout =(event)=>{
          // event.preventDefault();
          id= 0;
          sessionStorage.setItem("user_id" , 0);   
          state = false;
          set_logged(false);
          console.log(sessionStorage.getItem("user_id"));
        //  window.location.href.reload();
        window.location.href="/";
      
         }  

    return (
        <>
            <header className=''>

              <div className='head '>
                
          {/* Logo */}
          <div className="logo ml-5">
              <img src="../../assets/img/logo/logo.png" height="100px" alt="" />
          </div>
        
                  <nav className="d-none d-lg-block w-100">
                      <ul id="navigation">
                                                

        <Link to="/" className='linkto'>Home</Link>
        <Link to="/Job_listing" eventKey="link-1" className='linkto'>Find Jobs</Link>
        <Link to="/postJob" eventKey="link-1" className='linkto'>Post Job</Link>
        <Link to="/About" eventKey="link-2" className='linkto'>About</Link>
        <Link to="/Contact" eventKey="link-3" className='linkto'> Contact Us</Link>
        <Link to="/Userinfo" eventKey="link-4" className='linkto' style={{display: state ? 'inline-block': 'none'}}>Profile</Link>
        {/* { id==1? <Link to="/Userinfo" eventKey="link-4" className='linkto'> Profile</Link> :""} */}
        {/* { id==1? "" :<span><Link to="/Register" eventKey="link-5" className='bttn'> Register</Link><Link to="/Login" eventKey="link-6" className='bttn'> Login</Link></span>} */}
        <span className="hdder" style={{display: state ? 'none': 'inline-block'}}><Link to="/Register" eventKey="link-5" className='bttn'> Register</Link><Link to="/Login" eventKey="link-6" className='bttn'> Login</Link></span>
        <Link to="/" eventKey="link-3" className='linkto' style={{display: state ? 'inline-block': 'none'}} onClick={logout}> Logout</Link>
         
                   
                                                     
        </ul>
    </nav>
                                             
                              {/* Mobile Menu */}
                              <div className="col-12">
                                  <div className="mobile_menu d-block d-lg-none"></div>
                              </div>
   
              
              {/* Header End */}
                 </div>
          </header>
    

         </>
    )

}
export default Headers