import Image from "next/image";
import HomeBg from "../../../../public/assets/img/home/bg-home.jpg";
export default function cmp_header_main() {
  return (
    <div className="h-screen w-full relative">
      <div className="object-cover w-full h-auto">
        <Image src={HomeBg} alt="home-bg" fill={true}></Image>
      </div>
      <div className=" translate-y-20 w-full h-screen flex items-center justify-center flex-col">
        <div className="flex flex-col ">
          <div>
            <h2>
              <span className="text-gray-600">Mohammad Soheil Davoodi</span>
              <br />
              Full-Stack Developer
            </h2>
          </div>
          <div className="mt-3">
            <h3>
              Based on Iran <br />
              <h4 className="pt-4">Work on the world</h4>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
