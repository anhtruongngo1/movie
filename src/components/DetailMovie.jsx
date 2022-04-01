
import {AiFillStar} from "react-icons/ai"
import {BsClock} from "react-icons/bs"
import {ThemeContext} from "../App"
import { useContext, useState } from "react";
import YouTube from "react-youtube"
import {AiFillCloseCircle} from "react-icons/ai"
import Footer from "./Footer";

const DetailMovie = () => {
    const [playTrailer , setPlayTrailer] = useState(false)
    
    const valueParent = useContext(ThemeContext)
    
    const renderTrailer = () =>{
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        console.log('data',valueParent.selectMovie.videos.results)
        const trailer = valueParent.selectMovie.videos.results.find(vid => vid.name === 'Official Trailer' || vid.site === 'YouTube' ) 
        console.log(trailer)
        return (
            <div>

                {valueParent.isMobile ?
                    <YouTube
                    className="w-[400px] h-[300px]"
                    videoId={trailer.key || 'hL7-aGiNZRk' }
                      />
                 : <YouTube
                 videoId={trailer.key || 'hL7-aGiNZRk' }
                   />
                }
            </div>
        )
         
      }
    const link ='https://image.tmdb.org/t/p/original'

    const toggleView = () =>
     {
         const container = document.querySelector('#container')
         container.classList.toggle("opacity-60")
         const container2 = document.querySelector('#container2')
         
     }
    
  


    
    return ( <div  className=" overflow-hidden w-[100%] mx-auto pt-[65px] text-white h-[1200px] relative z-20 "
        >
        <div className="bg-[rgba(7,24,34,.8)]   w-[100%] ">

        <img src={link + valueParent.selectMovie.backdrop_path} alt="" className="opacity-40" />
        </div>
        <div id="container" className="w-[100%] align-center flex z-20 flex-col xl:flex-row absolute top-[85px] left-[50%] translate-x-[-50%] "
        >
            <img src={link + valueParent.selectMovie.backdrop_path} alt=""  className="mx-[30px] mt-[30px] xl:w-[600px] h-[510px] bg-cover rounded-[10px]"/>
            <div className="w-[100%]">
            <h1 className=" text-[68px] text-center font-Nunito font-extrabold text-white">
            {valueParent.selectMovie.original_title}
            </h1>
            <div className="flex flex-nowrap">
            <AiFillStar color="EFCE4A" size="25px"/>
            <AiFillStar color="EFCE4A" size="25px"/>
            <AiFillStar color="EFCE4A" size="25px"/>
            <AiFillStar color="EFCE4A" size="25px"/>
            <AiFillStar color="EFCE4A" size="25px" />
            <div className="ml-[25px] flex flex-nowrap">
                
            <BsClock color="EFCE4A" size="25px"/>
            <span className="ml-[10px]">25/3/2022</span>
            </div>
            </div>
            <div className="">
               
                <button
                    onClick={() =>{ setPlayTrailer(true)
                                    toggleView()
                    }
                }
                 className="block ml-auto mr-auto rounded-[10px] mt-[20px] px-[18px] py-[10px] bg-[#3898EC]">Trailer</button>
               
                <div className="pt-[20px] text-center xl:text-left">Quốc gia: Hàn Quốc</div>
                <div className="pt-[20px] text-center xl:text-left">original_language: {valueParent.selectMovie.original_language}</div>
                <div className="pt-[20px] text-center xl:text-left">popularity: {valueParent.selectMovie.popularity}</div>
                <div className="pt-[20px] text-center xl:text-left">vote_average: {valueParent.selectMovie.vote_average}</div>
                <div className="pt-[20px] text-center xl:text-left">vote_count: {valueParent.selectMovie.vote_count}</div>
            </div>
            <div className="pt-[20px] text-[#669900] text-[18px] font-Nunito">OVERVIEW :
            {valueParent.selectMovie.overview}
            </div>
            

            
            

         


            </div>
            
            
        </div>
        <div id="container2" className="w-[100%] translate-x-[0px] xl:translate-x-[-50%] absolute xl:left-[50%] left-0 top-[100px] z-50">
        {playTrailer ?<div>
            <AiFillCloseCircle size="40px " 
                            onClick={() =>{ 
                                toggleView()
                                setPlayTrailer(false)}
                        }  
                            />
            </div> 
            : null
            }

            {valueParent.selectMovie.videos &&playTrailer ? renderTrailer() : null }
            
            </div>
           




    </div> );
}
 
export default DetailMovie;