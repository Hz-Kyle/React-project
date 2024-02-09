import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <Link to={"/productDetail/1"}>See More</Link>
      </div>
    </>
  )
}

export default Products