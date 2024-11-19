import image from '../Images/logo.png'
import image1 from '../Images/logo1.png'

import { Link, NavLink } from "react-router-dom";
import {FiSearch} from 'react-icons/fi'
import {ImMenu} from 'react-icons/im'


const Navigation = () => {
    return (<>
        <div>
            <div className="">
                <div className="d-flex fw-bold p-4" style={{ zIndex:'3',justifyContent: 'space-between', backgroundColor: 'rgba(142,180,102,0.8)',width:'100%', position:'fixed'}}>
                    <div className="">
                        <NavLink className='' to='/pharmarcyapp/'>
                            <img src={image1} width='150px'/>
                        </NavLink>
                    </div>
                    <div className=" d-none d-md-flex justify-content-center flex-column">
                        <div className="d-flex MainNav" style={{ gap: '20px'}}>
                            <NavLink id='link' to='/pharmarcyapp/Aboutus' >About us</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/OurServices' >Services</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/OurPartners' >Clients</NavLink>
                            <NavLink id='link' to='/pharmarcyapp/ContactUs' >Contact us</NavLink>
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