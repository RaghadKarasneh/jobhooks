import React, { useState } from 'react';
import axios from "axios";
import "../css/update.css";
// localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=aa&lastName=bb&email=aa@mail.com&password=asdfg&phone=0771020304
function UpdateInfo() {
    // const [id, SetId]=useState(1);
    const [isSubmit, setSubmit] = useState(false);
    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, SetPassword] = useState('');

    const Update = () => {
        axios.get(`http://localhost/job_hooks/API/updateUserInfo.php?id=1&firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}&phone=${phone}`)
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            });
    }

    return (
        <>
            <div className='text-center message' style={{ display: isSubmit ? "block" : "none" }}>
                <p>Your Information has been updated successfully</p>
            </div>

            <div className="section-overly slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <p className='hero-text'>Update Your Profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='databox form' style={{ marginRight: '70%' }}>
                {/* <form onSubmit={Update}> */}
   <label htmlFor="" className='label2'>First Name</label>
                <span className='field'>
                 
                    <input type="text" className='inp' name='firstName' onChange={(e) => SetFirstName(e.target.value)} placeholder={{firstName}} />
                </span><br />  
                   <label htmlFor="" className='label2'>Last Name</label>
                <span className='field'>
               
                    <input type="text" className='inp' name='lastName' onChange={(e) => SetLastName(e.target.value)} placeholder='shabatat' />
                </span><br />
                <label htmlFor="" className='label2'>Email<span className='red'>*</span></label>
                <span className='field'>
                    
                    <input type="text" className='inp' name='email' onChange={(e) => SetEmail(e.target.value)} placeholder='tama@mail.com' />
                </span><br />  
                 <label htmlFor="" className='label2'>Phone number<span className='red'>*</span></label>
                <span className='field'>
                 
                    <input type="text" className='inp' name='phone' onChange={(e) => setPhone(e.target.value)} placeholder='077 1010101' />
                </span><br />  
                 <label htmlFor="" className='label2'>Password<span className='red'>*</span></label>
                <span className='field'>
                 
                    <input type="password" className='inp' name='password' onChange={(e) => SetPassword(e.target.value)} />
                </span>
                <div className='update-button'>
                    <a href="" className='butt' onClick={Update} style={{ margintop: '30px' }}>Update</a>
                </div>
                {/* </form> */}
            </div>
        </>
    );
}

export default UpdateInfo;