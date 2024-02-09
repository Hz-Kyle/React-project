import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <div className="container">
                
            </div>
            <div className='w-full bg-black text-gray-400  p-14 grid grid-cols-4 mt-36 font-muli  gap-5'>
                <div className='hover:text-white transition-colors duration-300'>
                    <h2 className='text-3xl mb-3'>Metro</h2>
                    <p className='text-base'>Metro is a Contemporary Creative
                        Portfolio theme which can be used
                        for any digital or creative agency.</p>
                </div>
                <div className='hover:text-white transition-colors duration-300'>
                    <h2 className='text-3xl mb-3'>Our Service</h2>
                    <div className=''>
                        <p>Software installation</p>
                        <p>Desktop setup</p>
                        <p>Terms of Services</p>
                    </div>
                </div>
                <div className='hover:text-white transition-colors duration-300'>
                    <h2 className='text-3xl mb-3'>Our Company</h2>
                    <div className=''>
                        <p>Reporting</p>
                        <p>Get in Touch</p>
                        <p>Management</p>
                    </div>

                </div>
                <div className='hover:text-white transition-colors duration-300'>
                    <h2 className='text-3xl mb-3'>Contact Info</h2>
                    <div className=''>
                        <p>121 Ling St. melbourne VIC 3000,Australia</p>
                        <p>(BBB)-123-45678</p>
                        <p>Info@xample.com</p>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Footer