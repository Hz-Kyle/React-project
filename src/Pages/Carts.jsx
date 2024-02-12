import React, { useState } from 'react'

const Carts = () => {
  const [count,setCount]=useState(1)
  const decreaseHandler=()=>{
    count > 1 && setCount(count-1)
  }
  const increaseHandler=()=>{
    setCount(count+1)
  }
  return (
    <>
    <div className="m-auto">
      <h1 className="text-center font-bold text-3xl mt-5">Cart List</h1>
      <table className="table-fixed m-auto mt-3">
        <thead className="border-b-4 border-gray-500">
          <tr>
            <th className="text-lg">Item</th>
            <th className="pl-36 text-lg text-center">Price</th>
            <th className="pl-36 text-lg text-center">Quantity</th>
            <th className="pl-36 text-lg text-center">Subtotal</th>
            <th className="pl-36 text-lg text-center">Cancel</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-gray-500">
            <td className="w-16 h-20"><img src="https://i.pinimg.com/564x/d8/84/f3/d884f3f2961ce18215dbb67d6cafb5fa.jpg"/></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 pt-6 flex justify-between gap-8 items-center">
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={decreaseHandler}>-</button>
              <p>{count}</p>
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={increaseHandler}>+</button></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 text-center"><svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg></td>
          </tr>
          <tr className="border-b-2 border-gray-500">
            <td className="w-16 h-20"><img src="https://i.pinimg.com/564x/d8/84/f3/d884f3f2961ce18215dbb67d6cafb5fa.jpg"/></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 pt-6 flex justify-between gap-8 items-center">
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={decreaseHandler}>-</button>
              <p>{count}</p>
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={increaseHandler}>+</button></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 text-center"><svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg></td>
          </tr>
          <tr className="border-b-2 border-gray-500">
            <td className="w-16 h-20"><img src="https://i.pinimg.com/564x/d8/84/f3/d884f3f2961ce18215dbb67d6cafb5fa.jpg"/></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 pt-6 flex justify-between gap-8 items-center">
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={decreaseHandler}>-</button>
              <p>{count}</p>
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={increaseHandler}>+</button></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 text-center"><svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg></td>
          </tr>
          <tr className="border-b-2 border-gray-500">
            <td className="w-16 h-20"><img src="https://i.pinimg.com/564x/d8/84/f3/d884f3f2961ce18215dbb67d6cafb5fa.jpg"/></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 pt-6 flex justify-between gap-8 items-center">
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={decreaseHandler}>-</button>
              <p>{count}</p>
              <button type="button" className="bg-blue-600 w-5 font-bold text-xl text-center text-white" onClick={increaseHandler}>+</button></td>
            <td className="pl-36 text-center">$15</td>
            <td className="pl-36 text-center"><svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg></td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
              <td className="font-bold text-xl text-center">Total</td>
              <td></td>
              <td></td>
              <td className="font-bold text-xl text-center pl-36">$60</td>
            </tr>
        </tfoot>
      </table>
    </div>
      <div className="flex justify-around mt-14">
          <button type="button" className="bg-blue-600 rounded-2xl w-28 h-8 text-white">Buy Now</button>
          <button type="button" className="bg-blue-600 rounded-2xl w-28 h-8 text-white">Remove All</button>
      </div>
      </>
  )
}

export default Carts