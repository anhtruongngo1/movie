import {AiFillStar} from 'react-icons/ai'
import noImg from '../img/noimg.png';
import { Link } from 'react-router-dom';
const MovieList = ({movie ,setSelectMovie }) => { 
   
    const link = "https://image.tmdb.org/t/p/w500"
    
    return ( 
       
        

        <Link to="/detail" 
            onClick={() => setSelectMovie(movie)}
        className="hover:opacity-40 mr-[20px] mb-[20px]    flex-col w-[200px] shadow-user cursor-pointer flex text-white ">
               {movie.poster_path ?
                <img className="rounded-[6px] h-[260px] bg-cover" src={link + movie.poster_path} alt="" />
                :  <img className="rounded-[6px] h-[260px] bg-cover" src={noImg} alt="" />
               }
                <div className="flex flex-nowrap align-center justify-center py-[20px]">
                    <AiFillStar color="#EFCE4A"/>
                    <AiFillStar color="#EFCE4A"/>
                    <AiFillStar color="#EFCE4A"/>
                    <AiFillStar color="#EFCE4A"/>
                    <AiFillStar color="#EFCE4A"/>
                </div>
                <h1 className="text-[20px] font-bold text-center">
                            {movie.original_title}</h1>
                <div className="ml-[10px] text-center">
                Vote_average : <span className="text-red-600 ml-[5px]">{movie.vote_average}</span>
                </div>
                <div className="ml-[10px] text-center">
                Date : {movie.release_date}
                </div>
        </Link>

        
        
       
       

     );
}
 
export default MovieList;