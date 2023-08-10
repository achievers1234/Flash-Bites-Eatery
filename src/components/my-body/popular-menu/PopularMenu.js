import React from 'react';
// import { Container,Row,Col } from 'reactstrap';
import { popularMenuFood } from '../../../sampleInfo/sampleData/products';
import './popularMenu.css';
import ProductCard  from '../product-card/ProductCard'

const PopularMenu = () => {
  return <section>

<div >
                <h2 id='pp'>Popular menu</h2>
            </div>
    <div className='container'>
        <div className='house'>
            
            {
                popularMenuFood.map(item =>(
                    <div key={item.id}>
                        <ProductCard item={item}/>
                        
                    </div> 
                )

                )
            }
        </div>
    </div>
  </section>
}

export default PopularMenu