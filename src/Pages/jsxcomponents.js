import { FaCheckDouble } from "react-icons/fa";

export const Testimonials = ({name, info,image}) => {
    return (
        <>
            <div className='col-md-3 col-12 py-4' >
                <div className='bg-secondary rounded' style={{ height: '150px', overflow:"hidden" }}>
                    <img src={image} width='100%' />
                </div>
                <div>
                    <div className='p-2'>{name}</div>
                    <div className='p-2' style={{ fontSize: '12px' }}>
                        {info.substring(0, 200) + '...read more'}
                    </div>
                </div>
            </div>
        </>
    )
}

export const MissionsVisetc = ({title, content1, mainContent}) => {
    return (
        <>
            <div className='col-12 col-md-6 p-3'>
                <div className='border p-3 border-success bg-seci text-center rounded-3' style={{ alignContent: 'center' }}>
                    <div className='h2'>{title}</div>
                    <div style={{fontSize:'12px'}} className="py-1">
                        <i>
                        "{content1}"
                        </i>
                    </div><div style={{fontSize:'13px'}}>
                        {mainContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export const Corevalues = ({title, content1, mainContent}) => {
    return (
        <>
            <div className='col-12 col-md-3 p-3'>
                <div className='border border-4 p-3 bg-success bg-seci text-center rounded-3' style={{ alignContent: 'center' }}>
                    <div className='h2'>{title}</div>
                    <div style={{fontSize:'12px'}} className="py-1">
                    </div>
                    <div style={{fontSize:'11px' , textAlign:'justify'}}>
                        {mainContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export const FounderComp = ({image, name, title, links})=>{
    return(
        <>
        <div className="col-6 col-md-3">
            <div className="text-center p-4" >
                <div className="d-flex my-4" style={{justifyContent:'center', alignContent:"center", alignItems:'center'}}>
                    <div style={{borderRadius:'50%', width:'150px', height:'150px', overflow:'hidden'}}>
                        <img src={image}  width='100%'/>
                    </div>
                </div>
                <div className="h6">
                    {name}
                </div>
                <div style={{fontSize:'13px'}}>
                    {title}
                </div>
                <div>
                    {/* {links} */}
                </div>
            </div>
        </div>
        </>
    )
}

export const WhyChooseUs = ({data}) => {
    return (
        <>
        <div className="d-flex" style={{alignItems:"center", gap:20}}>
                <div>
                    <FaCheckDouble className="text-success" size={30} />
                </div>
                <div style={{ fontSize: '15px', paddingBlock: '7px' }}>
                    {data}
            </div>
        </div>
        </>
    )
}