import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <nav className=" flex items-center justify-between gap-6 p-6">
     <div className="flex">
       <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/about">About</Link>
     </div>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative">Cart</button>
     <div className="absolute top-6 right-6 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">6</div>
    </nav>

  )
}
export default Navbar