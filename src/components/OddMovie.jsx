
import MovieList from "./MovieList";
import {ThemeContext} from "../App"
import { useContext } from "react";
import Input from "../components/Input";
import Footer from "./Footer";


const OddMovie = () => {

    const valueParent = useContext(ThemeContext)
    
    const renderMovies = () => (
        valueParent.movies1.map(movie => (
            <MovieList
               setSelectMovie ={valueParent.chooseMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )
    return ( 
        <div className="mt-[55px]">
            <div className="pt-[40px]">
                
            <form onSubmit={valueParent.searchMovie}  className="bg-[#081b27] w-[100%] xl:w-[999px] m-auto flex flex-nowrap">
             <input className="  20px] w-[100%] h-[38px] rounded-l-[10px] outline-none pl-[15px]" 
             type="text" 
            placeholder="Bạn muốn tìm phim gì ?" 
             onChange={(e)=>valueParent.setSearchKey1(e.target.value)}
        />
        <input type="submit" value="Tìm kiếm" className="cursor-pointer  h-[38px] bg-[#3898EC] text-white px-[10px]" />
</form>
            </div>
            <div className="xl:w-[1111px] w-[100%] overflow-hidden mx-auto flex flex-nowrap mt-[100px] " >
       
       <h1 className="text-[#F1B722] text-[45px] font-semibold font-Nunito">PHIM LẺ</h1>
       {
           valueParent.isMobile ? null 
           : 
           <div className="flex flex-nowrap text-white text-[18px] ml-[75px]">
           <li className="flex ">
               <a className="text-[#3d6888] hover:bg-[#FFFFFF] hover:text-black rounded-[30px] ml-[12px] leading-[60px] bg-[#0C2738] px-[20px]  align-center justify-center" href="">Tất cả phim</a>
           </li>
           <li className="flex">
               <a className="text-[#3d6888] hover:bg-[#FFFFFF] hover:text-black rounded-[30px]  ml-[12px] leading-[60px] bg-[#0C2738] px-[20px]  align-center justify-center" href="">Sắp chiếu</a>
           </li>
           <li className="flex">
               <a className="text-[#3d6888] hover:bg-[#FFFFFF] hover:text-black rounded-[30px]  ml-[12px] leading-[60px] bg-[#0C2738] px-[20px]  align-center justify-center" href="">phim mới</a>
           </li>
          
       </div>


       }
    
       


   </div>
       <div className="xl:w-[1111px] mx-auto flex flex-row flex-wrap justify-evenly mt-[20px]">
           {renderMovies()}
          
          
       </div>
       <Footer />

        </div>

    );
}
 
export default OddMovie;