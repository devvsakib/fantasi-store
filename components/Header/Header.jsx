import Link from 'next/link'
import React from 'react'
import Layout from '..'

const Header = () => {
    return (
        <div className="bg-gray-800 w-full">
            <Layout>
                <div className="flex h-[50px] md:h-[60px]  justify-between items-center  gap-5">
                    <div className='logo'>
                        <Link href={"/"}>
                            <img className='w-24' src="/logo.png" alt="Logo"/>
                        </Link>
                    </div>
                    <ul className="flex gap-5 items-center text-white">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/cart"}>Cart</Link></li>
                        <li><Link href={"/login"}>Login</Link></li>
                        {/* <li><Link href={"/admin"}>Admin</Link></li> */}
                    </ul>
                </div>
            </Layout>
        </div>
    )
}

export default Header