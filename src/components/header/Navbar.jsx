import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto">

                <div className=' w-1440 flex justify-around items-center border-b p-5 mt-1 '>

                    <div className=' w-full flex justify-around items-center border-b p-5 mt-1 bg'>

                        <h1 className='text-3xl text-center items-center font-stardos'>Metro</h1>
                        <section className=''>
                            <nav className=''>
                                <ul className='flex gap-10 items-center font-muli'>
                                    <li className='' ><Link to="/">Home</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/aboutus">About Us</Link></li>
                                    <li><Link to="/cart">Cart</Link></li>
                                    <li><Link to="/favourite">Favourite</Link></li>
                                    <li><Link to="/signup">SignUp</Link></li>
                                    <li><Link to="/feedback">Feedback</Link></li>
                                    <li><Link to="/login">Login</Link></li>

                                    <div className="relative">
                                        <div className="absolute inset-y-0 end- flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full rounded-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500
                                 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
                                    </div>
                                </ul>
                            </nav>
                        </section>
                    </div>
                </div>
            </div>
         </>
            
        )
}
export default Navbar