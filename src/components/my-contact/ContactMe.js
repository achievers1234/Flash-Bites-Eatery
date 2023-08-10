import React from 'react';
// import coverImg from '../../sampleInfo/images/imag_14.png';
// import Header from '../my-header/Header';

import './contactMe.css';

const ContactMe = () => {
  return (
    <section>
        <div className='contain'>

    {/* <Header/> */}


          <div>
              <p id='lct'> We're here to help you level up your diet...
              </p>
          </div>

                  
          






        </div>
        <div>
            
            <h4 id='us'>Contact Us</h4>

            <div className='coU'>

              <div className='table'>

            <p id='hp'>
              We can help, Our Team of Experts is on hand to avail you with your choice.         
            </p>

            <div className='conta2'>  
          <h4>Link up with us</h4>
            <div>
              Follow us on our social media platforms:<br/>
              {/* <i class="ri-facebook-circle-fill">flashbiteseatery</i> */}
              <a href='./facebook'>   <img id='t3' src='t3.png' alt=''/></a>

              <a href='./instagram'>   <img id='t2' src='t2.jpg' alt=''/></a>

              <a href='./twitter'>   <img id='t1' src='t1.png' alt=''/></a>
              {/* <i class="ri-instagram-fill">flashbiteseatery</i>

              <i class="ri-twitter-fill">flashbiteseatery</i> */}
              
            </div>

            <div>
              Send us an email:<br/>
              <a href='./google.com'> <img id='mm' src='t4.jpg' alt=''/> <span id='fbl'>flashbiteseatery@gmail.com</span></a>
            </div>

            <div >
              Call us on:<br/>
              <i className='ri-phone-line '>+256 700 674 521 / </i>
              <i class="ri-whatsapp-fill">+256 789 674 521</i>
            </div>
          </div>


            </div>
            </div> 
            
            
            
          </div>
  </section>

        
          
    
   
  )
}

export default ContactMe