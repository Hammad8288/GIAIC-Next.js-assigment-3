import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function Work() {
  return (
    // First Portion
    <div className="bg-white  w-[1920px] h-[1588px] top-[140px] px-[220px] py-[140px]">
      <div className="flex items-center w-[1480px] h-[547px] gap-[60px]">
        <div className="w-[672px] h-[411px] gap-[60px]">
          <div className="w-[672px] h-[288px] gap-[24px]">
            <h1 className="w-[672px] h-[174px] text-[72px] leading-[87.14px] text-[#212529] font-bold">
              Project Management
            </h1>
            <p className="w-[672px] h-[90px] mt-3 font-[400] text-[18px] leading-[30px] text-[#212529]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
          </div>
          <button className="flex justify-center text-center items-center w-[201px] h-[63px] px-[40px] py-[20px] bg-[#4F9CF9] rounded-lg hover:cursor-pointer text-white mt-14 font-[500]">
            Get Started
            <FaArrowRight className="w-[14px] h-[14px] ml-2 mt-[3px]" />
          </button>
        </div>
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
      </div>
      {/* Second Portion */}
        <div className="flex items-center w-[1480px] h-[661px] gap-[100px] mt-64 ">
            <div className="w-[710px] h-[661px]">
                <Image src={"/Content.png"} alt="work" height={710} width={661}/>
            </div>
            <div className="w-[670px] h-[294px] gap-[60px] ">
              <div className="w-[670px] h-[171px]">
                 <h1 className="w-[670px] h-[87px] font-bold text-[72px] mb-6 leading-[87.14px] text-[#212529]">Work together</h1>
                  <p className="w-[670px] h-[60px] text-[#212529] font-[400] text-[18px] leading-[30px]">With whitepace, share your notes with your colleagues and collaborate on them.
                    You can also publish a note to the internet and share the URL with others. </p>
              </div>
            </div>
        </div>
    </div>
  );
};
