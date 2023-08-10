import React, { useState, useEffect } from "react";
import "./form.css";
import { Link } from "react-router-dom";

function MySignUp() {
  // handling empty values
  const initialValues = {
    username: "",
    contact: "",
    email: "",
    password: "",
  };

  // capturing form values
  const [formValues, setFormValues] = useState(initialValues);

  // handling errors for validation
  const [formErrors, setFormErrors] = useState({});

  // handling submit state
  const [isSubmit, setIsSubmit] = useState(false);

  // handling on change for the values entered
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, []);

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // validations for the form values entered
  const validate = (values) => {
    const errors = {};

    const regex = /[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.contact) {
      errors.contact = "Contact is required!";
    } else if (!/^[0-9]{10}$/.test(values.contact)) {
      errors.contact = "This is not a valid contact number!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password > 16) {
      errors.password = "Password cannot be more than 16 characters";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* <div className="ui-divider"></div> */}
        <div className="ui-form">
          <h1 id="li">SignUp </h1>
          <div className="field">
            <input
              id="un"
              type="text"
              name="username"
              placeholder=" Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="error">{formErrors.username}</p>

          <div className="field">
            <input
              id="pn"
              type="tel"
              name="contact"
              placeholder=" Contact"
              value={formValues.contact}
              onChange={handleChange}
            />
          </div>
          <p className="error">{formErrors.contact}</p>

          <div className="field">
            <input
              id="ea"
              type="email"
              name="email"
              placeholder=" Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="error">{formErrors.email}</p>

          <div className="field">
                       
            <input 
            id="pw"
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            onChange={handleChange}
            />
          </div>
          <p className="error">{ formErrors.password}</p>

          <p className="p-acc">Already have an account? <Link to="/Login1" id='lo'>
                    
                    | LogIn
                
            </Link> </p>

            <Link to="/menu">
                <button className="fbtn" type="submit">Submit</button>
          </Link>
         
          
          
        </div>
        <div className="message">
        {Object.keys(formErrors).length === 0 && isSubmit ? <p>successful</p>: <p></p>} 
        </div>
        
      </form>
    </div>
  );
}

export default MySignUp;