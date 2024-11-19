import image from '../Images/logo.png'
import image1 from '../Images/Global link logo-ORIGINAL.png'

import { Link, NavLink } from "react-router-dom";
import {ImMenu} from 'react-icons/im'
import { useState } from 'react';


const Navigation = () => {
    const [navbar, setNavbar] = useState(false)

    let mynav = document.querySelector('mynav-cont');
    let myscroll = window.scrollY

    const changebackground = () => {
        if (window.scrollY > 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    let status = true;


    window.addEventListener('scroll', changebackground);
    return (<>
        <div>
            <div className="">
                <div className="d-flex fw-bold p-4" style={{ zIndex:'3',justifyContent: 'space-between',transition:'0.5s', backgroundColor: navbar ? 'rgba(41, 142, 0, 0.8)': 'rgba(41, 142, 0)',width:'100%', position:'fixed'}}>
                    <div className="">
                        <NavLink className='' to='/'>
                            <img src={image1} width='150px'/>
                        </NavLink>
                    </div>
                    <div className=" d-none d-md-flex justify-content-center flex-column">
                        <div className="d-flex MainNav" style={{ gap: '20px'}}>
                            <NavLink id='link' to='/' >Home</NavLink>
                            <NavLink id='link' to='/About' >About Us</NavLink>
                            <NavLink id='link' to='/OurServices' >Services</NavLink>
                            <NavLink id='link' to='/OurPartners' >Clients</NavLink>
                            <NavLink id='link' to='/ContactUs' >Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="d-flex d-md-none justify-content-center flex-column">
                        <ImMenu size={30}/>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default Navigation;