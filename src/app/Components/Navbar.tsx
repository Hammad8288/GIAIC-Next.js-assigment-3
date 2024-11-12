import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[#043873] w-[1920px] h-[92px] px-[220px] py-[16px] flex justify-between items-center">
      <div>
        {" "}
        <Image src="/Logo.png" alt="" width={200} height={100}/>
      </div>
      <div className="h-[60px] w-[737.5px] space-x-8 flex font-bold justify-between items-center  text-white">
        <div className="h-[23px] w-[549px] space-x-14">
          <span className="w-[78px] h-[23px]">Products</span>
          <span className="w-[79px] h-[23px]">Solutions</span>
          <span className="w-[89px] h-[23px]">Resources</span>
          <span className="w-[58px] h-[23px]">Pricing</span>
        </div>
        <div className="w-[126px] h-[60px] px-[40px] py-[16px] bg-[#FFE492] rounded">
          <span className="text-[#043873] w-[46px] h-[23px]">Login</span>
        </div>
      </div>
    </div>
  );
};

  