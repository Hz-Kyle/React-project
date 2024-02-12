import React from 'react'
import { ProductList } from '../ProductList';
import ProductCard from '../components/productCards/ProductCard';
const Favourite = () => {

  return (
    <>
    <div className="max-w-7xl  mx-auto mt-10 overflow-hidden">
      <h2 className='font-robotoSlap text-7xl text-center mb-32'>Favourite</h2>
      <div className='grid grid-cols-3 gap-5'>
      {ProductList.filter((product) => product.favourite == true).map((productList) =>
        <ProductCard key={productList.id}  
        id={productList.id} name={productList.name}
        price={productList.price} 
         img={productList.img}
         stock={productList.stock} 
         fav={productList.favourite}/>
      
      )}
      </div>
    </div>
     
    
    </>
  )
}

export default Favourite