
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import {  useEffect, useState , createContext } from "react";
import OddMovie from './components/OddMovie'
import SerieMovie from './components/SerieMovie'
import MovieTheaters from './components/MovieTheaters'
import Cartoon from './components/Cartoon'
import DetailMovie from "./components/DetailMovie"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MovieList from './components/MovieList';
import Home from './components/Home';
import YouTube from "react-youtube"


export const ThemeContext = createContext()


 
function App() {

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [searchKey1, setSearchKey1] = useState("")
  const [searchKey2, setSearchKey2] = useState("")
  const [selectMovie, setSelectMovie] = useState({})
  const [movies1 , setMovies1] = useState([])
  const [movies2 , setMovies2] = useState([])
  
  
  const REACT_APP_MOVIE_KEY = "0ee5c1d063db6b20a1d635d977f1d545"
 
  const API_URL = "https://api.themoviedb.org/3"

  const type = searchKey ? "search" : "discover"

  const fetchMovies = async (searchKey) =>{
    const {data : {results} } = await axios.get(`${API_URL}/${type}/movie` ,{
      params: {
        api_key : REACT_APP_MOVIE_KEY ,
        query : searchKey
      }
    })
    chooseMovie(results[0])
    setSelectMovie(results[0])
    setMovies(results)
  }

  const fetchMovies1 = async (searchKey1) =>{
    const type1 = searchKey1 ? "search/movie" : "movie/top_rated"
    const data1 = await axios.get(`${API_URL}/${type1}` ,{
      params: {
        api_key : REACT_APP_MOVIE_KEY ,
        query : searchKey1
      }
    })
    setMovies1(data1.data.results)
  }
  const fetchMovies2 = async (searchKey2) =>{
    const type2 = searchKey2 ? "search/movie" : "movie/upcoming"
    const data2 = await axios.get(`${API_URL}/${type2}` ,{
      params: {
        api_key : REACT_APP_MOVIE_KEY ,
        query : searchKey2
      }
    })
    setMovies2(data2.data.results)
  }
 const fetchVideo = async (id) =>{
    const {data} = await axios.get(`${API_URL}/movie/${id}`,{
      params: {
        api_key : REACT_APP_MOVIE_KEY ,
        append_to_response:'videos'
      }
    })
    setSearchKey('')
    setSearchKey1('')

    
    return data
    
  }
  const chooseMovie = async(movie) =>{
      const data = await fetchVideo(movie.id)
  
      setSelectMovie(data)
      
     
  }  
  useEffect(  () =>{
    fetchMovies();
    fetchMovies1()
    fetchMovies2()
  },[] )
  
 const searchMovie = (e) => {
   e.preventDefault()
   fetchMovies(searchKey)
   fetchMovies1(searchKey1)
   fetchMovies2(searchKey2)
 }
    ///   phần hổ trợ respinsive
    const [windowSize , setwindowSize] = useState({
      width : undefined,
      height : undefined
    })
    const [isMobile , setMobile] = useState(false)
    useEffect(() => {
      const handlesize = () => {
        setwindowSize({
          width : window.innerWidth ,
          height : window.innerHeight ,
        });
      };
      window.addEventListener('resize', handlesize)
      handlesize();
      return () => window.removeEventListener('resize', handlesize)
    },[]);
      useEffect(() => {
          if(windowSize.width < 500) {
            setMobile(true)
          }else {
            setMobile(false)
          }
      },[windowSize])
 

  const value ={
    movies ,
    movies1,
    movies2 ,
    setSearchKey ,
    setSearchKey1,
    setSearchKey2,
    searchMovie ,
    setSelectMovie,
    selectMovie ,
    chooseMovie ,
    isMobile

  }   
  return (
    <BrowserRouter>

    <ThemeContext.Provider value={value}> 

   <div className="bg-[#081b27] h-auto relative top-0">
     <Navbar />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/odd" element={<OddMovie/>} />
        <Route path="/serie" element={<SerieMovie/>} />
        <Route path="/theaters" element={<MovieTheaters/>} />
        <Route path="/ca" element={<Cartoon/>} />
        <Route path="/detail" element={< DetailMovie/>} />

    </Routes>
     

 
   </div>
    </ThemeContext.Provider>
    </BrowserRouter>
   
   
  
   
  );
}

export default App;
