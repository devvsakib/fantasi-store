import { CartContext } from '@/context/CartProvider'
import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(CartContext)
    return (
        <div className="flex items-center justify-between bg-gray-100 py-4 rounded-lg mr-32 px-10">
            <div>
                <img className='w-24' src={item?.image} alt="prod img" />
            </div>
            <div className='review-details'>
                <h2>{item?.model}</h2>
                <p>Price: ${item?.price}</p>
            </div>
            {/* <p className='quantity'>Quantity: {product.quantity}</p> */}
            <button onClick={() => removeFromCart(item.slug)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem