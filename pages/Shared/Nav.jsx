import Link from "next/link"

const Nav = () => {


  return (
    <div className="flex my-5 w-full justify-between items-center  gap-5">
      <div className="">
        <ul className="flex gap-5 items-center">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={"/"}>Services</Link></li>
        </ul>

      </div>
      {/* <div className="flex items-center">
        {
          user && <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https:github.com/devvsakib.png" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user && user?.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={logOutUser}>Logout</button></li>
            </ul>
          </div>
        }
        {
          !user &&
          <div className="flex items-center gap-3">
            <FaUser className="text-2xl" />
            <Link to={"/login"}>
              <button className="py-2 px-4 hover:bg-blue-400 bg-black/40 text-white rounded-md">Login</button>
            </Link>
          </div>
        }
        <div className="ml-2 text-2xl">
          <button onClick={e => setTheme(!theme)}>
            {
              theme ?
                <FaSun /> :
                <FaMoon />
            }
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Nav