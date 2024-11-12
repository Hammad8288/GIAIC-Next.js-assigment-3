import { FaArrowRight } from "react-icons/fa";

export default function Customize() {
  return (
    <div className="bg-white w-[1921px] h-[812.09px] top-[3268px] px-[220px] py-[140px] gap-[98px] flex items-center">
      <div className="w-[714px] h-[532.09px] gap-[4px] bg-[#C4DEFD] "></div>
      <div className="w-[669px] h-[411px] gap-[60px] ">
        <div className="w-[669px] h-[288px] gap-[24px]">
          <h1 className="w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] text-[#212529] mb-6">
            Customise it to your needs
          </h1>
          <p className="w-[669px] h-[90px] font-[400] text-[18px] leading-[30px] text-[#212529]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
        </div>
        <div className=" flex items-center justify-center rounded-lg w-[171px] h-[63px] px-[40px] py-[20px] bg-[#4f9cf9] gap-[10px] mt-10 hover:cursor-pointer">
          <button className="flex text-white items-center justify-center text-[18px] leading-[23px] font-[500] ">
            Lets Go{" "}
            <span className="w-[14px] h-[14px] ml-2 mb-[1px] ">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
