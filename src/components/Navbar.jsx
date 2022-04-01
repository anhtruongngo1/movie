import Logo1 from '../img/logo1.jpg';
import { Link } from 'react-router-dom';
import {HiOutlineMenu} from "react-icons/hi"
import {IoMdCloseCircle} from "react-icons/io"
import {ThemeContext} from "../App"
import { useContext, useState } from "react";

const Navbar = () => {
      const valueParent = useContext(ThemeContext)
      const [openMenu , setopenMenu] = useState(false)
      const handleOpenMenu =() =>{
              setopenMenu(!openMenu)
         
      }

    return ( 
      <nav className="
       z-[99] w-[100%] bg-[rgb(12,39,56)]   text-white flex fixed  top-0 left-0 right-0 ">
          <div className="xl:w-[80px] w-[80px] ml-[10%] pr-[1px] mr-[10px]  xl:my-0">
              <Link to="/"><img className="" src={Logo1} alt="" /></Link>
          </div>
          <ul className=" w-[100%] overflow-hidden  my-auto align-center justify-center flex flex-row text-[18px] text-[#899ead] font-semibold">
          {
                   openMenu && valueParent.isMobile ? (<IoMdCloseCircle size={"24px"} onClick={handleOpenMenu}  className="text-white cursor-pointer mr-[200px] "/>)
                   : !openMenu && valueParent.isMobile ? (
                    <HiOutlineMenu size="54px"  className="ml-auto" onClick={handleOpenMenu} />
                   ) : (
                       <>
                      <li className="ml-[20%]"> 
                  <Link className=" inline py-[18px] px-[10px] ml-[10px] hover:text-white " to="/" >Phim mới</Link>
                  </li>
            <li> 
                  <Link className="inline py-[18px] px-[10px] ml-[10px] " to="/odd">Phim lẻ</Link>
                  </li>
            <li> 
                  <Link className="inline py-[18px] px-[10px] ml-[10px] " to="/serie">Phim bộ</Link>
                  </li>
            <li> 
                  <Link  className="inline py-[18px] px-[10px] ml-[10px] " to="/theaters">Phim chiếu rạp</Link>
                  </li>
            <li> 
                  <Link className="inline py-[18px] px-[10px] ml-[10px] " to="/ca">phim hoạt hình</Link>
                  </li> 
                       </>
                   )

               }
                {openMenu && (
                  <div id="menu" className="fixed h-[10846px] bg-[#081b27] w-[230.513px] right-0 top-0 ">

                  <nav className="flex flex-col mt-[45px] text-[#899ead]">
  
                    <Link className="border-b-[1px] border-[rgba(141,158,172,.1) ] inline py-[15px] px-[10px] ml-[10px] " to="/" >Phim mới</Link>
                   
              
                    <Link className="border-b-[1px] border-[rgba(141,158,172,.1) ] inline py-[18px] px-[10px] ml-[10px] " to="/odd">Phim lẻ</Link>
                    
              
                    <Link className="border-b-[1px] border-[rgba(141,158,172,.1) ] inline py-[18px] px-[10px] ml-[10px] " to="/serie">Phim bộ</Link>
                  
               
                    <Link  className="border-b-[1px] border-[rgba(141,158,172,.1) ] inline py-[18px] px-[10px] ml-[10px] " to="/theaters">Phim chiếu rạp</Link>
                  
              
                    <Link className="border-b-[1px] border-[rgba(141,158,172,.1)] inline py-[18px] px-[10px] ml-[10px] " to="/ca">phim hoạt hình</Link>
                  </nav>
            
                   
  
            </div>
               )}
                 
            
          </ul>
         

      </nav>
     );
}
 
export default Navbar;