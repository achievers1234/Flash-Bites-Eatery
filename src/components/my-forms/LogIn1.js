import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './form.css';

function MyLogin1() {
  const history = useHistory(); // get the history object
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Perform the login logic here
      console.log("Login successful");
      history.push("/menu"); // Redirect the user to the menu page
    }
  }, [formErrors, history, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be more than 6 characters';
    } else if (values.password.length > 16) {
      errors.password = 'Password cannot be more than 16 characters';
    }
    return errors;
  };

  // check if there are no errors and redirect to menu page
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    history.push('/menu');
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="ui-form">
          <h1 id="li">LogIn </h1>
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
          <p className="error">{formErrors.password}</p>

          <p className="p-acc">
            Don't have an account?{' '}
            <Link to="/form1" id="lo">
              | SignUp
            </Link>{' '}
          </p>

          <button className="fbtn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyLogin1;




