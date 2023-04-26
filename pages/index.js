import Layout from "@/components";
import Category from "@/components/Category";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const fetchData = async () => {
    try {
      const productResponse = await axios.get('http://localhost:5000');
      const categoryResponse = await axios.get('http://localhost:5000/categories');

      setProducts(productResponse.data);
      setCategories(categoryResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products)
  return (
    <div>
      <HeroSection />
      <Layout>
        <div className="my-20">
          <h3 className="font-semibold text-xl">Explore Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
            {
              categories?.map(category => <Category key={category.id} category={category} />)
            }
          </div>
          <div className="my-32">
            <h1 className="mb-5 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center">Awesome Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
              {
                products.map((product, idx) => <ProductCard key={idx} product={product} />)
              }
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
