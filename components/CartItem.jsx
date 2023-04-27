import { FaTrash } from 'react-icons/fa'
const CartItem = () => {
    return (
        <div className="flex items-center justify-between bg-gray-100 py-4 rounded-lg mr-32 px-10">
            <div>
                <img className='w-24' src="/iphone.png" alt="prod img" />
            </div>
            <div className='review-details'>
                <h2>iPhone 14 Pro max</h2>
                <p>Price: $1999</p>
            </div>
            {/* <p className='quantity'>Quantity: {product.quantity}</p> */}
            <button onClick={() => handleRemove(product.id)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem