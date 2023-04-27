import Layout from '@/components';
import { CartContext } from '@/context/CartProvider';
import api from '@/lib/API';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const ProductDetail = () => {
    const router = useRouter();
    const { cartItems, addToCart } = useContext(CartContext);
    const { slug } = router.query;
    const [product, setProduct] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            await api.get(`/product/${slug}`)
                .then(res => setProduct(res.data))
                .catch(err => console.log(err.message))
        }
        fetchData()

    }, [slug])
    const handleAddToCart = (product) => {
        addToCart(product);
        console.log(cartItems);
    }

    return (
        <div className='my-32'>
            <Layout>
                <h1 className='mb-5 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center'>{product?.model}</h1>
                <div className='my-5 mt-10 grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <img
                            src={product?.image}
                            alt={product?.model}
                            className='mx-auto'
                        />
                    </div>
                    <div className='mx-auto w-3/12 mt-5 col-span-2 flex flex-col gap-5'>
                        <p><b>Brand:</b> ${product?.brand}</p>
                        <p><b>Price:</b> ${product?.price}</p>
                        <p><b>In Stock:</b> {product?.available ? "Yes" : "No"}</p>
                        <button onClick={() => handleAddToCart(product)} className='btn-primary'>Add To Cart</button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ProductDetail