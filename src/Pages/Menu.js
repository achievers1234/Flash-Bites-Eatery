// import { Navigate, useRoutes } from 'react-router-dom';
// import {useState, useEffect} from 'react';
// import Basket from '../components/my-menu/Basket/Basket';
// import ContextFilter from '../components/my-menu/Context/ContextFilter';
// import ContextProvider from '../components/my-menu/Context/ContextProvider';
// import Details from '../components/my-menu/Details/Details';
// import FavoritePage from '../components/my-menu/Favorite/FavoritePage';
// import Header from '../components/my-menu/Header/Header';
// import Products from '../components/my-menu/Products/Products';
// import NavBar from '../components/my-header/NavBar';
// import Header from '../components/my-header/Header';
import React from "react";
import Header from "../components/my-header/Header";
import MyMenu from "../components/meNu/my-menu";
import Footer from "../components/my-footer/Footer";


const Menu=() => {

  // const [foodItems, setFoodItems] = useState([])
  // console.log(foodItems)

  // const [orderBasket, setOrderBasket] = useState([])


  // let router = useRoutes([
    
  //   { path: '/', element: <Products /> },
    // { path: '/:id', element: <Details /> },
    // { path: '/favorite/', element: <FavoritePage /> },
    // { path: '/basket/', element: <Basket /> },
    // { path: '*', element: <Navigate to={'/'} /> },
  // ])

  // useEffect(()=>{
  //     const fetchItems=()=>{
  //       fetch('http://localhost:5000/food_items/',{
  //         headers:{
  //           'Content-Type':'application/json',
  //           'Access-Control-Allow-Origin': '*'
  //         }
  //       }).then((response) => response.json()).then((data)=> setFoodItems(data.data))
  //     }
  //     fetchItems();

  // },[])


  return (

    <div>

      <Header/>
      <MyMenu/>
      {/* <Footer/> */}

      
      {/* <Products foodItems={foodItems} /> */}
      
    </div>

    
    
        
        
  );
}

export default Menu;
