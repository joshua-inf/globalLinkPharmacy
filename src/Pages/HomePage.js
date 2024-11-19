import image1 from '../Images/4.jpg'
import image2 from '../Images/24hrs.png'
import image3 from '../Images/1Global link logo-01.png'
import image4 from '../Images/19.jpg'
import image5 from '../Images/21.jpg'
import image6 from '../Images/20.jpg'
import image7 from '../Images/23.jpg'
import image8 from '../Images/249144.jpg'
import image9 from '../Images/portrait-female-pharmacist-working-drugstore.jpg'
import {BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight} from 'react-icons/bi'


import { AiOutlineCheckCircle } from 'react-icons/ai'
import { Testimonials } from './jsxcomponents'
import { TestimonialsWriteups } from './info'




const Home = () => {
    return (<>
        <div>
            <div className='section1 bg-dark'>
                <div style={{paddingTop:'100px',alignContent:'center', background: `url(${image8}) center fixed no-repeat`, backgroundSize: 'cover', minHeight: '100vh', width: '100%' }}>
                    <div className='p-3  ' >
                        <div className=''>
                            <div className=' '>
                                <div className='container ' style={{alignContent:'center'}}>
                                    <div className=''>
                                        <div className='py-4 d-flex justify-content-start' style={{}} >
                                            <img src={image3} height='100%' width='350px'/>
                                            <img src={image2}  height='100%' width='100px'/>
                                        </div>
                                        <div className='row'>
                                            <div className='col-6 col-md-3 p-2  option'>
                                                <div className='shadow' style={{ height: '200px', position: 'relative' }}>
                                                    <div className='option-img'>
                                                        <img src={image1} width='100%' className='' />
                                                        <div className='background'></div>
                                                    </div>
                                                    <div className='text-option' style={{}}>
                                                    Wellness Products
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
                                                        Prescription Fulfillment
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
                                                    Over-the-Counter Medications
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
                                                    Health Consultations
                                                    </div>
                                                    <div style={{ backgroundColor: 'yellow', height: '20px', width: '100%', position: 'absolute', bottom: '0' }}></div>
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
            <div style={{ minHeight: '100vh', padding:'' }} className='bg-dark p-3 '>
                <div className='text-white'>
                    <div className='text-center container'>
                        <div className='h2 fw-bold my-3'>Welcome</div>
                        <div className='fs-4 fw-thin'>
                        Welcome to Global Link Pharmacy, where your health and well-being are our top priorities. Our commitment is to provide high-quality medications, personalized health advice, and exceptional customer care.    
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className='row'>
                                <div className=''>
                                    <div className='py-5 my-5 container'>
                                        <div className='text-uppercase text-center fs-3 fw-bold'>
                                            Testimonials
                                        </div>
                                        <br className='' />
                                        <div className='row'>
                                            {
                                                TestimonialsWriteups.map((data) =>  <Testimonials image={data.image} name={data.name} info={data.info}/>)
                                            }
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:'300px', background:`url(${image9}) center`, backgroundSize:'cover', overflow:'hidden'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.5)', height:'100%'}}>
                    <div className='p-3  h-100' style={{ alignContent:'center'}}>
                        <div className=''>
                            <div className=''>
                                <div className='row'>
                                    <div className='col-12 col-md-6  justify-content-center flex-column d-flex'>
                                        <div className='text-white h1 text-center fw-bold'>ARE YOU READY TO WORK TOGETHER</div>
                                    </div>
                                    <div className='col-12 col-md-6   justify-content-center flex-column d-flex'>
                                        <div className='text-center'>
                                            <button className='btn fs-2 btn-success btn-lg '>Get in touch</button>
                                        </div>
                                    </div>
                                </div>
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