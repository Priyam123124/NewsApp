
import React, { useState } from 'react'
import './logo.png'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ()=> {
  const [flag, setFlag] = useState(false)
  const div1 = ()=> {
    setFlag(!flag);
    console.log(flag);
  }
  const off = ()=>{
    setFlag(false);
  }
    return (
      <div id='idd'>
      <div className='navbar'> 
      <img src={require('./logo.png')} alt='Logo' className='size'/>
      <div className='list'>
        <ul className='flex'>
            <li><Link className='style' to='/'>Home</Link></li>
            <li><Link className='style' to='/entertainment'>Entertainment</Link></li>
            <li><Link className='style' to='/business'>Business</Link></li>
            <li><Link className='style' to='/health'>Health</Link></li>
            <li><Link className='style' to='/science'>Science</Link></li>
            <li><Link className='style' to='/sports'>Sports</Link></li>
            <li><Link className='style' to='/technology'>Technology</Link></li>
        </ul>
      </div>
      <div className="linebutton" onClick={div1}>
        <div className="margin">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        </div>
      </div>
      </div>
      {flag && <div className='gayab' style={{position: 'fixed', top: '36px', backgroundColor: 'rgb(39, 37, 37)', width: "100%"}}>
      <ul>
            <li onClick={off} className="chor"><Link className='style1' to='/'>Home</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/entertainment'>Entertainment</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/business'>Business</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/health'>Health</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/science'>Science</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/sports'>Sports</Link></li>
            <li onClick={off} className="chor"><Link className='style1' to='/technology'>Technology</Link></li>
        </ul>
        </div>}
      </div>
    )
}

export default Navbar
