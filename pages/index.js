import Layout from "@/components";
import Category from "@/components/Category";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import categories from "@/data/categories";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  console.log(products)
  return (
    <div>
      <HeroSection />
      <Layout>
        <div className="my-20">
          <h3 className="font-semibold text-xl">Explore Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
            {
              categories.map(category => <Category key={category.id} category={category} />)
            }
          </div>
          <div className="my-32">
            <h1 className="mb-5 bg-clip-text text-transparent bg-gradient-to-tr to-teal-400 from-indigo-600 text-xl md:text-3xl font-bold text-center">Awesome Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
              {
                products.map(product => <ProductCard key={product.id} product={product} />)
              }
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
