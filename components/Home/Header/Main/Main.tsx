import Image from "next/image";
import MsPhoto from "../../../../public/assets/img/home/rrr.png"
import HomeBg from "../../../../public/assets/img/home/bg-home.jpg";
import {FaWhatsapp} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
export default function cmp_header_main() {
  return (
    <div className="h-full w-full ">
      <div className="flex bg-[#9BA4B5]  items-center justify-center flex-col-reverse lg:flex-row">
        <div className="w-full flex p-5 items-start justify-center flex-col">
          <div className="flex flex-col w-full items-start justify-center ">
          <div className="flex items-center justify-center gap-x-10">
          <h1 className="text-3xl uppercase">hi! i am 
           </h1>
           <span className="text-lg uppercase  p-2 rounded-lg bg-gradient-to-r from-[#F1F6F9]">DEVEloper</span>

          </div>
         
           <h1 className="text-3xl mt-3 uppercase">mohammad soheil
           </h1>
          </div>
          <div className="uppercase  mt-3 text-[#F1F6F9]">
            <p>full stack developer for 3 years </p>
          </div>
          <div className=" mt-3 flex items-center gap-x-10 justify-center">
          <button type="button" className="bg-gradient-to-r from-[#212A3E] inline-flex duration-500 ease-in-out items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#394867] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <TbBrandTelegram/>
  Call In Telegram
</button>
<button type="button" className="bg-gradient-to-r  from-[#212A3E] inline-flex duration-500 ease-in-out items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#394867] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <FaWhatsapp />
  Call In Whatsapp
</button>
          </div>
          <div className=" mt-3 flex items-start justify-around">
          <div>
          <h4 className="uppercase  text-[#394867]">+84</h4>
            <p className="uppercase w-[50%] text-[#F1F6F9]"> Clients on work world wide</p>
         </div> 
         <div>
          <h4 className="text-[#394867]">570</h4>
          <p className="uppercase w-[50%] text-[#F1F6F9]">Project Done</p>
         </div>
         </div>
         <div className="mt-3">
          <h4 className="text-[#394867]">Contact</h4>
          <p className=" w-[50%] text-[#F1F6F9]">moh99soheil@gamil.com</p>
         </div>
        </div>
        <div className="w-full text-[#F1F6F9] h-[100%] pt-32 bg-[#212A3E]">
     <div className="flex items-center justify-center flex-col">
     <div className="flex items-center justify-around">
          <div >
            <p className="text-lg uppercase">Your mind is your future</p>
            <p className="mt-2 text-xl font-bold uppercase">build your mind</p>
          </div>
          </div>
          <div className="w-full mt-3 relative flex items-center justify-center">
    <Image src={MsPhoto} alt="ms-photo" width={400}   className="object-contain"></Image>
</div>
     </div>
        </div>
      </div>
    </div>
  );
}
