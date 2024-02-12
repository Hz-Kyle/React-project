import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [username,SetUsername] = useState("")
  const [phone,SetPhone] = useState("")
  const [email,SetEmail] = useState("")
  const [password,SetPassword] = useState("")
  const [confirmpassword,SetConfirmPassword] = useState("")

  const submitHandler = (e) =>{
    console.log(`Username: ${username} Phone:${phone} Email:${email} Password:${password} Confirm Password:${confirmpassword}`)
    e.preventDefault();
  }
    return (
    <>
      <div className='mb-6 w-auto flex flex-wrap justify-center mt-10 m-auto'>
        <div className='w-96 bg-slate-50'><img src="https://cdni.iconscout.com/illustration/premium/thumb/online-sign-up-4489361-3723268.png" alt="signup" className='mt-36' />
        </div>

        <div className='bg-blue-300 w-96'>
          <div className='w-80 flex m-auto mt-8 '>
            <h1 className='font-robotoSlap text-center justify-center text-4xl mb-5 m-auto text-primary'>Sign Up</h1>
            <svg class="h-8 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </div>
          <div className='w-32 flex flex-wrap gap-3 m-auto  '>
            <svg className="h-8 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            <svg className="  h-8 w-6 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
            <svg className=" h-8 w-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
          </div>
          <div className='flex items-center justify-center'>
            <form className="w-full max-w-sm shadow p-5" onSubmit={submitHandler}>
              <div className="md:flex md:items-center mb-6">

                <div className="w-full relative">
                  <svg className=" absolute mt-2 ml-1 text-black" width="20" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                  <input className="bg-gray-100 font-inter  appearance-none border-2 border-gray-200 rounded w-full py-3 px-9 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='User Name' value={username} 
                  onChange={(event)=>{
                      SetUsername(event.target.value)
                  }} />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">

                <div className="w-full relative">
                  <svg className=" absolute mt-2 ml-1 text-black" width="20" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                  <input className="bg-gray-100  font-inter appearance-none border-2 border-gray-200 rounded w-full py-3 px-9 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder='Phone Number' value={phone} 
                  onChange={(event)=>{
                    SetPhone(event.target.value);
                  }} />

                </div>
              </div>

              <div className="md:flex md:items-center mb-6">

                <div className="w-full relative">
                  <svg className="absolute mt-3 ml-1 text-black" width="20" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                  <input className="bg-gray-100 font-inter  appearance-none border-2 border-gray-200 rounded w-full py-3 px-9 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Email Address' value={email} 
                  onChange={(event)=>{
                    SetEmail(event.target.value);
                  }}/>
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">

                <div className="w-full relative">
                  <svg className="absolute mt-3 ml-1 text-black" width="20" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="8 16 10 10 16 8 14 14 8 16" />  <circle cx="12" cy="12" r="9" /></svg>
                  <input className="bg-gray-100 font-inter  appearance-none border-2 border-gray-200 rounded w-full py-3 px-9 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" placeholder='Password' value={password}
                  onChange={(event)=>{
                    SetPassword(event.target.value);
                  }} />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">

                <div className="w-full relative">
                  <svg className="absolute mt-3 ml-1 text-black" width="20" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="8 16 10 10 16 8 14 14 8 16" />  <circle cx="12" cy="12" r="9" /></svg>
                  <input className="bg-gray-100  font-inter appearance-none border-2 border-gray-200 rounded w-full py-3 px-9 text-gray-700  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" placeholder='Confirm Pasword' value={confirmpassword}
                  onChange={(event)=>{
                    SetConfirmPassword(event.target.value);
                  }} />
                </div>
              </div>
              <div className="md:flex md:items-start mb-6 ">
                <div className="w-auto flex">
                  <label className="md:w- block text-gray-500 font-bold">

                    <span className="text-sm w-52 p-4 font-inter">
                      Already hava Account?
                    </span>
                    <span className='text-blue-600 font-robotoSlap'>
                      <Link to="/login">LOGIN NOW</Link>
                    </span>



                  </label>
                </div>

              </div>
              <div className="md:flex md:items-center">

                <div className="w-full font-robotoSlap">
                  <button className="shadow bg-blue-800 font-inter hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-32 rounded-3xl" type="submit">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default SignIn;
