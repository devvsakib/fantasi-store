import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    const [openMenu, setOpenMenu] = useState(true);

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            setCategories(data);
        }
        getCategories();
    }, [])


    return (
        <div className="mb-10">
            <div className="flex gap-5 items-center">
                <h2 className="font-semibold text-lg">All Caterogy</h2>
                <button className="md:hidden" onClick={e => setOpenMenu(!openMenu)}><FaBars /></button>
            </div>
            <ul className={`mt-2 ${openMenu && "hidden"} md:grid gap-2 font-semibold`}>
                {categories.map((category) => (
                    <Link key={category.id} to={`/category/${category.id}`} onClick={e => setOpenMenu(!openMenu)} >
                        <li className="text-sm text-gray-500 cursor-pointer pl-5 hover:bg-base-200 px-2 py-2 rounded hover:text-gray-800">
                            {category.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default LeftNav