import React from 'react';
import about from '../images/about.png';
import staff1 from '../images/staff1.png';
import staff2 from '../images/staff2.webp';
import staff3 from '../images/staff3.png';
import staff4 from '../images/staff4.png';
import staff5 from '../images/staff5.png';
import staff6 from '../images/staff6.png';
import staff7 from '../images/staff7.png';
import staff8 from '../images/staff8.png';
import staff9 from '../images/staff9.png';
import AboutCard from '../components/aboutCards/AboutCard';


const staffList = [
    {
        id: 1,
        img: staff1,
        name: "Mr. Hpone",
        position: "CEO"
    }
]
const staffList1 = [
    {
        id: 1,
        img: staff2,
        name: "Mr.Mike",
        position: "CFO"
    },
    {
        id: 2,
        img: staff3,
        name: "Mrs.Sue",
        position: "Director"
    },
    {
        id: 3,
        img: staff4,
        name: "Mr.Sam",
        position: "COO"
    }
]
const staffList2 = [
    {
        id: 1,
        img: staff5,
        name: "Mrs.Tracy",
        position: "Technician"
    },
    {
        id: 2,
        img: staff6,
        name: "Mr.Smith",
        position: "Analysist"
    },
    {
        id: 3,
        img: staff7,
        name: "Mr.June",
        position: "Technician"
    },
    {
        id: 4,
        img: staff8,
        name: "Mr.Sam",
        position: "Technician"
    },
    {
        id: 5,
        img: staff9,
        name: "Mr.Smith",
        position: "Technician"
    },

]

const Aboutus = () => {
    return (
        <>
            <div>
                <h1 className='font-robotoSlap text-center justify-center text-4xl mb-5 m-auto'>About Us</h1>
                <p className='flex items-center justify-center font-inter'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid a id ea dolorum beatae dolores. </p>
            </div>
            <div className='mb-6 flex flex-wrap mt-10'>
                <div className='w-2/4 '>
                    <img src={about} alt="signup" className='w-full h-96' />
                </div>
                <div className='w-2/4 bg-primary'>
                    <p className=' font-robotoSlap leading-8 p-8 text-white bg-primary'>Welcome to where innovation meets excellence in the world of IT services. As a leading provider of
                        cutting-edge technological solutions, we pride ourselves on delivering unparalleled expertise to meet the evolving needs of businesses in today's dynamic landscape. Established
                        with a vision to empower enterprises through digital transformation, our team of skilled professionals is dedicated to providing comprehensive IT services tailored to optimize
                        efficiency, enhance security, and foster growth.We have built a consulting network of over 300 successful former C-level IT leaders, from which we choose the best fit for each client’s
                        needs and tech vision based on technical expertise and industry experience.</p>
                </div>
            </div>
            <div>
                <h1 className='font-robotoSlap text-center justify-center text-4xl mb-2 mt-10 m-auto'>Team Members</h1>
                <p className='flex items-center justify-center font-inter'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid a id ea dolorum beatae dolores. </p>
            </div>
            <div className=' '>
                <div className='w-auto flex flex-col items-center justify-center staffs'>
                    <div className=" flex flex-col items-center justify-center key={staffs.id} ">
                        {
                            staffList.map((staff) =>
                                <AboutCard id={staff.id} img={staff.img} position={staff.position} name={staff.name} />
                            )
                        }
                    </div>
                    <div className="grid grid-cols-3 gap-2 key={staffs.id} ">
                        {
                            staffList1.map((staff) =>
                                <AboutCard id={staff.id} img={staff.img} position={staff.position} name={staff.name} />
                            )
                        }
                    </div>
                    <div className="grid grid-cols-5 gap-2 key={staffs.id} ">
                        {
                            staffList2.map((staff) =>
                                <AboutCard id={staff.id} img={staff.img} position={staff.position} name={staff.name} />
                            )
                        }
                    </div>



                </div>

            </div>
        </>
            );
 }

export default Aboutus;

