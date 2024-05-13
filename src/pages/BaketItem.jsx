import { useContext } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";

import { storeContext } from "../contxt+reducer/Context";

const BaketItem = ({ item }) => {
  const { removeFromBasket } = useContext(storeContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };
  console.log(item);
  return (
    <div className='flex flex-col items-center border-2 border-gray-200 rounded-xl'>
      <div className='w-screen flex flex-row justify-evenly items-center'>
        <img className='w-[100px]' src={item.img} alt={item.name} />
        <p>{item.name}</p>
        <p>$ {item.price}</p>
      </div>
      <button
        onClick={handleRemove}
        className='items-center text-xs font-bold bg-red-300 p-4 rounded-full hover:bg-red-400 text-white mb-2'
      >
        Remove from Basket
      </button>
      <div>
        <div className='inc-dec flex justify-center items-center mt-4'>
          <button className='text-xl'>
            <TiMinus />
          </button>
          <p className='inline-block mx-4 text-lg'>{1}</p>
          <button>
            <TiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BaketItem;
