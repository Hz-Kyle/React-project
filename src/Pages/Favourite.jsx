import React from 'react'
import { ProductList } from '../ProductList';
import ProductCard from '../components/productCards/ProductCard';
const Favourite = () => {

  return (
    <>
    <div className="container mx-auto mt-10">
    <div className='grid md:grid-cols-3 gap-4 '>
      {ProductList.filter((product) => product.favourite == true).map((prductList) =>
        <ProductCard key={prductList.id}  
        id={prductList.id} name={prductList.name}
         price={prductList.price} 
         img={prductList.img}
         stock={prductList.stock} />
      
      )}
      </div>
    </div>
     
    
    </>
  )
}

export default Favourite