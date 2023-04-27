import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex flex-col justify-center ">
        <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
        <Link href={`/product/${product?.slug}`}>
        <h2>{product.model}</h2>
        </Link>
      </div>
      <div className="flex justify-between mt-5">
        <h2 className="font-semibold text-xl">${product.price}</h2>
      </div>
    </div>
  )
}

export default ProductCard