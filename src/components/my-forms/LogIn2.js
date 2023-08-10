// import "./App.css";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function MyLogin1() {
    const intialValues = {email: "", password:""};
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        console.log(e.target);
        const{name , value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formErrors);
        }
    }, [])

    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate =(values)=>{
        const errors = {};
        const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;

        if (!values.email)
        {
          errors.email= "Email is required!";
        }else if (!regex.test(values.email))
        {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password)
        {
          errors.password= "Password is required!";
        } else if (values.password <4)
        {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password>16)
        {
          errors.password = "Password cannot be more than 16 characters";
        }
        return errors;
    }

  return (
    
    <div className="container">
    
      <form onSubmit={handleSubmit}>
       
        
        <div className="ui-divider"></div>
        <div className="ui-form">

        <h1 id="li">Login </h1>

          <div className="field">
            
            <input 
            id="ei"
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formValues.email}
            onChange={handleChange} />
            


          </div>
          <p className="error">{ formErrors.email}</p>

          <div className="field">
            <label>
            <input 
            id="pi"
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formValues.password}
            onChange={handleChange}
            />
            </label>

            <br></br>

            <input id="cb" type="checkbox"/>
            <label>Show Password</label>

            <p id="dp">Don't have an account? <Link to="/form1" id='Si'>| SignUp</Link></p>


          </div>
          <p className="error">{ formErrors.password}</p>

          <Link to="/menu">
            <button className="fbtn" type="submit">Login</button>
          </Link>

        </div>
        
        {Object.keys(formErrors).length === 0 && isSubmit ? <p>Successful</p>: <p></p>}
      </form>
    </div>
  );
}

export default MyLogin1;