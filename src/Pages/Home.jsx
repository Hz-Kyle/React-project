import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeCard from '../components/home/HomeCard'
import { feeBack, hotItem } from '../home'
import { catItem } from '../home';
import HomeFeedBack from '../components/home/HomeFeedBack';

const Home = () => {

    const navigate = useNavigate();

    
    const feedHandler = () => {
        navigate("/Feedback")
    }


    return (
        <>
            <div className='mt-5 ml-36 font-robotoSlap text-5xl'>
                <h2>Hot Items</h2>
            </div>
            <div className='container mx-auto flex gap-40 mt-20'>
                <div className="grid grid-cols-3">
                    {
                        hotItem.map((item) =>
                            <HomeCard key={item.id} name={item.name} price={item.price} img={item.img} />
                        )
                    }
                </div>
            </div>
            {/* categories */}
            <div className='mt-5 items-center justify-center text-center font-robotoSlap text-5xl'>
                <h2>Categories</h2>
            </div>

            <div className='container mx-auto flex gap-40 mt-20'>
                <div className="grid grid-cols-3">
                    {
                        catItem.map((item) =>
                            <HomeCard key={item.id} name={item.name} price={item.price} img={item.img} />
                        )
                    }
                </div>
            </div>

            {/* Feedback */}

            <div>
                <h2 className='text-5xl font-robotoSlap items-center text-center mt-10'>Customer Feedback</h2>

                <div className='max-w-6xl mx-auto'>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        <li>
                           
                                {
                                    feeBack.map((feedd) =>
                                        <HomeFeedBack key={feedd.id} name={feedd.name} img={feedd.img} Text={feedd.Text} />
                                    )
                                }
                            
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