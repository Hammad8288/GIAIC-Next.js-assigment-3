import { FaArrowRight } from "react-icons/fa";

export default function Extension () {
    return (
        <div className="bg-[#043873]  top-[2509px] px-[220px] py-[140px] flex  items-center text-white gap-[98px]">
            <div className="w-[697px] h-[294px] gap-[60px] ">
                <div className="w-[697px] h-[171px] gap-[24px] ">
                    <h1 className="w-[697px] h-[87px] text-[72px] mb-6 font-bold leading-[87.14px]">Use as Extension</h1>
                    <p className="w-[697px] h-[60px] text-[18px] leading-[30px] font-[400]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                <div className=" flex items-center justify-center rounded-lg w-[171px] h-[63px] px-[40px] py-[20px] bg-[#4f9cf9] gap-[10px] mt-14 hover:cursor-pointer">
                    <button className="flex  items-center justify-center text-[18px] leading-[23px] font-[500] ">Lets Go <span className="w-[14px] h-[14px] ml-2 mb-[1px] "><FaArrowRight /></span></button>
                </div>
            </div>
            <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </div>
    )
}