import './Navbar.css'
import React,{useState} from 'react'
import { NavItems } from "./Navbar-Items"
import {Link} from 'react-router-dom'
function Navbar(){
    const [click,setClick]= useState(false)
    const clicknavbar = ()=>{
        setClick(!click)
    }

return(
    <div className="nav-div">
        <h1>Timmy
        </h1>
        <nav>
            <div className="humberer-icon" onClick={clicknavbar}>
            {/* fas fa-times */}
            {/* fas fa-bars */}
            <i className={click?"fas fa-times" : "fas fa-bars"}></i>
        </div>
                <ul className={click?"ul-nav-clicked" : "ul-nav"}>
                    {NavItems.map((item,index)=>(
                        <li key={index}>
                            <Link to={item.href} className={item.cName}>
                            <i className={item.icon}>
                            </i>{item.title}
                            </Link>
                        </li>
                    ))}
                    <button>Sign up</button>
                </ul>
            </nav>
    </div>

        )

}
export default Navbar