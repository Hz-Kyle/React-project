import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../ProductList';
import RandomProduct from '../components/randomProduct/RandomProduct';
const ProductDetail = () => {

  const { id } = useParams();
  // Find the product with the matching ID
  const product = ProductList.find(product => product.id === parseInt(id));
  // console.log(product);
  const objLength = Object.keys(product).length;
  // console.log(objLength);
  //random Product list at the bottom


  return (
    <>

      <div className="overflow-hidden bg-white py-11 font-inter ">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="">
                <div className="mb-6 lg:mb-10 lg:h-2/4 ">
                  <img src={product.img} alt=""
                    className="object-cover w-full lg:h-full " />
                </div>
                <div className="flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      classNameName="  block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                      <img src={product.img} alt=""
                        className="object-cover w-full lg:h-20" />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                      <img src={product.img} alt=""
                        className="object-cover w-full lg:h-20" />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                      <img src={product.img} alt=""
                        className=" object-cover w-full lg:h-20" />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                      <img src={product.img} alt=""
                        className="object-cover w-full lg:h-20" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="mb-8 font-muli ">
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold font-robotoSlap dark:text-gray-400 md:text-4xl">
                    {product.name}</h2>
                  {product.description && <p className='max-w-md mb-8 text-gray-700 dark:text-gray-400'><b>Product Description </b> : {product.description}</p>}

                  <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span>Price : ${product.price}</span>

                  </p>
                  {objLength == 7 ? "" : <div>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>Model Name :</b> {product.modelName}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>CPU :</b> {product.cpu}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>Memory :</b> {product.memory}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>Operation System :</b> {product.os}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>Graphic :</b> {product.graphic}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>graphicCoprocessor:</b> {product.graphicCoprocessor}</p>
                    <p className='text-gray-700 my-1 dark:text-gray-400'><b>Hdd :</b> {product.hdd}</p>

                    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-400">About This Product:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside  dark:text-gray-400">
                      <li>
                        {product.about.one}
                      </li>
                      <li>
                        {product.about.two}
                      </li>
                      <li>
                        {product.about.three}
                      </li>
                      <li>
                        {product.about.four}
                      </li>
                      <li>
                        {product.about.five}
                      </li>
                    </ul>
                  </div>}

                  <p className="my-2 text-green-400 dark:text-green-300">{product.stock} in stock</p>


                </div>



                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4  lg:mb-0">
                    <button
                      className="flex items-center justify-center w-full p-4  border border-primary bg-primary text-white rounded-md">
                      Add to Cart
                    </button>
                  </div>

                </div>
              </div>
            </div>

            <div className='w-full mt-40'>
              <h3 className='font-text-2xl mb-20'>You Might Also Like </h3>
              <RandomProduct />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default ProductDetail