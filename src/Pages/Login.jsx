import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const submitHandler = (event) => {

        event.preventDefault();

    }

    const passwordHandler = (event) => {
        SetPassword(event.target.value)
    }
    return (


        <>
            <div className='mb-6 w-auto flex flex-wrap justify-center mt-10 '>
                <div className='w-96 bg-slate-50 '><img src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png" alt="signup" />
                </div>

                <div className='bg-blue-300 w-96'>
                    <div className='w-80 flex m-auto mt-4'>
                        <h1 className='font-semibold text-center justify-center text-4xl mb-5 m-auto text-primary font-robotoSlap'>LOGIN</h1>
                        <svg class="h-8 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
                    </div>
                    <div className='w-32 flex flex-wrap gap-3  m-auto'>
                        <svg className="h-8 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        <svg className="  h-8 w-6 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
                        <svg className=" h-8 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                    </div>
                    <div className='flex items-center justify-center'>
                        <form className="w-full max-w-sm p-5" onSubmit={submitHandler}>
                            <div className="md:flex md:items-center mb-6">
                                {/* <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    UserName
                  </label>
                </div> */}
                                <div className="w-full relative">
                                    <div className='w-1/4 mt-2 ml-1 absolute'>
                                        <svg className="  text-black" width="20" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                                    </div>

                                    <input className="bg-gray-100 font-inter appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Email Address' value={email}
                                        onChange={(event) => {
                                            SetEmail(event.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">

                                <div className="w-full relative">
                                    <div className='w-1/4 mt-2 ml-1 absolute'>
                                        <svg className=" text-black" width="20" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="8 16 10 10 16 8 14 14 8 16" />  <circle cx="12" cy="12" r="9" /></svg>
                                    </div>
                                    <input className="bg-gray-100 font-inter appearance-none border-2 border-gray-200 rounded w-full py-2 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder='Password' value={password}
                                        onChange={passwordHandler}
                                    />
                                </div>
                            </div>
                            <div className="md:flex md:items-start mb-6 w-auto gap-24">
                                <div className="">
                                    <label className="md:w- block text-gray-500 font-bold">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-sm font-inter">
                                            Remember me?
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    <label className="md:w- block text-gray-500 font-bold">
                                        {/* <input className="mr-2 leading-tight" type="checkbox" /> */}
                                        <span className="text-sm font-inter">
                                            Forget Password?
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                
                                <div className="w-full m-auto">
                                    <button className="shadow bg-blue-800 hover:bg-blue-600 font-inter focus:shadow-outline focus:outline-none text-white font-bold py-2 px-36 rounded-3xl" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex md:items-start mt-11 ">
                                <div className="w-auto flex">
                                    <label className="md:w- block text-gray-500 font-bold">

                                        <span className="text-sm w-52 p-2 font-inter">
                                            Create New Account
                                        </span>
                                        <span className='text-blue-600 ml-12 font-robotoSlap'>
                                            <Link to="/signup">SIGN UP NOW</Link>
                                        </span>



                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Login;
