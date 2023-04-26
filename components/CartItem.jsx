import { FaTrash } from 'react-icons/fa'
const CartItem = ({ product, handleRemove }) => {
    console.log(process.env.MY_VAR);
    return (
        <div className="review">
            <div>
                <img src="/iphone.png" alt="prod img" />
            </div>
            <div className='review-details'>
                <h2>iPhone 14 Pro max</h2>
                <p>Price: $1999</p>
            </div>
            {/* <p className='quantity'>Quantity: {product.quantity}</p> */}
            {/* <button onClick={() => handleRemove(product.id)}> */}
            <FaTrash />
            {/* </button> */}
        </div>
    )
}

export default CartItem