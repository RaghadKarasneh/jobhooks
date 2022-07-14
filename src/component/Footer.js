import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
    
return(    
    <footer>
{/* Footer Start*/}
  <div className="footer-area footer-bg ">
    <div className="container ">
        <div className="row d-flex justify-content-between ">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
               <div className="single-footer-caption mb-50">
                 <div className="single-footer-caption mb-30">
                 <img src="../../assets/img/logo/logo.png" alt="" width="150px" height="150px"/>
                     {/* <div className="footer-tittle">
                         <h4>About Us</h4>
                         <div className="footer-pera">
                             <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                        </div>
                     </div> */}
                 </div>

               </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 mt-5">
                <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                            <p>Address :Your address goes
                                here, your demo address.</p>
                            </li>
                            <li><a href="#">Phone : +962 77 101 1010</a></li>
                            <li><a href="mailto:info@jobhooks.com">Email : info@jobhooks.com</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 mt-5">
                <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                        <h4>Important Link</h4>
                        <ul>
                        
                                {/* <Link to="/Joblist" eventKey="link-1" >Find Jobs</Link> */}
                            <li><a href="">Find Jobs</a></li>
                                {/* <Link to="/Contact" eventKey="link-1">Contact Us</Link> */}
                            <li><a href="">Contact Us</a></li>
                                {/* <Link to="/About" eventKey="link-2">About</Link> */}
                            <li><a href="">About</a></li>
                            {/* <Link to="/Joblist" eventKey="link-1" >Find Jobs</Link> */}
                            {/* <li><a href="">Proparties</a></li> */}
                            <li><a href="mailto:t.shbatat@gmail.com">Support</a></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 mt-5">
                <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                        <h4>FOR YOU</h4>
                        <div className="footer-pera footer-pera2">
                         <p>All our dreams can come true— if we have the courage to pursue them.<br></br> —Walt Disney</p>
                     </div>
                     {/* Form */}
                     <div className="footer-form" >
                         <div id="mc_embed_signup">
                         </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>        
            </div>
</div>
{/* footer-bottom area */}
<div className="footer-bottom-area footer-bg">
    <div className="container">
        <div className="footer-border">
             <div className="row d-flex justify-content-between align-items-center">
                 <div className="col-xl-10 col-lg-10 ">
                     <div className="footer-copy-right">
                         <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright &copy; 2022 All rights reserved {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                     </div>
                 </div>
             </div>
        </div>
    </div>
</div>
{/* Footer End*/}
</footer>
);
}

export default Footer;