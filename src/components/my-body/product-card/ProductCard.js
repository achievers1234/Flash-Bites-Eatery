import React from 'react'
import './productcard.css'

const ProductCard = (props) => {

const {title, imgUrl, price} = props.item
  return (
    <div className='single_product'>
        <div className='product_content'>
        
            <img src={imgUrl} alt="" className='w-100'/>
       

        
            {/* <div className='rating text-center'> */}
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
                <span><i class="ri-star-fill"></i></span>
            {/* </div> */}
            <div className='tt'>
                <h6>{title}</h6>
            {/* </div> */}
            
            {/* <div className='d-flex align-items-center
            justify-content-between'> */}
                <span className='price'>Price: Ugx<span>{price }</span></span>
                <span></span>
                <span><i class="ri-shopping-cart-line"></i></span>
            </div>

        </div>
        </div>
    
    
  )
}

export default ProductCard