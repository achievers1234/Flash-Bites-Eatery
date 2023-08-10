import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import pastaImg from '../../../sampleInfo/images/pasta.jpg';
import './chooseUs.css';
import { programData } from '../../Data/programData';

// const ChooseUs = () => {
//   return <section>
//     <div>
//         <div>
//             {/* <div lg='6'>
//                 <img src={pastaImg} alt="" className='w-100'/>
//             </div>  */}

//             <div >

//                 <h2> EXPLORE OUR SERVICES</h2>
//                 <div className='choose_content'>
//                     <h2  id='uu'>Who we are</h2>
//                     <h3>Take a look at the offers we have</h3>
//                     <p>We have a variety of food at afford prices.</p>
//                 </div>
                
//                 <div className='features mt-4'>
//                     {/* <div> */}
//                     <div className='feature1 d-flex align-items-center gap-5'>
//                         {/* <div> */}
//                         <span><i class="ri-truck-line"></i></span>
//                         {/* </div> */}

//                         <h6>Free home delivery</h6>
//                         <p>At your door we delivery freshness in a flash.</p>
//                     </div>

//                     {/* <div className='feature2'>
//                         {/* <div> */}
//                         {/* <span><i class="ri-wallet-3-fill"></i></span> */}
//                         {/* </div> */}
//                         {/* <h6>Return</h6> */}
//                         {/* <p>Be sure to have the right order for your products</p> */}
                        
                        
//                     {/* </div>  */}
//                     {/* </div> */}
                    
//                 </div>
//             </div>
//         </div>
//     </div>
//   </section>
    
// }

// export default ChooseUs

const ChooseUs = ()=> {
    return(<section>

        <div className='g-head'>
                <span className='stroke-text'>EXPLORE</span>
                <span>OUR </span>
                <span className='stroke-text'>SERVICES</span>

            </div>
        <div className='gallery'>

            

            <div >

            <h3>There is nothing cut out about FLASH BITES EATERIES . Not our snacks. Not our kin and our fast foods. Also, unquestionably not the manner in which we live. Around here, we don't make do with anything short of food we're glad to serve. Furthermore, we don't simply check-in.<br></br>We're the fast-food organization that lives unpacked. Be sure to has what you ordered for.

            </h3>

            </div>

            <div>

                <img id='image' src='coffee_1.jpg' alt=''/>

            </div>

            <div className='p-category'>
                {programData.map(( program) =>(
                    <div className='cat'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                    </div>

                ))}

            </div>
          




            
        </div>
        </section>
    );
}

export default ChooseUs