import data from "../data/dataFile";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Home = () => {
  const [dataList, setDataList] = useState("");

  const dataRetrieve = (data) => {
    setDataList(data);
  };

  // console.log(dataList);
  return (
    <>
      <Navbar newData={dataRetrieve} />

      <div className='mb-4 w-screen flex flex-row gap-4 flex-wrap justify-center items-center alig'>
        {dataList.length < 1
          ? data.map((item, i) => <Items item={item} key={i} />)
          : dataList.map((item, i) => <Items item={item} key={i} />)}
      </div>
    </>
  );
};
export default Home;
