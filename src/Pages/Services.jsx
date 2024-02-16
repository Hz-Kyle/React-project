import React from 'react'
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/services/ServiceCard';
import { serviceItem } from '../service';


const Services = ({ name,img,Text }) => {
  

    return (
        <>
            <div className='mt-5'>

                <h2 className='text-5xl font-robotoSlap ml-36'>Services</h2>
                <p className='mt-4 font-muli  ml-36'> These are services thay you can get when you buy accessories from us.</p>

            </div>


            <div>
            {
                        serviceItem.map((item) =>
                            <ServiceCard key={item.id} name={item.name}  img={item.img} Text={item.Text} />
                        )
                    }
            </div>
        </>

    )
}

export default Services