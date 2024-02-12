import React from 'react'
import hot2 from '../images/hot2.png'
import m2 from '../images/m2.png'
import hot3 from '../images/hot3.png'
import fb1 from '../images/fb1.png'
import fb2 from '../images/fb2.png'

import cat1 from '../images/cat1.png'
import cat2 from '../images/cat2.png'
import cat3 from '../images/cat3.png'
import cat4 from '../images/cat4.png'
import cat5 from '../images/cat5.png'
import cat6 from '../images/cat6.png'
import { MdStarRate } from "react-icons/md";
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();

    const viewHandler = () => {
        navigate("/Products")
    }

    const feedHandler = () => {
        navigate("/Feedback")
    }

    return (
        <>
            <div className='mt-5 ml-36 font-robotoSlap text-5xl'>
                <h2>Hot Items</h2>
            </div>
            <div className='container mx-auto flex gap-40 mt-20'>
                <div className="max-w-sm ml-36 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg w-300" src={hot2} alt="" />

                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ram</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$50</p>
                        <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <img className="rounded-t-lg w-300 " src={m2} alt="" />

                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mouse</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$30</p>
                        <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-sm bg-black border mr-40 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg w-300" src={hot3} alt="" />

                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graphic Card</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$200</p>
                        <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>

            {/* categories */}
            <div>
                <div className='mt-5 items-center justify-center text-center font-robotoSlap text-5xl'>
                    <h2>Categories</h2>
                </div>

                <div className='container mx-auto flex gap-40 mt-20'>
                    <div className="max-w-sm ml-36 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-300" src={cat1} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gaming Keyboard</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$50</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <a href="#">
                            <img className="rounded-t-lg w-300 " src={cat2} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mouse</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$30</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-black border mr-40 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-300" src={cat3} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graphic Card</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$200</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto flex gap-40 mt-20'>
                    <div className="max-w-sm ml-36 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-300" src={cat4} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gaming Ram</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$500</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                        <a href="#">
                            <img className="rounded-t-lg w-300 " src={cat5} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mouse</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$300</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="max-w-sm bg-black border mr-40 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-300" src={cat6} alt="" />

                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Normal Keyboard</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$30</p>
                            <button type='button' onClick={viewHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center ml-32 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                 </div>
            </div>




            {/* Feedback */}



            <div>
                <h2 className='text-5xl font-robotoSlap items-center text-center mt-10'>Customer Feedback</h2>

                <div className='max-w-6xl mx-auto'>


                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6 mt-10 ml-36  bg-blue-500 rounded-md shadow-md h-190 w-1010">
                                <img className="h-24 w-24 rounded-full ml-5" src={fb1} alt="" />
                                <div>
                                    <h3 className="text-3xl font-robotoSlap leading-7 tracking-tight text-gray-900">Olivia Rodrigo</h3>
                                    <p className="text-1xl font-muli leading-6 text-gray-950-600">I like this website and the prouct r very nice</p>
                                    <MdStarRate className='text-yellow-400' />
                                 </div>
                            </div>
                        </li>
                    </ul>

                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                            <div className="flex items-center gap-x-6 mt-10 ml-36  bg-blue-500 rounded-md shadow-md h-190 w-1010">
                                <img className="h-24 w-24 rounded-full ml-5" src={fb2} alt="" />
                                <div>
                                    <h3 className="text-3xl font-robotoSlap leading-7 tracking-tight text-gray-900">Tony Stark</h3>
                                    <p className="text-1xl font-muli leading-6 text-gray-950-600">Nice for me dude....</p>
                                    <MdStarRate className='text-yellow-400' />
                                </div>
                            </div>
                        </li>
                    </ul>

                   <div className='flex justify-center items-center mt-5'>
                   <button type='button' onClick={feedHandler} href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                    </button>
                   </div>


                </div>
            </div>

        </>

    )
}

export default Home