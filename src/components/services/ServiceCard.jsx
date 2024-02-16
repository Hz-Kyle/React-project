import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({name,img,Text}) => {
    const navigate = useNavigate();

        const seeHandler = () => {
            navigate("/Products")
        }
  return (
        <>
             <div className="ml-36 mt-10 w-1271 h-394 bg-blue-200 rounded-md shadow-md flex">
                <div>
                    <img src={img} alt="service image" className='h-394' />
                </div>
                <div>
                    <h3 className='text-4xl font-robotoSlap mt-5 ml-20'>{name}</h3>
                    <p className='w-580 h-140 font-muli mt-12'>{Text}</p>


                    <button className="relative w-227 h-74  bg-blue-500 text-white rounded-full px-9 flex items-center justify-center mt-20 ml-80"  type='button' onClick={seeHandler}>
                        See more
                        <svg className="absolute right-0 mr-4 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8.293 16.707a1 1 0 0 1-1.414-1.414L12.586 10 6.88 4.293a1 1 0 1 1 1.414-1.414l6.999 6.999a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-.707.293z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
  )
}

export default ServiceCard