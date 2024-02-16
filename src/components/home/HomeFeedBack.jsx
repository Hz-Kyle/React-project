import React from 'react'
import { MdStarRate } from "react-icons/md";


const HomeFeedBack = ({ name, img, Text }) => {
  
    
    return (
        <div>
            <div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6 mt-10 ml-36  bg-blue-500 rounded-md shadow-md h-190 w-1010">
                            <img className="h-24 w-24 rounded-full ml-5" src={img} alt="" />
                            <div>
                                <h3 className="text-3xl font-robotoSlap leading-7 tracking-tight text-gray-900">{name}</h3>
                                <p className="text-1xl font-muli leading-6 text-gray-950-600">{Text}</p>
                                <MdStarRate className='text-yellow-400' />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            

        </div>
    )
}

export default HomeFeedBack