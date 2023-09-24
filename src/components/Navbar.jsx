import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className='p-4 bg-nav-color'>
      <div className='flex'>
        <Link to='/' className='cursor-pointer font-extrabold text-xl'>ALBUM</Link>
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar