import React, { Component } from "react";
import axios from 'axios';
import "../css/register.css";

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone_number:'',

            isError: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                phone_number:''
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state.email,"form Valid");
            let first_name=this.state.first_name
            let last_name=this.state.last_name
            let email=this.state.email
            let Password=this.state.password
            let Phone_number=this.state.phone_number
          axios.post('http://localhost/job_hooks/API/regisUser.php?first_name='+first_name+ '&last_name='+last_name+'&email='+email+'&pass='+Password+'&phone='+Phone_number)
          window.location.href = "./Login";

        } else {
            console.log("Form is invalid!");
        }
    };



    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;

            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;

            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;

                case "phone_number":
                  isError.phone_number =
                      value.length < 9 ? "Atleast 10 characaters required" : "";
                  break;
                
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
      console.log("hello register");
        const { isError } = this.state;

        return (

            <>
            
            <div style={{ padding: "40px", backgroundColor: '#4c5595', textAlign: "center" }}>
                <h1 style={{ color: 'white' }}>Register</h1>
                <h5>Happy to have you join us </h5>
            </div>

          <div className="forms" > 
            <form onSubmit={this.onSubmit} noValidate>

              {/* <h1>Registration</h1> */}


                <div className="form-group">
                  <div className="form2">

                    <label>First Name</label>
                    
                    <input
                        type="text"
                        className={isError.first_name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="first_name"
                        onChange={this.formValChange}
                        />
                    {isError.first_name.length > 0 && (
                        <span className="invalid-feedback">{isError.first_name}</span>
                        )}
                </div>

                
                  <div className="form2">
                    <label>Last Name</label>

                    <input
                        type="text"
                        className={isError.last_name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="last_name"
                        onChange={this.formValChange}
                        />
                    {isError.last_name.length > 0 && (
                        <span className="invalid-feedback">{isError.last_name}</span>
                        )}
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={this.formValChange}
                        />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                        )}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={this.formValChange}
                        />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                        )}
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        className={isError.phone_number.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="phone_number"
                        onChange={this.formValChange}
                        />
                    {isError.phone_number.length > 0 && (
                        <span className="invalid-feedback">{isError.phone_number}</span>
                        )}
                </div>

                <button type="submit" className="reg-btn">Create User</button>
                </div>

            </form>
            </div>
                        </>
           
        );
    }
}