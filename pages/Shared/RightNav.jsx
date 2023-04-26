import React, { useContext } from 'react'
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import q1 from '/assets/qZone1.png'
import q2 from '/assets/qZone2.png'
import q3 from '/assets/qZone3.png'
import { AuthContext } from '../../context/AuthContext'
const RightNav = () => {
    const { user, logInWithGitHub, logInWithGoogle } = useContext(AuthContext);
    return (
        <div>
            {
                !user && <div className='flex flex-col gap-5'>
                    <h3 className='font-semibold'>Login With</h3>
                    <button onClick={logInWithGoogle} className='flex  items-center border border-blue-500 px-3 py-2 rounded-lg gap-4'><FaGoogle />Login With Goolge</button>
                    <button onClick={logInWithGitHub} className='flex  items-center border border-black px-3 py-2 rounded-lg gap-4'><FaGithub />Login With GitHub</button>
                </div>
            }
            <div className='mt-5'>
                <h3 className='font-semibold'>Find Us On</h3>
                <ul className='grid mt-5'>
                    <li className='py-2 px-3 flex gap-4 items-center border border-1 border-b-0 border-black/40'><FaFacebook /> Facebook</li>
                    <li className='py-2 px-3 flex gap-4 items-center border border-1 border-b-0 border-black/40'><FaTwitter /> Twitter</li>
                    <li className='py-2 px-3 flex gap-4 items-center border border-1 border-black/40 border-b-0'><FaInstagram /> Instagram</li>
                    <li className='py-2 px-3 flex gap-4 items-center border border-1 border-black/40'><FaYoutube /> YouTube</li>
                </ul>
            </div>
            <div className='bg-base-200 px-2 py-4 rounded-md mt-5'>
                <h3 className='font-semibold'>Q-Zone</h3>
                <div>
                    <div>
                        <img src={q1} alt="" />
                    </div>
                    <div>
                        <img src={q2} alt="" />
                    </div>
                    <div>
                        <img src={q3} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-5 py-10 px-5 bg-[url(/assets/bg.png)] text-center text-white'>
                <div className=' px-2 py-4 rounded-md mt-5'>
                    <h2 className='text-4xl font-bold mb-2'>
                        Create an Amazing Newspaper
                    </h2>
                    <p className='text-lg my-5'>
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </p>
                    <button className='bg-[#D72050] py-3 px-5 rounded'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightNav