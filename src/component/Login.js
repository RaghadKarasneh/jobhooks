import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import '../css/login.css';

function Login(){

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost/job_hooks/API/login.php`)
          .then((response) => {
              setAPIData(response.data);
              // console.log(response.data,"res.data")
          })
  }, [])

  const [pass, setpass] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const passHandel = (e)=>{setpass(e.target.value)}
  const emailHandel = (e)=>{setEmail(e.target.value)}
   

  const handelLog=(event)=>{
    event.preventDefault();

    APIData.map((el)=>{
        document.getElementById('e1').style.display="none";
        document.getElementById('e2').style.display="none";
        if(pass == el.password && email == el.email){
            // console.log(el.id , 'roa');
            // setId(el.id)
            // console.log(el.id, 'bahaa');  
            sessionStorage.setItem("user_id", el.id);
            let ide= sessionStorage.getItem("user_id"); //// raghad here where i store data
            console.log("heh"+ide);
            // console.log("ftom input: " + pass, "ftom DB: " +el.password,"ftom input: " + email,"ftom DB: " +el.email);
            // let id_user= el.id;
            // localStorage.setItem('user', JSON.stringify(id_user)) 
            // setUserId(el.id)
            // setLogin(true)
            // console.log(id_user);
            window.location.href = "/";           
           }else{
               console.log("ftom input: " + pass, "ftom DB: " +el.password,"ftom input: " + email,"ftom DB: " +el.email);
               document.getElementById('e1').style.display="block";
               document.getElementById('e2').style.display="block";
            }
         })
   
  }

    return(
        
        <>
       {/* <Naver style={{display:'none'}} test={id}/> */}
       <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Login</h1>
                <h5>Happy to have you join us </h5>
            </div>
        <div className="register-photo" style={{marginTop: '110px'}}>
          <div className="form-container " > 
          <div className="image-holder" />
            <form id='regForm' className="d"  noValidate>
              <h2 className="text-center">Login</h2>
               
                

                <div className="form-group">
                    <label>Email</label><br></br>
                    <input
                        type="email"
                        name="email"
                        onChange={ emailHandel}
                        className="form-control"
                        required
                    />
                       <p id="e1" style={{color:'red', display:'none'}}> Invalid email</p>
                   
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input
                        type="password"
             
                        name="pass"
                        onChange={passHandel}
                        className="form-control"
                        required
                    />
                    <p id="e2" style={{color:'red', display:'none'}}> Invalid password</p>
                  
                </div>
                <div>

                <button type="" className="login-btn" style={{backgroundColor: '#fa246a', color:'#fff'}} onClick={handelLog}>Login</button> 
                
                </div>
                

            </form>
            
            </div>
            </div>
            
            </>
    )
}

export default Login ;