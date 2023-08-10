import React from 'react';
// import { ListGroup,  ListGroupItem } from 'reactstrap';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    
return (<section>

  {/* <div>

    <h3 id='yy'>LINK UP WITH US</h3>
  </div> */}

<div className='conta'>
          <div className='conta1'>
            <h4>Location</h4>
            <div>
              
              <i className='ri-map-pin-line '>Johnson  Plaza<br/> Ground floor <br/> Kampala Road</i>
            </div>

            <div >
              Call us on:<br/>
              <i className='ri-phone-line '>+256 700 674 521 / </i>
              <i class="ri-whatsapp-fill">+256 789 674 521</i>
            </div>
          </div>

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
          </div>


          <div className='links'>

            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/" id='Lh'>Home</Link></li>
              <li><Link to="/menu" id='Lm'>Menu</Link></li>
              <li><Link to="/contact" id='Lc'>Contact</Link></li>

              <li>
                <Link to="/form1" id='Si'>
                    
                        SignUp
                  
                </Link>
            </li>
            <li>
                <Link to="/Login1" id='lo'>
                    
                        LogIn
                    
                </Link>
            </li>
              

            </ul>



          </div>

          
        

            
    
          </div>
          </section>
        
    
  )
}

export default Footer


