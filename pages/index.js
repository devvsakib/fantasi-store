import Layout from "@/components";
import Category from "@/components/Category";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const categories = [
    {
      id: 1,
      brand: "Samsung",
      image: "/samsung.png"
    },
    {
      id: 2,
      brand: "Apple",
      image: "/iphone.png"
    },
    {
      id: 3,
      brand: "Realme",
      image: "/realme.png"
    },
    {
      id: 4,
      brand: "Oppo",
      image: "/oppo.png"
    }
  ]
  return (
    <div>
      <HeroSection />
      <Layout>
        <div className="my-20">
          <h3 className="font-semibold text-xl">Explore Brands</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5">
            {
              categories.map(category => (
                <Category key={category.id} category={category} />
              ))
            }
          </div>
        </div>
      </Layout>
    </div>
  )
}
