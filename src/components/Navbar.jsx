import { Link } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../contxt+reducer/Context";

const Navbar = () => {
  const { products } = useContext(storeContext);
  return (
    <>
      <div className='w-screen text-sm sm: text-md px-8 py-6 bg-gray-200 relative justify'>
        <ul className='flex flex-row justify-evenly'>
          <Link to='/'>Home</Link>
          <Link to='/basket'>
            Basket
            {products.length !== 0 && (
              <span className='align-top ml-1 text-[10px] bg-red-500 text-white px-1 rounded-full '>
                {products.length}
              </span>
            )}
          </Link>
        </ul>
      </div>
      <h1 className='font-bold text-lg text-center my-4'>
        My new E-commerce Site
      </h1>
    </>
  );
};
export default Navbar;
