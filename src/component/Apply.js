import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import "../css/Apply.css";
import axios from 'axios';
import { useLocation } from 'react-router-dom'

function Apply() {

    const[isSubmit,setSubmit]=useState(false);
    const [profile, setProfile] = useState(1);
    const [pro_type, setPro_type] = useState('test-name');
    const [address, setAddress] = useState('test-email');
    const [address2, setAddress2] = useState(999);
    const [city, setCity] = useState(111);
    const [state, setState] = useState(1);
    const [postal, setPostal] = useState('test-name');
    const [country, setCountry] = useState('test-email');
    const [letter, setLetter] = useState('Upload File');
    const [resume, setResume] = useState('Upload File');
    const [language, setLanguage] = useState(1);
    const [write, setWrite] = useState('test-name');
    const [spoken, setSpoken] = useState('test-email');
    const [user_id, setUser_id] = useState(999);
    const [company_id, setCompany_id] = useState(111);


    const profileHandel = (e)=>{setProfile(e.target.value)}
    const pro_typeHandel = (e)=>{setPro_type(e.target.value)}
    const addressHandel = (e)=>{setAddress(e.target.value)}
    const address2Handel = (e)=>{setAddress2(e.target.value)}
    const cityHandel = (e)=>{setCity(e.target.value)}
    const stateHandel = (e)=>{setState(e.target.value)}
    const postalHandel = (e)=>{setPostal(e.target.value)}
    const countryHandel = (e)=>{setCountry(e.target.value)}
    const letterHandel = (e)=>{setLetter(e.target.value)}
    const resumeHandel = (e)=>{setResume(e.target.value)}    
    const languageHandel = (e)=>{setLanguage(e.target.value)}
    const writeHandel = (e)=>{setWrite(e.target.value)}
    const spokenHandel = (e)=>{setSpoken(e.target.value)}
    const user_idHandel = (e)=>{setUser_id(e.target.value)}
    const company_idHandel = (e)=>{setCompany_id(e.target.value)}

    const clickHandel = ()=>{
        axios.post('http://localhost/job_hooks/API/insertcv.php?company_id='+company_id+'&profile_type='+pro_type+'&online_profile='+profile+'&postal='+postal+'&state='+state+'&country='+country+'&city='+city+'&address_two='+address2+'&address_one='+address+'&cover_letter='+letter+'&spoken_level='+spoken+'&written_level='+write+'&language='+language+'&user_id='+user_id)

        .then((data) => {
            // console.log('localhost/api-crud/php_crud/update.php?id='+id+'&name='+name+'&email='+email+'&age='+age+'&salary='+salary);
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    // const Background = "https://d341ezm4iqaae0.cloudfront.net/indeedjobs/wp-content/uploads/2020/12/hero-home.svg";
    
    const location = useLocation();
    console.log(location.pathname);

    return (
        <>
        {/* <span>Path : {location.pathname}</span> */}
        <div className='text-center message' style={{ display:isSubmit?"block":"none"}}>
        <p>Your Information has been reserved successfully</p>
        </div>

            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Candidate Profile</h1>
            </div>

            {/* <div className='t1'>
                <span style={{ padding: '10px' }}><FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon></span>
                Candidate Profile
                <hr />
            </div> */}

            <div className="c2">
                <div className="cHead">
                    <h5  className='label'>Enter Your Profile Information:</h5>
                </div>

                <div className="cBody">
                    <label htmlFor="" className='label2'>Online Profiles (URL)</label>
                    <div>
                        <input type="text" className='inp url-inp' onChange={profileHandel} />
                        <select className='inp' onChange={pro_typeHandel}>
                            <option value="empty" disabled selected>— Make a Selection —</option>
                            <option value="GetHub">GitHub</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Portfolio">Portfolio</option>
                            <option value="Portfolio">OneDrive</option>
                            <option value="Portfolio">GoogleDrive</option>
                            <option value="Portfolio">DropBox</option>
                        </select>
                    </div>
                </div>

                <div className="cBody">
                    {/* <label htmlFor="">Address (1)</label> */}
                    <div>
                        <div style={{}}>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Address</label>
                                <input type="text" className='inp' onChange={addressHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Address 2</label>
                                <input type="text" className='inp' onChange={address2Handel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>City<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={cityHandel} />
                            </span>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>State/Province</label>
                                <input type="text" className='inp' onChange={stateHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Zip/Postal Code</label>
                                <input type="text" className='inp' onChange={postalHandel} />
                            </span>
                            <span className='d1'>
                                <label htmlFor="" className='label2'>Country<span className='red'>*</span></label>
                                <input type="text" className='inp' onChange={countryHandel} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Upload other documents (Cover Letter, Portfolio, etc.): </h5>
                </div>
                <div className="cBody">
                    <label htmlFor="">Documents</label>
                    <div>
                        <input type="file" className='inp' onChange={letterHandel} id="file1"  />
                        <label htmlFor="file1" className='file'>Chose a file</label>
                       <span>{letter}</span> 
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Upload Resume/CV:</h5>
                </div>
                <div className="cBody">
                    <label htmlFor="" className='label2'>Please upload your resume (Max size: 5 MB)<span className='red'>*</span></label>
                    <div>
                        <input type="file" id="file2" onChange={resumeHandel}  />
                        <label htmlFor="file2" className='file'>Chose a file</label>
                        <span>{resume}</span>
                    </div>
                </div>
            </div>

            <div className="c1">
                <div className="cHead">
                    <h5 className='label'>Language(s)</h5>
                </div>
                <div className="cBody">
                    {/* <label htmlFor="">Language(s)</label> */}
                    <div className="cBody">
                        <div>
                            <div style={{display: 'flex'}}>
                                <span className='d1'>
                                    <label htmlFor="" className='label2'>Language</label>
                                    <select className='inp  sel-inp' onChange={languageHandel}>
                                        <option value="empty" disabled selected>— Make a Selection —</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="English">English</option>
                                        <option value="French">Spanish</option>
                                        <option value="French">German</option>
                                        <option value="French">Turkish</option>

                                    </select>

                                </span>
                                <span className='d1'>
                                    <label htmlFor="" className='label2'>Written Level</label>
                                    <select className='inp sel-inp' onChange={writeHandel}>
                                        <option value="empty" disabled selected>— Make a Selection —</option>
                                        <option value="Native">Native</option>
                                        <option value="Fluent">Fluent</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Basic">Basic</option>
                                    </select>

                                </span>
                                <span className='d1'>
                                    <label htmlFor="" className='label2'>Spoken Level</label>
                                    <select className='inp sel-inp' onChange={spokenHandel}>
                                        <option value="empty" disabled selected>— Make a Selection —</option>
                                        <option value="Native">Native</option>
                                        <option value="Fluent">Fluent</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Basic">Basic</option>                                    
                                    </select>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: "60%", margin: "auto" }}>
                <button className='butt' onClick={clickHandel}>Submit</button>
            </div>
        </>
    );
}

export default Apply;