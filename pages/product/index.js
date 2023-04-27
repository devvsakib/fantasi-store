import Layout from '@/components'
import ProductCard from '@/components/ProductCard'
import api from '@/lib/API'
import  { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            setLoading(true);
            const productResponse = await api.get('/');
            setProducts(productResponse.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
        <Layout>
            <div className="grid grid-cols-1 my-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    products.map((product, idx) => <ProductCard key={idx} product={product} />)
                }
            </div>
        </Layout>
        </div>
    )
}

export default Product