import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCards/ProductCard'
import { ProductList } from '../ProductList'
const Products = () => {
  const [selectedOption, setSelectedOption] = useState("3");
  const handleSelectedChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <>
      <div className="container mx-auto mt-10 grid grid-flow-col  ">
        <div className="row-span-2 mr-10  ">
          <div className='w-64 mx-auto shadow p-5 font'>
            <ul className='font-inter'>
              <li className='relative border-gray-950 p-2 border-b mb-3 '>All Categories <span className='absolute right-0'>+</span></li>
              <li className='relative border-gray-950 p-2 border-b mb-3 '>Hot Items<span className='absolute right-0'>+</span></li>
              <li className=' relative border-gray-950 p-2 border-b mb-3 '>Laptop Accessories<span className='absolute right-0'>+</span></li>
              <li className=' relative border-gray-950 p-2 border-b mb-3 '>Desktop Accessories<span className='absolute right-0'>+</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='mb-5 flex justify-between p-5'>
            <div className=' '>
              <h3 className='font-bold uppercase text-2xl'>All Categories</h3>
              </div>
            <div className=' '>
              <select value={selectedOption} onChange={handleSelectedChange} className=' border  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
               block  p-2.5 ' id="">
                <option value="default">Sorted By</option>
                <option value="3" selected>3 blocks</option>
                <option value="4">4 blocks</option>
              </select>
            </div>
          </div>
          <div className={`grid grid-cols-3 gap-5 ${selectedOption === "4" ? "lg:grid-cols-4 sm:grid-cols-2 gap-5" : "lg:grid-cols-3"}`}>
            {/*card display for products*/}
            {ProductList.map((product) =>
              <ProductCard key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                stock={product.stock}
                fav={product.fav} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products