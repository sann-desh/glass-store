import data from "../data/dataFile";
import Items from "../components/Items";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4 w-screen flex flex-row gap-4 flex-wrap justify-center items-center alig'>
        {data.map((item, i) => (
          <Items item={item} key={i} />
        ))}
      </div>
    </>
  );
};
export default Home;
