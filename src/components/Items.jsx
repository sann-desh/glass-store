import { useContext } from "react";
import { storeContext } from "../contxt+reducer/Context";

const Items = ({ item }) => {
  const { addToBasket } = useContext(storeContext);

  const handleAdd = () => {
    // console.log(item);
    addToBasket(item);
  };

  return (
    <div className='h-[400px] px-6 py-8 flex flex-col justify-between border-2 border-gray-100'>
      <img src={item.img} alt={item.name} className='w-60' />
      <hr className='mb-4' />
      <div className='flex flex-row justify-between'>
        <div className='details'>
          <p className='underline my-1'>{item.name}</p>
          <p>$ {item.price.toFixed(2)}</p>
        </div>
        <button
          onClick={handleAdd}
          className='mx-8 px-2 mb-1 mt-auto h-12 text-xs w-[90px] font-bold text-white bg-purple-300 border rounded-2xl hover:bg-purple-400'
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};
export default Items;
