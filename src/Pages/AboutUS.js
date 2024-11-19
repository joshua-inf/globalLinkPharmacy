import image from '../Images/freepik__expand__76729.png'
import image2 from '../Images/22.jpg'
import { Corevalues, FounderComp, MissionsVisetc } from './jsxcomponents'
import { founderData } from './info'

const AboutUS = () => {
    return (
        <>
            <div>
                <div className='' style={{ background: `url(${image}) center fixed no-repeat`, alignContent: 'center', backgroundSize: 'cover', height: '60vh' }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', alignContent: 'center' }}>
                        <div className='text-center text-light'>
                            <div className='display-1'>About Us</div>
                            <div className='h3'>Because Your Health Deserves the Best - Healminos</div>
                        </div>
                    </div>
                </div>
                <div className='container pt-5' style={{ alignContent: 'center' }}>
                    <div className='row'>
                        <div className='col-12 p-3 order-2 order-md-1 col-md-6 '>
                            <div className='d-flex flex-column  h-100' style={{ gap: 10, justifyContent: 'space-between' }}>
                                <div className='text-uppercase'>Who We Are</div>
                                <div className='display-6'>We Are Professional Pharmacy & Medical Service</div>
                                <div className='d-flex flex-column' style={{ fontSize: '13px', gap: '20px', lineHeight: '18px', textAlign: 'justify' }} >
                                    <div>
                                        Global Link Pharmacy has been a trusted name in healthcare since 2018, proudly serving the community with excellence and dedication. We are a full-service pharmacy driven by a commitment to deliver high-quality healthcare solutions tailored to meet the needs of every individual. Supported by a team of licensed pharmacists and knowledgeable staff, we aim to enhance the health and well-being of our customers through
                                        professional guidance, exceptional service, and a compassionate approach.
                                    </div>
                                    <div>
                                        Our reputation is built on trust, reliability, and an unwavering focus on patient care. At Global Link Pharmacy, you’ll find more than just medications—you’ll discover a partner in your journey toward better health.
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-info'>Discover more</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 order-1 order-md-2'>
                            <div style={{ maxHeight: '100%', overflow: 'hidden', borderRadius: '10px' }}>
                                <img src={image2} width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' style={{ minHeight: '50vh', alignContent: 'center' }}>
                    <div className='row justify-content-center'>
                        <MissionsVisetc
                            title='Mission'
                            content1='To ensure every individual has access to affordable, effective, and timely healthcare solutions.'
                            mainContent='Our mission reflects our commitment to making healthcare accessible and inclusive. We believe that everyone deserves personalized care and the best possible medical products and services, delivered with professionalism and efficiency'
                        />
                        <MissionsVisetc
                            title='Core Values'
                            content1='To be the leading pharmacy in the region, recognized for innovation, trust, and excellence in customer service.'
                            mainContent='Our vision drives us to continuously raise the bar in pharmacy care. We strive to be a trailblazer in the industry by embracing innovative practices, earning the trust of our customers, and delivering unparalleled service at every touchpoint'
                        />
                    </div>
                </div>

                <div className='text-light' style={{ background: `url(${image}) center no-repeat`,  backgroundSize: 'cover' }}>
                    <div className='d-flex  px-4' style={{ backgroundColor: 'rgba(0, 0, 0,0.8)',paddingBlock:'100px', height: '100%', justifyContent:'start', alignContent:'center', alignItems:'center' }}>
                        <div className='container'>
                            <div className='' >
                                <div >
                                    <div className='text-uppercase h3'>Core Values</div>
                                    <div className='display-6'>Our values define who we are and guide every aspect of our operations:</div>
                                    <hr />
                                    <div className='row' style={{ fontSize: '13px' }} >
                                        <Corevalues
                                            title='Integrity'
                                            mainContent='We uphold honesty, transparency, and ethics in every interaction and service we provide. Our customers trust us because we consistently prioritize their best interests and adhere to the highest standards of professionalism'
                                        />
                                        <Corevalues
                                            title='Compassion'
                                            mainContent='Healthcare is deeply personal, and we understand the importance of empathy in every situation. Our team is dedicated to providing care with genuine understanding and respect for the unique challenges faced by our customers'
                                        />
                                        <Corevalues
                                            title='Quality'
                                            mainContent='Excellence is at the core of everything we do. From sourcing the best healthcare products to delivering superior customer service, we ensure that our customers receive only the highest quality solutions to meet their health needs'
                                        />
                                        <Corevalues
                                            title='Innovation'
                                            mainContent='We embrace the power of technology and forward-thinking approaches to enhance the customer experience. Whether through streamlined online ordering, advanced health consultations, or efficient pharmacy practices, we are committed to staying ahead of the curve.'
                                        />
                                    </div>
                                    <hr />
                                    <div style={{ textAlign: 'justify' }}>
                                        At Global Link Pharmacy, our mission, vision, and values are more than just statements—they are the foundation of our promise to you. With us, you can expect a trusted partner in health, dedicated to
                                        meeting your needs with integrity, compassion, quality, and innovation.
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex' style={{paddingTop:'150px',justifyContent:"center", alignContent:'center', alignItems:"center"}}>
                                <div className=''>
                                    <div className='text-center'>
                                        <h5 className='text-uppercase'>meet our team</h5>
                                        <div className='fs-2'>
                                        We talk a lot about hope and teamwork
                                        </div>
                                    </div>
                                    <div className='row'>
                                        {founderData.map(e => <FounderComp name={e.name} image={e.image} links={e.links} title={e.title} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS