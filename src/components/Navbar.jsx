import { Link } from "react-router-dom";
import data from "../data/dataFile";

import { useContext, useEffect, useState } from "react";
import { storeContext } from "../contxt+reducer/Context";
import { CiSearch } from "react-icons/ci";

const Navbar = ({ newData }) => {
  const { products } = useContext(storeContext);
  const [inputVal, setInputVal] = useState("");
  const [allData, setAllData] = useState(data);

  useEffect(() => {
    const searchedList = allData.filter((item) =>
      item.name.startsWith(inputVal)
    );

    console.log(searchedList);
    setAllData(searchedList);
    newData(searchedList);
  }, [inputVal]);

  return (
    <>
      <div className='w-screen text-sm sm: text-md px-8 py-6 bg-gray-200 relative justify'>
        <ul className='flex flex-row justify-evenly'>
          <Link to='/'>Home</Link>

          <div className='search-bar flex justify-center items-center relative'>
            <input
              type='text'
              placeholder='Search Here'
              className='px-3 py-1 border rounded-xl bg-white'
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
            <CiSearch size={20} className='absolute text-black-500 right-2' />
          </div>

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
