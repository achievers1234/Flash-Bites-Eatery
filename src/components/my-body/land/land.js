import React from 'react'
import './land.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
    return (
        <div className='lapage'>
            <div className='land-blur'></div>
            <div className='left-S'>
                <p id='lm'>Are you Hungry?</p>
                <div className='best-ad'>
                    <span>the best restaurant in town</span>
                </div>
                <div className='htext'>
                    <div>
                        <span className='stroke-text'>Feed </span>
                        <span> your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span id='fd'>Feed your body responsibly with FLASH BITES' foods bit!</span><br></br>
                        <span id='sd'>Your body is the only place you can live in.</span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span>+20</span>
                        <span id='jj'>foods</span>
                    </div>
                    <div>
                        <span>+150</span>
                        <span id='jj'>members joined</span>
                    </div>
                </div>
                <div className='lbtns'>
                    <Link to='/form1'>
                        <button className='btn' id='gs'>Get Started</button>
                    </Link>
                    <div>
                        <Link to='/menu'>
                            <button className='btn' id='vm'>View the Menu</button>
                        </Link>
                        <button className='btn' id='lg'>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage










