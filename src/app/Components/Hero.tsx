import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="bg-[#043873] w-[1920px] h-[829px] px-[220px] py-[140px] flex items-center text-white ">
      <div className="w-[656px] h-[361px] ">
        <div className="w-[656px] h-[238px]">
          <h2 className="w-[656px] h-[154px] mb-6 text-[64px] font-bold leading-[77.45px] tracking-[-0.02em]">
            Get More Done with whitepace
          </h2>
          <p className="w-[656px] h-[60px] text-[18px] font-[400px] leading-[30px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
        </div>
        <div className="w-[219px] h-[63px] bg-[#4F9CF9] rounded-lg hover:cursor-pointer mt-[60px] flex justify-center items-center">
          <button className="flex items-center justify-center w-full h-full text-[18px] leading-[23px] font-[500]">
            Try Whitepace free <span className="ml-1"><FaArrowRight /></span>
          </button>
        </div>
      </div>
      <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
    </div>
  );
}
