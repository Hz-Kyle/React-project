

import React from 'react';
import about from '../images/about.png';
import staff1 from '../images/staff1.png'

const Aboutus = () => {
    return (
        <>
            <div className='mt-8'>
                <h1 className='font-robotoSlap text-center justify-center text-4xl mb-5 m-auto'>About Us</h1>
                <p className='flex items-center justify-center font-inter'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid a id ea dolorum beatae dolores. </p>
            </div>
            <div className='mb-6 flex flex-wrap mt-10 w-auto bg-primary text-white'>
                <div className='w-2/4 bg-slate-600'><img src={about} alt="signup" className='h-96 bg-cover w-full' />
                </div>
                <div className='w-2/4 p-10'>
                    <p className=' font-muli  leading-8 '>Welcome to where innovation meets excellence in the world of IT services. As a leading provider of
                        cutting-edge technological solutions, we pride ourselves on delivering unparalleled expertise to meet the evolving needs of businesses in today's dynamic landscape. Established
                        with a vision to empower enterprises through digital transformation, our team of skilled professionals is dedicated to providing comprehensive IT services tailored to optimize
                        efficiency, enhance security, and foster growth.We have built a consulting network of over 300 successful former C-level IT leaders, from which we choose the best fit for each client's
                        needs and tech vision based on technical expertise and industry experience.</p>
                </div>
            </div>
            <div>
                <h1 className='font-robotoSlap text-center justify-center text-4xl mb-5 mt-16 m-auto'>Team Members</h1>
                <p className='flex items-center justify-center font-inter'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid a id ea dolorum beatae dolores. </p>
            </div>
            <div className='w-auto flex items-center justify-center ml-48'>
                <div className="grid grid-cols-6 gap-2 ">

                    <div className="col-start-3 col-end-4 ... w-auto p-6 relative flex justify-around">
                    <img src={staff1} alt="profile" className='w-28 absolute ' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>CEO</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Hpone</p>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-3 ...  w-auto p-6 relative flex justify-around">
                    <img src="https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png" alt="profile" className='w-28  m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap '>CFO</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Jame</p>
                        </div>
                        </div>
                    <div className="col-start-3 col-end-4 ... w-auto p-6 relative flex justify-around ">
                    <img src="https://www.salutonagency.com/wp-content/uploads/2018/12/babs_round_profile.png" alt="profile" className='w-28  m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Director</h3>
                            <p className='items-center justify-center flex font-inter'>Mrs.Tracy</p>
                        </div>
                    </div>
                    <div className="col-start-4 col-end-5 ... w-auto p-6 relative flex justify-around">
                    <img src="https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white text-whitew-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>COO</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Smith</p>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-2 ... w-auto p-6 relative flex justify-around">
                    <img src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Technician</h3>
                            <p className='items-center justify-center flex font-inter'>Mrs.Cxan</p>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-3 ... w-auto p-6 relative flex justify-around">
                    <img src="https://keithrosen.com/wp-content/uploads/2012/09/Keith-Rosen-Profile-Pic-Rounded-Transparent.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Analyst</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Mike</p>
                        </div>
                    </div>
                    <div className="col-start-3 col-end-4 ... w-auto p-6 relative flex justify-around">
                    <img src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Technician</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Fourth</p>
                        </div>
                    </div>
                    <div className="col-start-4 col-end-5 ... w-auto p-6 relative flex justify-around">
                    <img src="https://sejapregador.com/wp-content/uploads/2018/11/profile-picture-round-10.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Technician</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Hpone</p>
                        </div>
                    </div>
                    <div className="col-start-5 col-end-6 ... w-auto p-6 relative flex justify-around ">
                    <img src="https://www.monkeypodmarketing.com/wp-content/uploads/2015/11/profile-round.png" alt="profile" className='w-28 m-auto absolute' />
                        <div className='bg-primary text-white w-auto p-16 mt-16 rounded-md  '>
                        
                            <h3 className='items-center justify-center flex font-robotoSlap'>Technician</h3>
                            <p className='items-center justify-center flex font-inter'>Mr.Sam</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Aboutus;

