import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
    <div className="flex flex-col justify-center ">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
      <h2>{product.model}</h2>
    </div>
    <div className="flex justify-between mt-5">
      <h2 className="font-semibold text-xl">${product.price}</h2>
      <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">Add to cart</button>
    </div>
  </div>
  )
}

export default ProductCard