import image1 from '../Images/4.jpg'
import image2 from '../Images/14.webp'
import image3 from '../Images/10.jpg'
import image4 from '../Images/19.jpg'
import image5 from '../Images/21.jpg'
import image6 from '../Images/20.jpg'
import image7 from '../Images/23.jpg'
import image8 from '../Images/22.jpg'
import {BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight} from 'react-icons/bi'


import { AiOutlineCheckCircle } from 'react-icons/ai'




const Home = () => {
    return (<>
        <div>
            <div className='section1'>
                <div style={{ background: `url(${image8}) center fixed no-repeat`, backgroundSize: 'cover', minHeight: '100vh', width: '100%' }}>
                    <div className='p-3' >
                        <div className='row'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10 col-12'>
                                <div style={{ minHeight: '50vh' }}>
                                    <div className='d-flex flex-column h-100 justify-content-center'>
                                        <div>
                                            <div className='bg-ligh' style={{ margin: '40px' }}>
                                                {/* <div className='fw-bold display-4'>
                                                    <img width='50%' src={image7} />
                                                </div>
                                                <div>
                                                    Cupidatat aute eiusmod adipisicing nulla adipisicing qui cupidatat
                                                    occaecat veniam occaecat aliqua fugiat.
                                                </div>
                                                <div className='mt-2'>
                                                    <button className='btn btn-lg rounded-0 btn-outline-dark'>Contact Us</button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=''>
                                        <div className='row'>
                                            <div className='col-6 col-md-3 p-2  option'>
                                                <div className='shadow' style={{ height: '200px', position: 'relative' }}>
                                                    <div className='option-img'>
                                                        <img src={image1} width='100%' className='' />
                                                        <div className='background'></div>
                                                    </div>
                                                    <div className='text-option' style={{}}>
                                                        Pharmarcy
                                                    </div>
                                                    <div style={{ backgroundColor: 'yellow', height: '20px', width: '100%', position: 'absolute', bottom: '0' }}></div>
                                                </div>
                                            </div>
                                            <div className='col-6 col-md-3 p-2 option'>
                                                <div style={{ height: '200px', position: 'relative' }}>
                                                    <div className='option-img'>
                                                        <img src={image4} width='100%' className='' />
                                                        <div className='background'></div>
                                                    </div>
                                                    <div className='text-option' style={{}}>
                                                        Pharmarcuticals
                                                    </div>
                                                    <div style={{ backgroundColor: 'yellow', height: '20px', width: '100%', position: 'absolute', bottom: '0' }}></div>
                                                </div>
                                            </div>
                                            <div className='col-6 col-md-3 p-2 option'>
                                                <div style={{ height: '200px', position: 'relative' }}>
                                                    <div className='option-img'>
                                                        <img src={image5} width='100%' className='' />
                                                        <div className='background'></div>
                                                    </div>
                                                    <div className='text-option' style={{}}>
                                                        Enterprises
                                                    </div>
                                                    <div style={{ backgroundColor: 'yellow', height: '20px', width: '100%', position: 'absolute', bottom: '0' }}></div>
                                                </div>
                                            </div>
                                            <div className='col-6 col-md-3 p-2 option'>
                                                <div style={{ height: '200px', position: 'relative' }}>
                                                    <div className='option-img'>
                                                        <img src={image6} width='100%' className='' />
                                                        <div className='background'></div>
                                                    </div>
                                                    <div className='text-option' style={{}}>
                                                        Cash Express
                                                    </div>
                                                    <div style={{ backgroundColor: 'yellow', height: '20px', width: '100%', position: 'absolute', bottom: '0' }}></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ minHeight: '100vh', padding:'150px 20px' }} className='bg-dark '>
                <div className='text-white'>
                    <div className='text-center'>
                        <div className='display-3'>ABOUT US</div>
                        <div className='text-warning'>Quis commodo quis voluptate in.</div>
                        <div>
                            Veniam nulla veniam et laborum minim aliquip. Voluptate non sit id ipsum ut enim. Esse do eiusmod Lorem laboris irure eu qui aute proident nisi.
                            Veniam nulla veniam et laborum minim aliquip. Voluptate non sit id ipsum ut enim. Esse do eiusmod Lorem laboris irure eu qui aute proident nisi.
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-10 col-12'>
                                    <div className='py-5 my-5'>
                                        <div className='row'>
                                            <div className='col-md-3 col-6'>
                                                <div className='bg-secondary' style={{height:'150px'}}></div>
                                                <div>
                                                    <div className='p-2'>Silkay group info</div>
                                                    <div className='p-2' style={{fontSize:'10px'}}>
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                    </div>
                                                </div>
                                                <div className='py-2'>
                                                    <button className='btn btn-outline-warning rounded-0'>Read Me</button>
                                                </div>
                                            </div>
                                            <div className='col-md-3 col-6'>
                                                <div className='bg-secondary' style={{height:'150px'}}></div>
                                                <div>
                                                    <div className='p-2'>Silkay group info</div>
                                                    <div className='p-2' style={{fontSize:'10px'}}>
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                    </div>
                                                </div>
                                                <div className='py-2'>
                                                    <button className='btn btn-outline-warning rounded-0'>Read Me</button>
                                                </div>
                                            </div>
                                            <div className='col-md-3 col-6'>
                                                <div className='bg-secondary' style={{height:'150px'}}></div>
                                                <div>
                                                    <div className='p-2'>Silkay group info</div>
                                                    <div className='p-2' style={{fontSize:'10px'}}>
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                    </div>
                                                </div>
                                                <div className='py-2'>
                                                    <button className='btn btn-outline-warning rounded-0'>Read Me</button>
                                                </div>
                                            </div>
                                            <div className='col-md-3 col-6'>
                                                <div className='bg-secondary' style={{height:'150px'}}></div>
                                                <div>
                                                    <div className='p-2'>Silkay group info</div>
                                                    <div className='p-2' style={{fontSize:'10px'}}>
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                        Qui non consectetur aliqua aute ea ea laboris in tempor do veniam laborum amet.
                                                    </div>
                                                </div>
                                                <div className='py-2'>
                                                    <button className='btn btn-outline-warning rounded-0'>Read Me</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:'300px', background:`url(${image7}) center`, overflow:'hidden'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.5)', height:'100%'}}>
                    <div className='p-3  h-100'>
                        <div className='row h-100'>
                            <div className='col-md-1'></div>
                            <div className='col-md-10 h-100 col-12'>
                                <div className='row h-100'>
                                    <div className='col-12 col-md-6  justify-content-center flex-column d-flex'>
                                        <div className='text-white display-4 fw-bold'>ARE YOU READY TO WORK TOGETHER</div>
                                    </div>
                                    <div className='col-12 col-md-6   justify-content-center flex-column d-flex'>
                                        <div className='text-center'>
                                            <button className='btn fs-2 btn-danger btn-lg rounded-0'>Get in touch</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-1'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark' style={{minHeight:'100vh'}}>
                <div className='text-white text-center pt-5 '>
                    <div className='display-4 '>Some header here</div>
                    <div className='h3 text-warning'>
                        some minor heading down here
                    </div>
                    <div>
                        <div className='p-3'>
                            <div className='row'>
                                <div className='col-md-1'></div>
                                <div className='col-md-10 col-12'>
                                    <div>
                                        <div className='row'>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 p-2 col-md-4'>
                                                <div className=''>
                                                    <div className='d-flex'>
                                                        <div className='py-2'>
                                                            <img src={image1} width='80px' />
                                                        </div>
                                                        <div className='ps-2'>
                                                            <div className='text-start'>
                                                                <div style={{fontSize:'14px'}} className='m-0 text-uppercase'>name of comment maker/reviewer</div>
                                                                <div style={{fontSize:'12px'}}>some details about the above</div>
                                                            </div>
                                                            <div className='text-start'>
                                                                <div className='p-3'>
                                                                    <BiSolidQuoteSingleLeft size={30}/>
                                                                    Proident incididunt commodo ad non nisi cillum
                                                                     dolore cillum aliqua nostrud sint reprehenderit.
                                                                      Proident sit esse amet eiusmod est. Magna conse
                                                                      ctetur adipisicing
                                                                      <BiSolidQuoteSingleRight size={30}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-1'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}



export default Home;
{/* <div className='section2'>
    <div>
        <div className=' p-3' style={{ backgroundColor: '#ddd' }}>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10 col-12'>
                    <div className='d-flex flex-column justify-content-center' style={{ minHeight: '100vh' }}>
                        <div className='p-2'>
                            <div className=''>
                                <div className='row'>
                                    <div className=''></div>
                                </div>
                            </div>
                            <div>
                                <div className='row'>
                                    <div className='col-12 col-md-6'>
                                        <img src={image2} width='100%' />
                                    </div>
                                    <div className='col-12 pt-4 col-md-6'>
                                        <div className='h5'>
                                            Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        </div>
                                        <div>
                                            Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                            Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                            Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                            Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        </div>
                                        <div className='pt-5'>
                                            <div className='d-flex'>
                                                <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                                <div className='px-3'>
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                                <div className='px-3'>
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                                <div className='px-3'>
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                </div>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                                <div className='px-3'>
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center' style={{ minHeight: '100vh' }}>
                        <div>
                            <div>
                                <div className='display-3 mb-2'>Reviews</div>
                                <div className='row'>
                                    <div className='col-12 col-md-4'>
                                        <div className='card bg-light p-3'>
                                            <div>
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                            </div>
                                            <div className='mt-5'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <div className='fw-bold'>Name of someone(full name)</div>
                                                        <div className='' style={{ fontSize: '12px' }}>some monor details about them</div>
                                                    </div>
                                                    <div className='d-flex flex-column justify-content-center'>
                                                        <div className='bg-dark' style={{ borderRadius: '100%', padding: '20px' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <div className='card bg-light p-3'>
                                            <div>
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mont fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mont fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                            </div>
                                            <div className='mt-5'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <div className='fw-bold'>Name of someone(full name)</div>
                                                        <div className='' style={{ fontSize: '12px' }}>some monor details about them</div>
                                                    </div>
                                                    <div className='d-flex flex-column justify-content-center'>
                                                        <div className='bg-dark' style={{ borderRadius: '100%', padding: '20px' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-4'>
                                        <div className='card bg-light'>
                                            <div>
                                                Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                                Lorem dolore amet enim excepteur do elit sit sint fugiatt incididunt mollit sint.
                                            </div>
                                            <div className='mt-5'>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <div className='fw-bold'>Name of someone(full name)</div>
                                                        <div className='' style={{ fontSize: '12px' }}>some monor details about them</div>
                                                    </div>
                                                    <div className='d-flex flex-column justify-content-center'>
                                                        <div className='bg-dark' style={{ borderRadius: '100%', padding: '20px' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    </div>
</div>

<div className='section3'>
    <div className='p-3' style={{ background: `url(${image3})`, minHeight: '100vh' }}>
        <div className='row h-100'>
            <div className='col-md-1'></div>
            <div className='col-12 col-md-10 '>
                <div className='px-3 py-5 d-flex flex-column justify-content-center' style={{ height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className='text-white'>
                        <div>
                            <div className='my-4' style={{textAlign:'center'}}>
                                <div className='h5 my-3'>
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                </div>
                                <div>
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                </div>
                                <div>
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='d-flex'>
                                    <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                    <div className='px-3'>
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                    <div className='px-3'>
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                    <div className='px-3'>
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <div className='d-flex flex-column justify-content-center'><AiOutlineCheckCircle size={30} /></div>
                                    <div className='px-3'>
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                        Lorem dolore amet enim excepteur do elit sit sint fugiat incididunt mollit sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-1'></div>
        </div>
    </div>
</div> */}