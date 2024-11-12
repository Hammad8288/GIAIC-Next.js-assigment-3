import Image from "next/image"
export default function Sponsors () {
    return (
        <div className="bg-white w-[1922px] h-[538px] top-[4654px] px-[220px] py-[140px] gap-[100px] flex items-center text-center flex-col">
            <h1 className=" text-center w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] text-[#212529] mb-8" >Our sponsors</h1>
            <div className="">
                <Image 
                src={"/Sponsors.png"}
                alt="Sponsors"
                width={1482}
                height={71}
                />
            </div>
        </div>
    )
};