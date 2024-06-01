import { IoSearchCircleSharp } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFilmReelFill } from "react-icons/pi";



function Header() {
  return (
    <>
      <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md flex flex-row justify-between items-center z-50">
        <div className="bg-white rounded-lg w-1/12 h-2/3 ml-12 text-zinc-950"> ShowTime</div>
        <div className=" rounded-lg w-3/12 h-2/3 flex flex-row justify-around text-customGray text-2xl">
            <span className=" w-1/3  flex justify-around items-center px-2 hover:bg-hoverColorSeriesMovies rounded-lg transition-colors duration-200 "> Series <PiTelevisionSimpleBold /></span>
            <span  className="w-1/3  flex  justify-around items-center  hover:bg-hoverColorSeriesMovies rounded-lg transition-colors duration-200">Peliculas <PiFilmReelFill /></span> 
        </div>
        <div className=" w-4/12 flex flex-row justify-center items-center  mr-12">
            <input type="text" className="border-2 rounded-lg text-zinc-900 w-80 h-10 focus:border-blue-950 p-2 outline-none transition-colors " placeholder="Search Here!" />
            <IoSearchCircleSharp className="text-5xl text-white hover:text-gray-400 transition-colors duration-300" />
        </div>
      </nav>
    </>
  );
}

export default Header;
