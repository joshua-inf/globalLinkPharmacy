export const Testimonials = ({name, info}) => {
    return (
        <>
            <div className='col-md-3 col-6 ' >
                <div className='bg-secondary rounded' style={{ height: '150px' }}></div>
                <div>
                    <div className='p-2'>{name}</div>
                    <div className='p-2' style={{ fontSize: '12px' }}>
                        {info.substring(0, 150) + '...'}
                    </div>
                </div>
            </div>
        </>
    )
}