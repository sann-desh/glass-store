import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import BaketItem from "./BaketItem";
import { storeContext } from "../contxt+reducer/Context";

const Basket = () => {
  const { products, total } = useContext(storeContext);
  return (
    <div>
      {/* {console.log(total)} */}
      <Navbar />
      {/* {console.log(initialState)} */}
      <h1 className='text-center text-xl font-bold underline'>Basket Items</h1>
      <h4 className='text-end mr-20'>Total: $ {total.toFixed(2)}</h4>
      <div className='mt-10 mb-4 text-md font-bold flex flex-row justify-evenly'>
        <h2>Product Image</h2>
        <h2>Name</h2>
        <h2>Price</h2>
      </div>
      <hr className='mb-2' />

      {products.map((item, index) => (
        <BaketItem item={item} key={index} />
      ))}
    </div>
  );
};
export default Basket;
