import React, { useState, useContext } from 'react';
import './menu.css';
import Products from './Products';
import Footer from '../my-footer/Footer';
import { AuthContext } from '../../authConttext';

const MyMenu = () => {
  const { isAuthenticated } = useContext(AuthContext); // Destructure the isAuthenticated state from AuthContext

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    fetch(`http://localhost:5000/categories/?search=${search}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data.data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setData([]);
      });
  };

  return (
    <section>
      {isAuthenticated ? ( // Wrap the component with a conditional statement
        <div>
          <div className='menu'>
            <center>
              <h2 className='fbe'>Flash Bites Eatery Menu</h2>
              <br />
              <form onSubmit={submitHandler} className='form'>
                <input
                  size='30'
                  type='text'
                  onChange={changeHandler}
                  value={search}
                  placeholder='Search foods'
                  id='sea'
                />
                <br />
                <br />
                <input type='submit' value='Search' id='bt' />
              </form>
            </center>
          </div>

          <div className='card-container'>
            {data.length >= 1 ? (
              <Products data={data} smallCards={true} />
            ) : (
              <p>No products found.</p>
            )}
          </div>

          <div className='footer'>
            <center>
              <Footer/>
            </center>
          </div>
        </div>
      ) : (
        <p>You must be logged in to view this page.</p> // Display a message if the user is not authenticated
      )}
    </section>
  );
};

export default MyMenu;