import image from '../Images/13.jpg'
import image2 from '../Images/22.jpg'

const AboutUS  = () => {
    return (
        <>
            <div>
                <div style={{background: `url(${image}) center fixed no-repeat`, backgroundSize: 'cover',height:'60vh'}}>
                    <div style={{ backgroundColor:'rgba(0,0,0,0.6)', height:'100%',  alignContent:'center'}}>
                        <div className='text-center text-light'>
                            <div className='display-1'>About Us</div>
                            <div className='h3'>Because Your Health Deserves the Best - Healminos</div>
                        </div>
                    </div>
                </div>
                <div className='container' style={{minHeight:'70vh', alignContent:'center'}}>
                    <div className='row'>
                        <div className='col-6 '>
                            <div className='d-flex flex-column' style={{gap:20}}>
                                <div className='text-uppercase'>About us</div>
                                <div className='display-6'>We Are Professional Pharmacy & Medical Service</div>
                                <div className='d-flex flex-column fs-5' style={{gap:'20px'}} >
                                    <div>
                                    Curabitur sodales magnis ex dictumst congue at nisi. Nostra sem parturient a elit euismod sociosqu finibus imperdiet. Auctor nisi porttitor quisque etiam posuere aptent.
                                    </div>
                                    <div>
                                    Curabitur sodales magnis ex dictumst congue at nisi. Nostra sem parturient a elit euismod sociosqu finibus imperdiet. Auctor nisi porttitor quisque etiam posuere aptent.
                                    </div>
                                </div>
                                <div>
                                <button className='btn btn-info'>Discover more</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div style={{maxHeight:'100%', overflow:'hidden', borderRadius:'10px'}}>
                                <img src={image2} width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS