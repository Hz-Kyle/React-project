import React from 'react'
import { ProductList } from '../../ProductList';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import ProductCard from '../productCards/ProductCard';
function RandomProduct() {
    // Generate 3 unique random indices within the range of ProductList
    const randomIndices = [];
    while (randomIndices.length < 3) {
        const randomIndex = Math.floor(Math.random() * ProductList.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Retrieve the corresponding random products
    const randomProducts = randomIndices.map(index => ProductList[index]);

    return (
        <>
            <div className='grid grid-cols-3 gap-4'>
                {randomProducts.map((product) =>
                    <ProductCard key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        img={product.img}
                        stock={product.stock}
                        fav={product.fav} />
                )}
            </div>


        </>
        //   <div>
        //     <h2>Random Products</h2>
        //     {randomProducts.map(product => (
        //       <div key={product.id}>
        //         <img src={product.img} alt={product.name} />
        //         <h3>{product.name}</h3>
        //         <p>Price: {product.price}</p>
        //         {/* Add more details as needed */}
        //       </div>
        //     ))}
        //   </div>
    );
}

export default RandomProduct;