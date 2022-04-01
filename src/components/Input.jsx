import {ThemeContext} from "../App"
import { useContext } from "react";
const Input = () => {
    const valueParent = useContext(ThemeContext)
    return (
        <form onSubmit={valueParent.searchMovie}  className="xl:w-[999px] bg-[#081b27] w-[100%] m-auto flex flex-nowrap">
        <input className="  20px] w-[100%] h-[38px] rounded-l-[10px] outline-none pl-[15px]" 
        type="text" 
        placeholder="Bạn muốn tìm phim gì ?" 
        onChange={(e)=>valueParent.setSearchKey(e.target.value)}
        />
        <input type="submit" value="Tìm kiếm" className="cursor-pointer  h-[38px] bg-[#3898EC] text-white px-[10px]" />
</form>
      );
}
 
export default Input;
