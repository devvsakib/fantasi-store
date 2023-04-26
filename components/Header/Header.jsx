import Link from "next/link"
import Layout from ".."
import ActiveLink from "./ActiveLink.jsx"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)
    return (
        <div className="shadow-xl bg-gray-800 text-white py-2">
            <Layout>
                <div className="navbar flex justify-between bg-base-100">
                    <div className="navbar-start">
                        {/* Mobile */}
                        {
                            open && <div className="absolute top-16 b bg-base-100 p-5 rounded-lg shadow-xl shadow-[#08A5EB]/20 w-[90%] block md:hidden bg-gray-800">
                                <ul className="menu grid rounded-box w-[100%]">
                                    <ActiveLink href={"/"}>
                                        <li className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700">
                                            Home
                                        </li>
                                    </ActiveLink>
                                    <ActiveLink href={"/cart"}>
                                        <li className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700">
                                            Cart
                                        </li>
                                    </ActiveLink>
                                    <ActiveLink href={"/login"}>
                                        <li className="p-3 rounded-md cursor-pointer px-5 hover:bg-slate-700">
                                            Login
                                        </li>
                                    </ActiveLink>
                                    {/* <li><Link href={"/admin"}>Admin</Link></li> */}
                                </ul>
                            </div>
                        }
                        <div className="flex gap-2 items-center">
                            <img className="w-24" src="/logo.png" alt="" />
                        </div>
                    </div>
                    {/* Desktop Navbar */}
                    <div className="navbar-center items-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-10">
                            <li><ActiveLink href={"/"}>Home</ActiveLink></li>
                            <li><ActiveLink href={"/cart"}>Cart</ActiveLink></li>
                            <li><ActiveLink href={"/login"}>Login</ActiveLink></li>
                            {/* <li><Link href={"/admin"}>Admin</Link></li> */}
                        </ul>
                    </div>
                    <button onClick={handleOpen} className="btn btn-ghost md:hidden ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                </div>
            </Layout>
        </div>
    )
}

export default Header