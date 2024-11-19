import { Link } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div>
                <div className=" bg-dark text-white" style={{}}>
                    <div>
                        <div className="">
                            <div className="d-md-flex p-3 d-block justify-content-between">
                                <div className="text-uppercase d-flex justify-content-center flex-column display-4 fw-bold">header here</div>
                                <div>
                                    <div className="py-2">
                                        <div className="h3 m-0">Join our news leter</div>
                                        <div style={{fontSize:'15px'}}>Please join our news leter, and experience news like never before</div>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="input-group">
                                                <input type="text" class="form-control" style={{maxWidth:'400px'}} aria-label="Text input with segmented dropdown button"/>
                                                    <div class="input-group-append">
                                                        <button type="button" class="btn btn-lg rounded-0 btn-danger">Search</button>
                                                        
                                                    </div>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mb-0"/>
                            <div className="d-flex justify-content-end">
                                <div className="bg-light text-black px-3 d-flex py-2" style={{gap:'10px'}}>
                                    <Link><BsFacebook size={30}/></Link>
                                    <Link><AiFillInstagram size={30}/></Link>
                                    <Link><AiOutlineTwitter size={30}/></Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="text-center p-2" style={{fontSize:'12px'}}>
                                &copy;2023 PharmarcyNameHere | All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;