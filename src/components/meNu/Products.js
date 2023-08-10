import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

const Products = ({data}) => {
  return (
    <div>
      <div className="row">
        {data.map(data =>
          <div className="sh">
            <div className='card-container'>
              <div className='card-img'>
                <img src={data.image} alt=' card image' className='iss'/>
                <div className='card-body'>
                  <center>
                    <h5 className='card-title'>{data.name}</h5>
                <Link to="/contact" id='Co'>
                <button id='lik'>Order</button>
                  </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products;























// import React from 'react'

// const Products = ({data}) => {
//   return (
//     <div>
//         <div className="row">
//             {data.map(data =>
            
//             <div className="col-md-4">
//                 <div className='card-img' style={{'width':'18rem'}}>
//                 <img src={data.image} alt=' card image'/>

//                 <div className='card-body'>

//                     <center>
//                         <h5 className='card-title'>{data.name}</h5>
                        
//                         <a href=''>Order</a>
//                     </center>
            
//                 </div>
//                 </div>
//             </div>
//             )}
//         </div>
//     </div>
//   )
// }

// export default Products