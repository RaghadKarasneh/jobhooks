// import './App.css';
import React, {useEffect} from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/Index';
// import Form from './component/Form';
import Footer from './component/Footer';
import About from './component/About';
import Headers from './component/Headers';
import Tip from './component/Tip';
import Tip2 from './component/Tip2';
import Userinfo from './component/Userinfo'; 
import UpdateInfo from './component/updateInfo'; 
import Apply from './component/Apply';
import Job_listing from './component/Job_listing'
import Contact from './component/Contact';
import Job_details from './component/Job_details';
import CS from './component/cs';
import HE from './component/he';
import Register from './component/Register';
import Login from './component/Login';
import PostJob from './component/PostJob';

function App() {
  useEffect(()=>
{

 if (sessionStorage.getItem("user_id")==null)
 sessionStorage.setItem("user_id", 0)}
  )

  return (
    <>
    {/* <Naver > */}
        <BrowserRouter>

        <Headers user_id={sessionStorage.getItem("user_id")}/>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path='/About' element={< About />}></Route>
          <Route path='/Contact' element={< Contact />}></Route>
          <Route path='/Tip' element={< Tip />}></Route>
          <Route path='/Tip2' element={< Tip2 />}></Route>
          <Route path="/Job_listing" element={<Job_listing/>}></Route>
          <Route path="/Job_details/:id" element={<Job_details/>}></Route>
          <Route path="/postJob" element={<PostJob/>}></Route>
          <Route path='/Apply' element={< Apply />}></Route>
          {/* <Route path='/Job_details' element={< Details />}></Route> */}
          <Route path='/CS' element={< CS />}></Route>
          <Route path='/HE' element={< HE />}></Route> 
          <Route  path='/Userinfo' element={< Userinfo />}></Route> 
          <Route  path='/updateInfo' element={< UpdateInfo />}></Route>  
          <Route  path='/Register'  element={< Register />}></Route> 
          <Route  path='/Login' element={< Login />}></Route>
         </Routes>

      </BrowserRouter>  
      <Footer />
    </>
  );
}

export default App;
