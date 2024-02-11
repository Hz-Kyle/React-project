import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCards/ProductCard'
import { ProductList } from '../ProductList'
const Products = () => {

  return (
    <>
      <div className="mt-10 grid grid-flow-col gap-4 ">
        <div className="row-span-2  ">
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
          <div className='mb-5 grid grid-cols-3'>
            <div className='col-span-2'> <h3 className='font-bold uppercase text-2xl'>All Categories</h3></div>
            <div className='ml-20'>
              <input type="text" className='border p-1 ' placeholder='search ' />
            </div>
          </div>
          <div className='grid md:grid-cols-3 gap-4 '>
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
      <div>
        <Link to={"/productDetail/1"}>See More</Link>
      </div>
    </>
  )
}

export default Products