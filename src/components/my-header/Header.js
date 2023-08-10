import React, {useRef} from 'react';
import './header.css';
// import { Container } from 'reactstrap';
// import Home from '../../pages/Home';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';



// const navlinks=[{
//     display: 'Home',
//     url: '#'
// },

// {display: 'About',
// url: '#'},
 
// {display: 'Menu',
// url: '#'},


// {display: 'Contact',
// url: '#'}

// ]

const Header = () => {

    const menuRef =useRef()

  return (
    <header className='header'>
        <div>
            <div className='navigation'>
                <div className='logo'>

                <img id='lng' src='logo-1.png' alt='' />


                    <h2 id='lhg'>
                    
                         Flash Bites Eatery
                    </h2>
                    
                </div>

                <div className='nav-menu ' ref={menuRef}>
                    <div className='nav-list-wrapper d-flex align-items-center gap-5'>
                        <ul className='nav-list'>

                        {/* {
                            navlinks.map((item,index) => (
                                <li className='nav-item' key={index}><a href={item.url} onClick={menuToggle} >{item.display}</a></li>

                            ))
                        } */}

                            <li>
                                <Link to="/" id='Hm'>Home</Link>
                            </li>
                            {/* <li>
                                <Link to="/menu" id='Me'>Menu</Link>
                            </li> */}
                            <li>
                                <Link to="/contact" id='Co'>Contact</Link>
                            </li>
                            <li>
                                <Link to="/form1">
                                    <Button className='btns' id='so'>
                                        SignUp
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login1">
                                    <Button className='btns' id='lo'>
                                        Login
                                    </Button>
                                </Link>
                            </li>
                        </ul>

                        {/* <div className='menu-R'>
                            <div className='Cu-S'>
                                <input type={Text} placeholder='foods...'/>
                                <span><i class="ri-search-line"></i>
                                </span>
                            </div>
                        </div> */}


                    </div>

                </div>

                

                <div className='m-mobile'>

                    <span><i class="ri-menu-line"></i></span>

                </div>
            </div>

        </div>
    </header>
  )
}

export default Header