import {BrowserRouter,Routes, Route,Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './component/Index'
import Job_listing from './component/Job_listing'

import Job_details from './component/Job_details'
import IndependentSchoolDistrict from './component/SubPages/IndependentSchoolDistrict'
const google=window.google
function App() {
  return (
    <>
 
  <BrowserRouter>

    <Routes>
    <Route path="/Job_listing" element={<Job_listing/>}></Route>
      <Route path="/Job_details/:id" element={<Job_details/>}></Route>
      <Route path="/IndependentSchoolDistrict" element={<IndependentSchoolDistrict/>}></Route>
    </Routes>
  </BrowserRouter>
    {/* // <Context />
    // <Checkbox /> */}
    </>);
}

export default App;
