import { FaArrowRight } from "react-icons/fa";

export default function EveryWhere() {
  return (
    <div className=" bg-[#043873] w-[1921px] h-[574px] top-[4080px] px-[220px] py-[140px] text-white">
      <div className="w-[1481px] h-[294px] gap-[60px] flex flex-col justify-center items-center">
        <div className="w-[1064px] h-[171px] gap-[24px]  ">
          <h1 className="  w-[1064px] h-[87px] font-bold text-[72px] mb-6 leading-[87.14px]">
            Your work, everywhere you are
          </h1>
          <p className=" text-center w-[1064px] h-[60px] font-[400] text-[18px] leading-[30px]">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
        </div>
        <div className="w-[195px] h-[63px] px-[40px] py-[20px] gap-[10px] bg-[#4F9CF9] rounded-lg flex justify-center">
          <p className="font-[500] text-[18px] leading-[23px] flex  items-center">
            Try Taskey{" "}
            <span className="w-[14px] h-[14px] gap-[4px] ml-2 ">
              <FaArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
