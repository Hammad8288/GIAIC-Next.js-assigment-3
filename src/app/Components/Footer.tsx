import Image from "next/image"
export default function Footer () {
    return (
        <div className=" bg-[#043873] w-[1920px] h-[461px] top-[5195px] px-[220px] pt-[140px] pb-[32px] text-white gap-[200px]">
            <div className="w-[1480px] h-[289px] gap-[100px]">
                <div className="w-[1480px] h-[169px] gap-[100px] flex justify-center">
                    <div className="w-[295px] h-[169px] gap-[15px]   ">
                        <Image 
                        src={"/Logo.png"}
                        alt="logo"
                        width={191}
                        height={34}
                        />
                        <p className=" text-white mt-5 w-[240px] h-[120px] font-[400] text-[18px] leading-[30px]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="w-[295px] h-[127px] gap-[15px]">
                        <p className="font-bold w-[68px] h-[22px] text-[18px] leading-[21.78px]">Product</p>
                        <p className="w-[70px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Overview</p>
                        <p className="w-[50px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Pricing</p>
                        <p className="w-[177px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Customer stories</p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                        <p className="font-bold w-[91px] h-[22px] text-[18px] leading-[21.78px]">Resources</p>
                        <p className="w-[33px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Blog</p>
                        <p className="w-[128px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Guides & tutorials</p>
                        <p className="w-[130px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Help center stories</p>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                        <p className="font-bold w-[83px] h-[22px] text-[18px] leading-[21.78px]">Company</p>
                        <p className="w-[66px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">About us</p>
                        <p className="w-[62px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Careers
                        </p>
                        <p className="w-[99px] h-[20px] text-[16px] leading-[20px] font-[400] mt-5">Media kit</p>
                    </div>
                </div>
                <div className="w-[1480px] h-[20px] mt-24 flex justify-center items-center">
                    <div className="w-[169px] h-[20px] gap-[60px]">
                        <p className="w-[169px] h-[20px] font-[400] text-[16px] leading-[20px]">©2021 Whitepace LLC.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//                
