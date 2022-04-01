import Logo1 from '../img/logo1.jpg';
const Footer = () => {
    return (    <div className="text-[#999999] text-[14px] text-center mt-[50px] w-[100%] bg-[#282828] border-t-[1px] border-[#EFC72A]">
    <img className="mx-auto mt-[20px] w-[80px] bg-cover- " src={Logo1} alt="" />
    <p>Contact ads :  
     <a 
     className="hover:text-white"
     href="mailto:anhtruong01226634086@gmail.com"> anhtruong01226634086@gmail.com</a></p>
     <div>
         <a className="hover:text-white" href="">phim mới</a>
         <a className="ml-[20px] hover:text-white" href="">phim chiếu rạp</a>
     </div>
     <div>
         <a className="hover:text-white" href="">phim lẻ</a>
         <a className="ml-[20px] hover:text-white" href="">phim hoạt hình</a>
     </div>
     <p>Trang chuyên phim chiếu rạp VN.</p>
    
</div> );
}
 
export default Footer;